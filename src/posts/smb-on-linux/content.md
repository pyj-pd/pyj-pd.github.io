---
title: 'Raspberry Pi와 외장 HDD를 이용해 SMB 서버 구축하기'
description: '외장 HDD를 이용해 같은 네트워크 내에서 사용할 수 있는 SMB 서버를 구축하는 방법에 대해 알아봅니다.'

date: '2024-09-17'
lastUpdateDate: '2024-09-18'
categories: ['computer']
---

쓰지 않는 1GB RAM의 Raspberry Pi 3B+ 모델 하나와 1TB 용량의 외장 HDD가 있어 이 둘을 이용해 내부 네트워크용 SMB를 구축해보기로 하였다.

## 외장 HDD 포맷

사용 중인 데스크톱에 HDD를 연결하고 YaST Partitioner를 이용하여 외장 HDD를 포맷하기로 하였다. 포맷을 위해서는 CLI를 이용하여도 되고, 다른 GUI 프로그램을 이용하여도 좋다.

필자는 GPT로 파티션 테이블 설정 후 Btrfs 파티션을 통째로 만든 후 그 아래에 Subvolume들을 놓는 식으로 진행하였다. 이 글에서는 파티션을 만드는 과정은 생략하도록 하겠다.

다음은 필자가 실제로 설정한 파티션의 구조이다.

```bash
$ sudo parted /dev/mapper/external-1tb-hdd
GNU Parted 3.5
Using /dev/mapper/external-1tb-hdd
Welcome to GNU Parted! Type 'help' to view a list of commands.
(parted) print
Model: Linux device-mapper (crypt) (dm)
Disk /dev/mapper/external-1tb-hdd: 1000GB
Sector size (logical/physical): 512B/512B
Partition Table: loop
Disk Flags:

Number  Start  End     Size    File system  Flags
 1      0.00B  1000GB  1000GB  btrfs # [!code highlight]
```

### HDD 암호화

필자는 추가로 `cryptsetup`을 이용해 HDD를 암호화하였다.

<Callout type="info">필자는 데스크톱으로 `cryptsetup` 실행 시 오류가 나 Raspberry Pi에 외장 HDD 연결 후 암호화 설정을 진행하였다.</Callout>

우선 `sudo fdisk -l` 명령어를 이용해 암호화할 파티션을 확인하였다. 필자의 경우 `/dev/sda1`였다.

---

그 후 `umount` 명령어를 이용해 파티션은 Unmount해주었고, `cryptsetup luksFormat` 명령어를 이용해 파티션을 포맷하고 암호를 설정해주었다.

<Callout type="warn">`cryptsetup luksFormat` 명령어 사용 시 해당 파티션의 모든 데이터가 삭제된다.</Callout>

```bash
$ sudo umount /dev/sda1
$ sudo cryptsetup luksFormat /dev/sda1
WARNING!
========
This will overwrite data on /dev/sda1 irrevocably.

Are you sure? (Type uppercase yes): YES
Enter LUKS passphrase:
Verify passphrase:
```

---

다음으로 `cryptsetup open` 명령어를 이용해 매핑을 생성하였다.

```bash
$ sudo cryptsetup open /dev/sda1 encrypted-1tb-hdd
Enter passphrase for /dev/sda1:
```

`encrypted-1tb-hdd` 부분의 경우 원하는 이름으로 바꾸어주면 된다.

매핑 디렉토리는 `/dev/mapper/(설정한 이름)`이며, 아래와 같이 확인할 수 있다.

```bash
$ ls -l /dev/mapper/
total 0
1 root root 10, 236 Sep 17 09:03 control
1 root root       7 Sep 17 10:54 external-1tb-hdd -> ../dm-0 # [!code highlight]
```

---

그 후 파일 시스템을 생성해주어야 한다. `mkfs` 명령어를 이용해 주었고, 원하는 파일 시스템에 따라 `mkfs.(파일 시스템)` 형식의 명령어를 사용하면 된다. 필자의 경우 Btrfs를 이용하기 위해 `mkfs.btrfs` 명령어를 사용하였다.

