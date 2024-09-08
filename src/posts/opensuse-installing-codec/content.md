---
title: openSUSE에서 코덱 설치하기
---

openSUSE Tumbleweed를 설치한 후 Firefox 브라우저에서 YouTube 영상을 시청하려고 헀더니 다음과 같은 오류가 뜨면서 영상 시청이 불가하였다.

```
An error occurred. Please try again later. (Playback ID: ...)
```

따라서 해당 문제를 해결하기 위해 검색을 해보았더니 멀티미디어 코덱이 설치되지 않은 것이 원인인 것으로 보였다.

## 코덱 설치하기

[openSUSE 공식 문서](https://en.opensuse.org/SDB:Installing_codecs_from_Packman_repositories)에서 코덱을 설치하는 방법에 대해 찾을 수 있었다. 해당 문서에서도 코덱이 제대로 설치되지 않은 경우 일어날 수 있는 오류의 예로 멀티미디어 콘텐츠가 재생되지 않는 경우를 들고 있었다.

해당 문서에 따라 [Packman](http://packman.links2linux.org/) 레포지토리를 설치하여 해당하는 코덱들을 설치하고자 하였다. [openSUSE 공식 문서](https://en.opensuse.org/Additional_package_repositories#Packman)에 따르면 openSUSE에서 Packman을 멀티미디어 관련 파일들이나 그 외에 게임 등 다양한 유틸리티를 설치하는 데 사용할 수 있다고 한다.

문단 가장 상단에서 언급한 공식 문서에서는 크게 세 가지 방법을 통해 코덱을 설치하는 방법을 안내하고 있는데, 이 글에서는 Zypper를 이용하여 설치하는 방법에 대해 서술해 보겠다. 먼저 자신이 사용하는 openSUSE 버전에 맞추어 아래 명령어를 실행시켜 Packman 레포지토리를 추가해주어야 한다.

- Tumbleweed:

```bash
sudo zypper addrepo -cfp 90 'https://ftp.gwdg.de/pub/linux/misc/packman/suse/openSUSE_Tumbleweed/' packman
```

- Leap:

```bash
sudo zypper addrepo -cfp 90 'https://ftp.gwdg.de/pub/linux/misc/packman/suse/openSUSE_Leap_$releasever/' packman
```

다음으로 실제 코덱들을 설치하여야 한다. 원하는 방식에 따라 두 가지 방법 중 하나를 골라 설치하면 된다.

- 코덱을 설치하는 동시에 다른 패키지를 Packman을 통하여 설치하는 것으로 바꾸기. [Vendor change](https://en.opensuse.org/SDB:Vendor_change_update)라고 불리는 작업으로 다른 패키지까지 Packman 레포지토리를 통하는 것으로 바꾸는 방식으로, Packman 레포지토리 하의 PipeWire는 기존과 달리 aptX까지 지원하는 것을 공식 문서는 예로 들고 있다.

```bash
sudo zypper refresh
sudo zypper dist-upgrade --from packman --allow-vendor-change
sudo zypper install --from packman ffmpeg gstreamer-plugins-{good,bad,ugly,libav} libavcodec vlc-codecs
```

- 단순히 코덱만 설치하기.

```bash
sudo zypper refresh
sudo zypper install --allow-vendor-change --from packman ffmpeg gstreamer-plugins-{good,bad,ugly,libav} libavcodec vlc-codecs
```

> VideoLAN Client (VLC)을 이용하지 않을 경우 `vlc-codecs`는 명령어에서 제외시킴으로써 설치하지 않아도 된다.
