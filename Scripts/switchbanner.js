function SwitchBanner(el) {
    let thumb = el.getElementsByClassName(series2thumb)[0].innerHTML;
    let logo = el.getElementsByClassName(series2logo)[0].innerHTML;
    let desc = el.getElementsByClassName(series2desctext)[0].innerHTML;
    let linkto = el.getElementsByClassName(link)[0].innerHTML;
    setTimeout(function() {
        document.getElementsByClassName(series2)[0].getElementsByClassName(bgcontent)[0].style.backgroundImage = thumb;
        document.getElementsByClassName(series2desc)[0].getElementsByTagName(a)[0].href = linkto;
        document.getElementsByClassName(series2desc)[0].getElementsByClassName(series2logo)[0].src = logo;
        document.getElementsByClassName(series2desc)[0].getElementsByClassName(series2desctext)[0].innerHTML = desc;
        document.getElementsByClassName(series2desc)[0].getElementsByClassName(link)[0].href = linkto;
    }, 40)
    document.getElementById(viewcover).style.opacity = 1;
    setTimeout(function() {
        document.getElementById(viewcover).style.opacity = 0;
    }, 10)
}