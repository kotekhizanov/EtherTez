function makeItTez()
{
  let list = document.querySelectorAll("div[role='gridcell']");
  list.forEach(function(trNode, trNodeIndex, listObj) {
    let href = trNode.childNodes.item(0).childNodes.item(0).childNodes.item(0).href;
    let hrefBlocks = href.split('/');

    let gemBlock = document.createElement("div");
        gemBlock.style.padding = "0px 0px 16px 16px";
    
    let gemHref = document.createElement("a");
        gemHref.innerHTML = "gem.xyz";
        gemHref.target = "_blank";
        gemHref.href = "https://www.gem.xyz/collection/" + hrefBlocks[hrefBlocks.length - 2] + "/";
        gemHref.style.color = "white";

    trNode.childNodes.item(0).childNodes.item(0).appendChild(gemBlock);
    gemBlock.appendChild(gemHref);
  });
}

makeItTez();