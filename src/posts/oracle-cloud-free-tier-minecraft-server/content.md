---
title: 'Oracle Cloud에서 무료 Ampere 인스턴스 만들기'
description: 'Oracle Cloud Ampere A1 VM 인스턴스를 만들고, 이를 이용해 무료로 24/7 돌아가는 Linux 서버를 구축하는 방법에 대해 알아봅니다.'

date: '2025-01-16'
categories: ['computer', 'server']
---

[Oracle Cloud](https://cloud.oracle.com/)라는 서비스에서 무료로 VM(가상머신) 인스턴스를 제공하고 있는데, 이를 이용해 무료로 24/7 서버를 구축하고자 하였다.

인증 차원으로 결제 후 환불되는 것 외에 한 푼도 나가는 것이 없고, 또 무료 계정 한도 내에서는 **항상 무료(Always Free)** 혜택을 제공한다. 무료 한도라는 것이 총 합해서 4코어 24GB 램이기 때문에 가벼운 웹 서버라고 하여도 부족하지 않을 정도의 성능이다.

## 참고한 글

[Oracle의 공식 블로그 글](https://blogs.oracle.com/developers/post/how-to-set-up-and-run-a-really-powerful-free-minecraft-server-in-the-cloud)을 참고하였다.

## 준비 사항

- 영문 집 주소
- 16만 원 정도의 잔액이 들어있는 해외 결제 가능 카드: 인증 차원으로 결제 후 바로 환불된다.

## 서비스 가입

[Oracle Cloud](https://signup.oraclecloud.com/) 홈페이지로 들어가 개인 계정으로 가입한다. First Name은 이름, Last Name은 성이며, 영문 이름으로 기입한다. 그 외 집 주소나 국가 등도 거짓 정보 없이 기입하자. 나중에 카드 인증 시 정보가 어차피 확인되니 거짓으로 기입할 필요가 없다.

Home Region 선택 시에는 자신과 가까운 지역을 선택해야 한다. **Home Region에 있는 서버만 무료로 이용할 수 있고**, 또 이 정보는 **나중에 바꿀 수 없으니** 신중하게 선택하자. 필자는 춘천 서버(South Korea(Chuncheon))를 선택하였다.

영문 집 주소는 [영문주소 변환 사이트](https://www.kraddress.com/)를 이용하면 좋다.

카드 인증 시에는 해외 결제(VISA, 아멕스 등)가 되는 카드로 준비하고, 나중에 인스턴스 생성이 안될 시 추가 인증이 필요할 수도 있으니 넉넉잡아 16만 원 정도의 잔액은 있는 것이 좋다. 걱정하지 말자, 돈이 나가고 나서 즉시 환불된다. 계정 최초 가입 시에는 1달러 정도의 금액이 결제되고 바로 환불된다.

## 인스턴스 생성

<Image src="main_page_create_a_vm_instance.webp" width="1880" height="1442" alt="Oracle Cloud 메인 페이지에서 'Create a VM instance' 버튼을 누른다." />

가입이 완료됐다면, 메인 화면에서 'Create a VM instance' 버튼을 클릭하여 새 VM 인스턴스를 생성하여야 한다. VM은 Virtual Machine의 약자로, 가상머신을 의미한다.

### 이름 설정

<Image src="instance_set_name.webp" width="819" height="685" alt="'Create compute instance' 페이지에서 인스턴스 이름을 설정한다." />

버튼을 눌렀다면 'Create compute instance' 화면으로 넘어가는데, 여기서 맨 위에 있는 Name을 원하는 대로 변경한다. 필자는 `minecraft-server`로 설정하였다.

### 운영체제 설정

<Image src="change_image.webp" width="818" height="673" alt="'Image and Shape' 섹션에서 'Change image' 버튼을 누른다." />

그 후 아래로 스크롤하여 'Change image' 버튼을 누른다.

<Image src="select_ubuntu.webp" width="948" height="998" alt="'Ubuntu' -> 'Canonical Ubuntu 24.04'를 선택한 후 'Select image' 버튼을 누른다." />

그 후 원하는 Linux 배포판을 선택해주면 된다. 필자는 사용하기 비교적 쉬운 Ubuntu 24.04 버전을 골랐다. 웬만해서는 Windows는 선택하지 말자. 유료이고, 또 Windows 운영체제 자체가 성능을 많이 잡아먹기 때문에 서버로는 적합하지 않다.

고른 후에는 아래에 있는 'Select image' 버튼을 눌러 선택을 완료한다.

### Shape 설정

<Image src="change_shape.webp" width="792" height="310" alt="'Change shape' 버튼을 누른다." />

그 후 'Change shape' 버튼을 누른다.

<Image src="select_a1_shape.webp" width="1219" height="1197" alt="'Change shape'을 누르고 Shape 설정을 진행한다." />

1. Ampere를 선택하고, 'VM.Standard.A1.Flex'를 선택한다. 옆에 'Always Free-eligible' 딱지가 붙어있으면 항상 무료(Always Free) 혜택이 적용 가능하다는 뜻이다.
1. Number of OCPUs를 조정한다. 무료 한도는 만든 VM 인스턴스들의 OCPU 값들을 합해서 **최대 4**까지이다.
1. Amount of memory를 조정한다. 무료 한도는 만든 VM 인스턴스들의 메모리 값들을 합해서 **최대 24GB**까지이다.
1. 'Select shape' 버튼을 눌러 설정을 완료한다.

무료 한도는 [Oracle의 공식 문서](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm)에서 확인할 수 있다.

```
OCI Ampere A1 Compute instances (Arm processor): All tenancies get the first 3,000 OCPU hours and 18,000 GB hours per month for free for VM instances using the VM.Standard.A1.Flex shape, which has an Arm processor. For Always Free tenancies, this is equivalent to 4 OCPUs and 24 GB of memory.
```

한도는 만든 인스턴스들의 값들을 합하여 계산한다. 즉, 4코어 24GB 램 하나짜리를 만들거나, 또는 2코어 12GB 램짜리 두 개를 만들거나 하는 식으로 분배하여 사용할 수 있다. 필자는 마인크래프트 서버 용도로 4코어 12GB로 설정하여 사용하고 있다.

### VNIC 설정

<Image src="edit_vnic_info.webp" width="2506" height="2316" alt="'Primary VNIC information' 섹션에서 설정을 진행한다." />

그 후 아래로 내려가 'Primary VNIC information' 섹션에서 설정을 진행하여야 한다.

1. VNIC name은 따로 설정하지 않아도 된다.
1. 'Create new virtual cloud network'를 선택한다
1. 'New virtual cloud network name'에서 이름은 원하는 대로 설정한다. 필자는 `minecraft-vcn`으로 설정하였다.
1. 'Create new public subnet'을 선택한다.
1. 'New subnet name'에서 이름은 원하는 대로 설정한다. 필자는 `minecraft-subnet`으로 설정하였다.
1. 아래 'Primary VNIC IP addresses' 설정은 따로 건들지 않아도 된다.

### SSH 키 다운로드

<Image src="download_ssh_keys.webp" width="1234" height="392" alt="'Add SSH keys' 섹션에서 SSH 키를 내려받는다." />

아래 'Add SSH keys' 섹션에서 SSH 키를 내려받아야 한다. SSH는 원격으로 다른 컴퓨터(여기서는 여러분의 컴퓨터)에서 다른 컴퓨터(여기서는 가상머신)의 콘솔로 접근할 수 있게 해주는 프로그램이다.

'Save private key'와 'Save public key' 버튼을 눌러 개인 키와 공개 키 두 개를 내려받아줘야 한다.

### Boot volume 설정

<Image src="boot_volume_default_settings.webp" width="762" height="482" alt="'Boot volume' 섹션의 기본 설정 화면" />

Boot volume은 VM 인스턴스를 부팅할 때 사용하는 Detachable한 저장 공간을 말한다. Detachable하다는 것은, 나중에 다른 VM 인스턴스를 만들 때 지금 여기서 만든 Boot volume을 삭제하지 않는 한 이 Boot volume을 '재사용'할 수 있다는 것이다. 문제가 생겼을 때 유용하다고 한다.

#### 저장공간 크기 변경(선택)

기본 설정으로 놔두어도 괜찮지만, 만약 저장공간 크기를 바꾸고 싶다면 'Specify a custom boot volume size' 버튼을 눌러 크기를 변경할 수 있다.

<Image src="change_boot_volume_size.webp" width="1243" height="786" alt="'Specify a custom boot volume size' 버튼을 눌러 Boot volume 크기를 변경한다." />

1. 'Specify a custom boot volume size' 체크박스를 선택한다.
1. 'Boot volume size'를 변경한다. 최소 47GB 이상이어야 하며, 무료 한도는 **최대 200GB**까지이다.
1. 'VPU'는 저장공간 속도를 말하며, 최대치까지 끌어올리자. 과금되지 않는다.

무료 한도는 위에서 말한 [Oracle의 공식 문서](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm)에서 확인할 수 있다.

```
Depending on the size of the boot volume and the number of OCPUs that you allocate to each OCI Ampere A1 Compute instance, you can create up to four compute instances. The minimum boot volume size for each instance is 47 GB, regardless of shape. Your account comes with 200 GB of Always Free block volume storage which you use to create the boot volumes for your compute instances.
```

### 생성

<Image src="create_instance.webp" width="469" height="507" alt="맨 아래의 'Create' 버튼을 클릭한다." />

설정이 완료됐다면 하단의 'Create' 버튼을 클릭하여 인스턴스를 생성할 수 있다.

#### 'Out of capacity' 오류

<Image src="out_of_capacity.webp" width="761" height="188" alt="맨 아래의 'Create' 버튼을 클릭한다." />

생성 버튼을 눌렀는데 위와 같이 'Out of capacity' 오류가 떴다면, 이는 해당 지역에서 VM 인스턴스 자리가 모두 찼다는 것을 뜻한다. 검색해보면 이를 우회하기 위해 자동 스크립트를 짜는 방법 등이 나오긴 하지만, 이는 성공할 가능성도 낮고 시간도 오래 걸릴 뿐더러 정상적인 방법은 아니기 때문에 필자는 계정을 PAYG(Pay-As-You-Go) 계정으로 변경하여 생성에 성공하였다.

PAYG는 말 그대로 사용한 만큼만을 과금한다는 뜻이며, 위에서 서술했던 무료 한도 내에서만 사용한다면 (바로 환불되는) 인증 차원에서의 결제만을 제외하면 절대로 과금되지 않는다.

##### PAYG 계정으로 변경

<Image src="billing_settings.webp" width="1227" height="1016" alt="계정 과금 설정에 들어간다." />

위의 네비게이션 바를 통해 Billing & Cost Management -> Upgrade and Manage Payment 버튼을 클릭하여 계정 과금 설정에 들어간다.

<Image src="payg_billing.webp" width="955" height="502" alt="PAYG 설정이 완료된 모습" />

위 사진은 필자의 PAYG 설정이 완료된 계정의 설정 모습이다.

<Callout type="info">혹여나 계정 설정에서 'Your account provisioning is in progress.'라고 뜬다면 아직 그 계정은 Oracle 관계자에 의해서 검토 중인 단계이니 조금만 기다린 후 메일로 완료 문자가 오면 그때 사용하면 된다. 필자의 경우 **4시간 정도** 소요되었다.</Callout>

'Payment Method'에서 카드를 추가하고, 아래의 'Pay As You Go' 섹션에서 Upgrade 버튼을 눌러 계정을 PAYG 계정으로 업그레이드할 수 있다. PAYG 계정으로 업그레이드를 할 때에는 카드에서 15만 원 정도가 빠져나간 후 바로 환불된다.

PAYG 계정의 경우도 **Oracle 관계자가 직접 검토 후 수락**하는 방식이니 시간이 조금 걸릴 수 있다. 필자의 경우 **3시간 정도** 소요되었다.

<Image src="billed_account.webp" width="2158" height="2230" alt="카드에서 151,867원과 2,240원이 빠져나간 후 바로 환불된 모습" />

위 사진에서 2천 원 정도가 빠져나간 것은 최초 계정 생성 시의 카드 인증 때, 15만 원 정도가 빠져나간 것은 PAYG 계정으로 업그레이드 시 카드를 추가했을 때이다.

## SSH로 인스턴스 접근

<Image src="instance_running.webp" width="945" height="461" alt="'RUNNING' 상태인 인스턴스" />

인스턴스가 성공적으로 생성되었다면 처음 상태는 'PROVISIONING'으로 표시된다. 그 후 1분 정도 기다리면 'RUNNING' 상태로 표시되게 되며, 이때부터 사용할 수 있다.

SSH를 통해서 생성 때 내려받은 키로 해당 VM에 연결할 수 있다. 이 글에서는 Linux 환경을 기준으로 설명한다.

### IP 및 유저네임 확인

<Image src="ip_and_username.webp" width="947" height="263" alt="VM IP와 유저네임" />

인스턴스 대시보드에서 'Instance access' 섹션을 보면 'Public IP address'와 'Username'을 확인할 수 있다. 이 둘을 확인해두자.

### SSH 접속

그 후 터미널을 열어 방금 확인한 IP와 유저네임, 그리고 생성 시 내려받은 SSH 키를 이용하여 VM에 접속한다.

<Image src="ssh_oraclecloud.webp" width="1084" height="601" alt="터미널에서 SSH로 VM에 접속한 모습" />

명령어는 다음과 같다.

```bash
ssh 유저네임@아이피 -i SSH키.key
```

필자의 경우 유저네임은 `ubuntu`였고, 아이피는 `0.0.0.0`, SSH 키 경로는 `~/ssh-key-2025-01-10.key`라고 가정한다면 명령어는 다음과 같을 것이다.

```bash
ssh ubuntu@0.0.0.0 -i ~/ssh-key-2025-01-10.key
```

이제 원하는 대로 서버를 설치하고 바꾸어주면 된다.

#### 'Connection refused' 오류

만약 SSH 접속 시도 중에 'Connection refused' 오류가 발생하였다면 인스턴스 설정 화면에서 'Fault domain'을 다른 것으로 바꾸어주면 된다.

<Image src="edit_instance.webp" width="533" height="208" alt="'Edit' 버튼을 누르는 모습" />
<Image src="edit_fault_domain.webp" width="844" height="492" alt="Fault domain을 바꾸는 모습" />

'More actions' 버튼 클릭 후 'Edit'을 누르고, 'Edit fault domain' 버튼 클릭 후 다른 것으로 바꾸고 'Save changes'를 클릭하면 된다. 그 후 인스턴스가 재시작되고 정상적으로 접속할 수 있을 것이다.

## 결론

완전 무료 혜택을 제공하는 것은 사실상 Oracle Cloud가 유일하고, 성능이 전혀 부족한 것도 아니기 때문에 무료로 가볍게 사용할 수준이라면 정말로 추천하고 싶다. 하지만 인터넷 상에서 [갑자기 인스턴스가 삭제되었다](https://www.reddit.com/r/oraclecloud/comments/tsn4yc/vm_and_instance_was_randomly_deletedremoved_from/)는 등의 사례도 있기 때문에, 정말로 중요한 서버라면 이쪽보다는 셀프 호스팅 또는 GCP나 AWS 등의 다른 유료 서비스를 이용하는 것을 추천한다. 필자의 경우는 아직까지 문제가 발생한 적은 없다.
