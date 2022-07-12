let changingInProcess = false;

function makeItTez()
{
    changingInProcess = true;
    let list = document.getElementById("mytable_mint").childNodes.item(3).childNodes;
    list.forEach(function(trNode, trNodeIndex, listObj) {

        if (trNode.nodeType != Node.TEXT_NODE)
        {
            var url = trNode.childNodes.item(5).lastChild.innerHTML.split('"')[5].split("/")[1];
            trNode.childNodes.item(4).innerHTML = '';//'<a target="_blank" href="https://icy.tools/collections/' + url + '/overview">icy.tools</a>';
			
			console.log(trNode.childNodes.item(4).lastChild);
			let gemHref = document.createElement("a");
				gemHref.target = "_blank";
				gemHref.href = "https://icy.tools/collections/" + url + "/overview";
				
			let gemImg = document.createElement("img");
				gemImg.src = "https://buynft.com/wp-content/uploads/sites/2/2022/05/icy_tools_logo.png";
				gemImg.height = "25";
				gemImg.style.marginLeft = "15px";

			let icyHref = document.createElement("a");
				icyHref.target = "_blank";
				icyHref.href = "https://www.gem.xyz/collection/" + url + "/";
				
			let icyImg = document.createElement("img");
				icyImg.src = "https://www.gem.xyz/assets/gem.png";
				icyImg.height = "25";
				icyImg.style.marginLeft = "15px";

			let osHref = document.createElement("a");
				osHref.target = "_blank";
				osHref.href = "https://opensea.io/assets/ethereum/" + url + "/1";
				
			let osImg = document.createElement("img");
				osImg.src = "https://opensea.io/static/images/logos/opensea.svg";
				osImg.height = "25";
				osImg.style.marginLeft = "15px";

				
				trNode.childNodes.item(4).appendChild(gemHref);
				gemHref.appendChild(gemImg);
				
				trNode.childNodes.item(4).appendChild(icyHref);
				icyHref.appendChild(icyImg);
				
				trNode.childNodes.item(4).appendChild(osHref);
				osHref.appendChild(osImg);
        }
    });
    changingInProcess = false;
}

const elementToObserve = document.querySelector("#mytable_mint");
const observer = new MutationObserver(function() {
    if (!changingInProcess){
            makeItTez();
    }
});
observer.observe(elementToObserve, { childList: true});