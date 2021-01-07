function paperClick(self) {
    let help = document.querySelector('.help');
    help.removeChild(help.firstElementChild);
    help.style.color = 'whitesmoke';
    self.classList.add('selected');
    self.classList.remove('paper');
    const addElem = document.createElement('div');
    self.append(addElem)
    fetch('content').then(function (response) {
        response.text().then(function (text) {
            const textList = text.split("\n");
            const randomIndex = Math.floor(Math.random() * textList.length);
            document.querySelector('.selected div').innerHTML = textList[randomIndex];
        })
    });
    self.onclick = null;
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