function makeItTez()
{
    let list = document.getElementById("mytable_mint").childNodes.item(3).childNodes;
    list.forEach(function(trNode, trNodeIndex, listObj) {

        if (trNode.nodeType != Node.TEXT_NODE)
        {
            var contractId = trNode.childNodes.item(5).lastChild.innerHTML.split('"')[5].split("/")[1];
            trNode.childNodes.item(4).lastChild.innerHTML = '<a target="_blank" href="https://icy.tools/collections/' + contractId + '/overview">icy.tools</a>';
        }
    });
}

const myInterval = setTimeout(makeItTez, 1000);