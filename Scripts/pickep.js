function SwitchEp(el) {
    let buttons = document.getElementsByClassName('episode');
    let link = el.getElementsByClassName('ep_page')[0].innerHTML;
    let player = document.getElementsByClassName('videoplayer')[0];
    player.src = link;

    for (let i = 0; i < buttons.length ; i++) {
        buttons[i].style.backgroundColor = "rgb(220, 220, 220)";
        buttons[i].style.color = "rgb(11, 6, 17)";
        console.log(i);
    }
    el.style.backgroundColor = "rgb(38, 18, 56)";
    el.style.color = "#FFFFFF";
}