let ignore = false;
let element;
document.getElementsByClassName("swiper-slide")[0].style.boxShadow = "0vh 0vw 4vh 0.5vh #FFFFFF";
function SwitchBanner(el) {
    if (!ignore)
    {
        if (element != el) {
            ignore = true;
            let slides = document.getElementsByClassName("swiper-slide");
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.boxShadow = "0vh 0vw 0vh 0vh #FFFFFF";
            }
            el.style.boxShadow = "0vh 0vw 4vh 0.5vh #FFFFFF";
            document.getElementById("viewcover").style.opacity = 1;
            let thumb = el.children[0].innerHTML;
            let logo = el.children[1].innerHTML;
            let desc = el.children[2].innerHTML;
            let linkto = el.children[3].innerHTML;
            console.log(document.getElementById("series2"));
            setTimeout(function() {
                document.getElementById("series2").getElementsByClassName("bgcontent")[0].style = "background-image: url('" + thumb + "');";
                document.getElementsByClassName("series2desc")[0].getElementsByTagName("a")[0].href = linkto;
                document.getElementsByClassName("series2desc")[0].getElementsByClassName("series2logo")[0].src = logo;
                console.log("url('" + thumb + "');");
                document.getElementsByClassName("series2desc")[0].getElementsByClassName("series2desctext")[0].innerHTML = desc;
                document.getElementsByClassName("series2desc")[0].getElementsByClassName("link")[0].href = linkto;
                // setTimeout(function() {
                    //document.getElementById("viewcover").style.opacity = 0;
                    //ignore = false;
                // }, 150)
            }, 300)
            element = el;
        }
    }
    else {
        console.log("Ignored function")
    }
}

function RemoveCover() {
    document.getElementById("viewcover").style.opacity = 0;
    ignore = false;
}