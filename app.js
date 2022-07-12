let changingInProcess = false;

function makeItTez()
{
    changingInProcess = true;
    let list = document.getElementById("mytable_mint").childNodes.item(3).childNodes;
    list.forEach(function(trNode, trNodeIndex, listObj) {

        if (trNode.nodeType != Node.TEXT_NODE)
        {
            var contractId = trNode.childNodes.item(5).lastChild.innerHTML.split('"')[5].split("/")[1];
            trNode.childNodes.item(4).lastChild.innerHTML = '<a target="_blank" href="https://icy.tools/collections/' + contractId + '/overview">icy.tools</a>';
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