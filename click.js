function paperClick(self) {
    fetch('content').then(function (response) {
        response.text().then(function (text) {
            let textList = text.split(",");
            let randomIndex = Math.floor(Math.random() * textList.length);
            document.querySelector('.selected').style.backgroundImage = `url('selected/${textList[randomIndex]}')`;
            Kakao.Link.createDefaultButton({

                container: '.kakao-share-btn',
                objectType: 'feed',
                content: {
                    title: '재미로 보는 신년 운세',
                    description: '올해 당신의 운세는? 재미로 보는 2021년 당신의 운세 바로 확인하세요.',
                    imageUrl: `https://happyny.site/selected/${textList[randomIndex]}`,
                    imageWidth: 314,
                    imageHeight: 413,
                    link: {
                        mobileWebUrl: 'https://happyny.site',
                        webUrl: 'https://happyny.site'
                    }
                },
                buttons: [
                    {
                        title: '웹으로 보기',
                        link: {
                            mobileWebUrl: 'https://happyny.site',
                            webUrl: 'https://happyny.site'
                        }
                    }
                ]
            });
        })
    });
    let help = document.querySelector('.help');
    help.removeChild(help.firstElementChild);
    help.style.color = 'whitesmoke';
    self.classList.add('selected');
    self.classList.remove('paper');
    self.onclick = null;
}

function pageReload() {
    location.reload();
}

function copy() {
    const tempElem = document.createElement('textarea');
    tempElem.value = 'happyny.site';
    document.body.appendChild(tempElem);

    tempElem.select();
    document.execCommand("copy");
    document.body.removeChild(tempElem);

    alert("링크가 복사되었습니다.");
}

function naverShare() {
    let url = encodeURI(encodeURIComponent("happyny.site"));
    let title = encodeURI("재미로 보는 신년 운세");
    const shareURL = "https://share.naver.com/web/shareView.nhn?url=" + url + "&title=" + title;
    window.open(shareURL);
}