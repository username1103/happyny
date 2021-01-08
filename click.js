function paperClick(self) {
    let help = document.querySelector('.help');
    help.removeChild(help.firstElementChild);
    help.style.color = 'whitesmoke';
    self.classList.add('selected');
    self.classList.remove('paper');
    fetch('content').then(function (response) {
        response.text().then(function (text) {
            const textList = text.split(",");
            const randomIndex = Math.floor(Math.random() * textList.length);
            document.querySelector('.selected').style.backbroundImage = `url('selected/${textlist[randomIndex]}')`;
        })
    });
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
    let url = encodeURI(encodeURIComponent("happyny.netlify.com"));
    let title = encodeURI("2021 신년 운세");
    const shareURL = "https://share.naver.com/web/shareView.nhn?url=" + url + "&title=" + title;
    window.open(shareURL);
}