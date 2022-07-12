
function makeItTez()
{
    let url = "";
    if (window.location.href.split("/")[3] === "token"){
        url = document.querySelector("[id^='spanTarget_']").innerHTML;
    }else{
        url = window.location.href.split("/")[4]
    }
    
    let linksBlock = document.createElement("li");
    
    let gemHref = document.createElement("a");
        gemHref.target = "_blank";
        gemHref.href = "https://icy.tools/collections/" + url + "/overview";
        
    let gemImg = document.createElement("img");
        gemImg.src = "https://blog.icy.tools/content/images/2022/05/logo.png";
        gemImg.height = "25";
        gemImg.style.marginLeft = "15px";

	let icyHref = document.createElement("a");
        icyHref.target = "_blank";
        icyHref.href = "https://www.gem.xyz/collection/" + url + "/";
        
    let icyImg = document.createElement("img");
        icyImg.src = "https://www.gem.xyz/assets/gem_logo.svg";
        icyImg.height = "25";
        icyImg.style.marginLeft = "15px";

    let osHref = document.createElement("a");
        osHref.target = "_blank";
        osHref.href = "https://opensea.io/assets/ethereum/" + url + "/1";
        
    let osImg = document.createElement("img");
        osImg.src = "https://opensea.io/static/images/logos/opensea.svg";
        osImg.height = "25";
        osImg.style.marginLeft = "15px";

        console.log(window.location.href);

        document.getElementById("navBar").childNodes.item(1).appendChild(linksBlock);
        linksBlock.appendChild(gemHref);
        gemHref.appendChild(gemImg);
		
        linksBlock.appendChild(icyHref);
        icyHref.appendChild(icyImg);
		
        linksBlock.appendChild(osHref);
        osHref.appendChild(osImg);
        
        
	let ethPrice = document.getElementById("ethPrice");
	ethPrice.childNodes.item(1).innerHTML = ethPrice.childNodes.item(1).innerHTML + '| <a href="/nfttracker#mint" target="_blank" class="text-secondary"><span class="gasPricePlaceHolder">Mint tracker</span></a>';	
}

makeItTez();