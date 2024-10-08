---
title: 'Linux에서 Firefox Developer Edition 설치하기'

date: '2024-08-15'
categories: ['computer']
---

Windows 환경에서 프로그램을 설치하기란 간단하다. `.msi`나 `.exe`로 끝나는 파일을 실행하여 설치기가 하라는 대로만 따르면 설치가 완료된다.

하지만 Linux 환경에서는 다르다. 간단한 프로그램조차 터미널에서 명령어를 통해야 하는 경우가 많다. 이 글에서는 Firefox Developer Edition을 압축 파일을 이용해 직접 설치하는 방법을 소개해 보려고 한다.

## Debian과 그 파생 배포판(Ubuntu 등) 환경에서 apt 이용하기

[Mozilla 공식 문서](https://support.mozilla.org/en-US/kb/install-firefox-linux#w_install-firefox-deb-package-for-debian-based-distributions)에 쓰여진 절차들을 **6번을 제외하고** 모두 따른다(해당 명령어들을 실행시킨다).

<Image src="ubuntu firefox.png" width="1336" height="1187" alt="Mozilla 공식 문서에 쓰여있는 절차" />

그 후 다음 명령어를 실행시켜 Firefox Developer Edition(패키지명: `firefox-devedition`을 설치한다.

```bash
sudo apt update
sudo apt install firefox-devedition
```

## 그 외 배포판에서의 직접 설치

[Firefox Developer Edition 페이지](https://www.mozilla.org/en-US/firefox/developer/)에서 압축 파일을 내려받는다. "Download for Linux" 버튼을 자신의 환경(64비트 또는 32비트)에 따라 클릭하면 된다. 버전은 시간에 따라 다를 수 있다.

<Image src="firefox archive.png" width="1943" height="1023" alt="압축 파일을 내려받은 모습" />

---

그 후 터미널을 열어 작업을 시작한다. 이 글에서는 압축 파일이 내려받아진 경로가 `~/Downloads`일 것으로 생각하고 진행할 것이다.

```bash
cd ~/Downloads
tar -xvf firefox-버전.tar.bz2
```

위의 명령어를 실행하여 압축 파일을 푼다. 두 번째 명령어(`tar`)에서 `firefox-`를 친 뒤 'Tab' 키를 누르면 파일 이름을 자동 완성할 수 있다.

`tar` 명령어에서 사용된 파라미터는 다음과 같다.

- `-x`: 압축 파일을 풀겠음을 나타낸다.
- `-v`: 'verbose'의 약어로, 진행 중인 파일들을 콘솔에 나열하여 표시하겠음을 나타낸다.
- `-f`: 다음 파라미터에 명시한 파일을 풀겠음을 나타낸다. 이 경우 `firefox-버전.tar.bz2` 파일을 뜻한다.

---

그 후 푼 압축 폴더를 `/opt` 폴더로 옮길 것이다.

```bash
# sudo 권한이 있어야 한다.
sudo mv ./firefox-버전 /opt/firefox-aurora
```

위 명령어를 실행할 때도 마찬가지로 `firefox-`를 친 뒤 'Tab' 키를 눌러 폴더 이름을 자동 완성할 수 있다.

참고로, `firefox-aurora`는 Firefox의 예전 베타 채널 중 하나였던 것으로 현재는 Developer Edition이 이를 사용한다. 폴더명 자체는 바꾸어도 되지만 이 글에서는 해당 폴더명으로 진행하겠다. 폴더명을 바꾸고 싶다면 다음에 서술할 Desktop entry 파일의 내용 또한 바꾸어줘야 한다.

---

다음으로 Desktop entry 파일을 생성할 것이다. Desktop entry는 Windows의 '바로가기'와 비슷한 역할로, GUI 환경에서 실제로 프로그램을 사용할 수 있게 해주는 역할을 한다.

다음 명령어를 이용해 새로운 Desktop entry 파일을 생성할 것이다.

```bash
mkdir ~/.local/share/applications # 선택 사항. 새로 설치한 경우 먼저 실행하여 본다.
sudo nano ~/.local/share/applications/firefox-aurora.desktop
```

`~/.local/share/applications`는 현재 유저만 사용하는 Personal 디렉토리이며, Desktop entry 파일들을 포함한다. `firefox-aurora.desktop`이라는 파일명은 확장자명을 제외하곤 원하는 대로 바꾸어도 된다.

그 후 표시되는 화면에서 다음을 복사 및 붙여넣기(터미널 내에서는 `Ctrl` + `Shift` + `V`)하여 입력한다.

```desktop
[Desktop Entry]
Name=Firefox Developer
GenericName=Firefox Developer Edition
Comment=The browser made for developers.
Exec=/opt/firefox-aurora/firefox %u
Terminal=false
Icon=/opt/firefox-aurora/browser/chrome/icons/default/default128.png
Type=Application
Categories=Application;Network;X-Developer;
StartupWMClass=firefox-aurora
```

이때 `StartupWMClass=`는 꼭 `firefox-aurora`로 지정해주어야 한다. 현재 Firefox Developer Edition이 사용하는 `WM_CLASS`가 이와 같기 때문이다. 이 값은 Dock에서 같은 프로그램으로 인지하여 하나로 묶어줄 때 사용된다.

---

붙여넣은 뒤, `Ctrl` + `X`를 눌러 파일을 저장해준다. "Save modified buffer?"이라는 텍스트가 뜨면 `Y`와 `Enter` 키를 차례대로 누른다.

<Image src="nano-1.png" width="1155" height="802" alt="터미널 내에서 'Save modified buffer?'가 뜬 모습" />

<Image src="nano-2.png" width="1155" height="802" alt="'File Name to Write:'가 뜬 모습" />

---

이제 설치가 완료되었다. 정상 작동을 확인하면 된다.

<Image src="installed nicely.png" width="1024" height="347" alt="메뉴에 검색했을 때 프로그램이 뜨는 모습" />