```bash
$ sudo mkfs.btrfs /dev/mapper/encrypted-1tb-hdd
```

---

다음으로 해당 파일 시스템을 마운트해주었다.

```bash
$ sudo mount /dev/mapper/encrypted-1tb-hdd /media/pyj/External_1TB_HDD/
```

`/media/pyj/External_1TB_HDD/` 부분은 원하는 디렉토리로 바꾸어주면 된다.

---

마지막으로, 해당 디렉토리의 권한을 설정해준다.

```bash
$ sudo chown -R $USER /media/pyj/External_1TB_HDD/
```

마찬가지로 자신이 방금 설정했던 디렉토리로 바꾸어 실행하여 주면 된다.

## Raspberry Pi 설치

[Raspberry Pi Imager](https://www.raspberrypi.com/software/)를 이용해 SD 카드에 Raspberry Pi OS를 설치하였다. 설치 방법은 생략하도록 하겠다.

## Samba 서버 구축

Raspberry Pi에서 SMB 서버를 열기 위해 [Samba](https://www.samba.org/)를 설치해주어야 한다.

```bash
$ sudo apt update
$ sudo apt upgrade -y
$ sudo apt install samba samba-common-bin -y
```

---

그 후 SMB 유저를 생성해주어야 한다. `smbpasswd` 명령어를 사용한다.

```bash
$ sudo smbpasswd -a usernamegoeshere
New SMB password:
Retype new SMB password:
```

`usernamegoeshere`를 원하는 유저명으로 바꾸어 실행하면 된다.

---

SMB 서버를 설정해줄 차례이다. `/etc/samba/smb.conf` 파일을 수정해주어야 한다. 필자는 `nano`를 이용하였다.

```bash
$ sudo nano /etc/samba/smb.conf
```

그 후, 맨 아래줄로 내려가 다음 줄을 추가해준다.

```
[smbdrive]
path=/media/pyj/External_1TB_HDD/@/personal
writeable=yes
browseable=yes
public=no
```

`[]` 사이 `smbdrive`는 자신이 원하는 이름으로 수정하고, `path=` 뒤는 SMB 서버를 통해 공유할 디렉토리 경로로 수정하면 된다.

`smb.conf` 파일에 대한 설명은 [Samba 공식 사이트의 smb.conf 페이지](https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html)를 참고하면 좋다.

- `writeable`은 파일을 수정할 수 있는지에 대한 설정을 의미한다.
- `public`은 비밀번호 없이 접속할 수 있는지를 나타내는 설정값이다.

추가로 접속 시 Encryption을 필요로 하고 싶다면 아래 값을 추가해주면 된다.

```
smb encrypt = required
```

맨 윗줄의 `[global]` 아래나, 방금 설정했던 `[smbdrive]`(또는 자신이 설정한 이름) 아래에 추가해주면 된다.

---

그 후 `smbd` 서비스를 재시작하면 끝이다.

```bash
$ sudo systemctl restart smbd
```

## 접속하기

### KDE Dolphin에서 접속하기

왼쪽 사이드바에서 'Remote'를 우클릭하여 'Add Entry...' 버튼을 클릭한다.

<Image src="addentry.png" width="519" height="200" alt="Remote를 우클릭하여 'Add Entry...'가 표시되는 모습" />

그 후 뜨는 창에서 Label은 자신이 원하는 이름으로, Location은 아래와 같이 설정한다.

```
smb://(아이피)/(방금 설정한 이름)
```

아이피의 경우 Raspberry Pi의 아이피, 이름의 경우 위에서 설정한, 이 경우 `smbdrive`를 넣어주어야 한다.

필자의 경우 아이피는 내부 아이피 `192.168.X.X` 값을 넣었다.

따라서 예시로는 다음과 같이 입력될 것이다.

```
smb://192.168.0.5/smbdrive
```

---

추가 후 Remote 탭 아래 표시되는 폴더를 클릭하면 접속이 완료된 것이다.
