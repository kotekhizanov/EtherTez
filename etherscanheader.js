
function makeItTez()
{
    let url = "";
    if (window.location.href.split("/")[3] === "token"){
        url = document.querySelector("[id^='spanTarget_']").innerHTML;
    }else{
        url = window.location.href.split("/")[4]
    }
    
    let gemBlock = document.createElement("li");
    
    let gemHref = document.createElement("a");
        gemHref.target = "_blank";
        gemHref.href = "https://www.gem.xyz/collection/" + url + "/";
        
    let img = document.createElement("img");
        img.src = "https://www.gem.xyz/assets/gem_logo.svg";
        img.height = "25";
        img.style.marginLeft = "15px";

        console.log(window.location.href);

        document.getElementById("navBar").childNodes.item(1).appendChild(gemBlock);
        gemBlock.appendChild(gemHref);
        gemHref.appendChild(img);
        
        console.log("edited");
}

const myInterval = setTimeout(makeItTez, 1000);