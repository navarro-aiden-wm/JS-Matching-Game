/**
 * Created by session2 on 8/12/16.
 */
function generateFaces() {
    var theLeftSide = document.getElementById("leftSide");
    var numberOfFaces = 5;
    var theRightSide = document.getElementById("rightSide");
    var theBody = document.getElementsByTagName("body")[0];

    for (var i = 0; i < numberOfFaces; i++) {
        var img = document.createElement("img");
        img.src="Smile.png";
        img.height = 50;
        img.width = 50;
        img.style.top = Math.random() * 400 + "px";
        img.style.left = Math.random() * 400 + "px";
        theLeftSide.appendChild(img);
        var cln = theLeftSide.cloneNode(true);
        theRightSide.appendChild(cln)
    }

    theLeftSide.lastChild.onclick=
        function nextLevel(event){
            event.stopPropagation();
            numberOfFaces += 5;
            generateFaces();
        };

    theBody.onclick = function gameOver() {
        alert("Game Over!");

        theBody.onclick = null;
        theLeftSide.lastChild.onclick = null;
    };
}

