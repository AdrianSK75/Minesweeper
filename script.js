var first = document.getElementById("first");
var container = document.getElementById("container");

function startGame() {
        first.remove();
        return createBoard();
}

function createBoard() {
    for(var i = 1; i <= 81; ++i) {
        var button = document.createElement('button');
        button.type = 'button';
        button.className = 'btn';
        button.id = i;
        
        container.appendChild(button);

        button.onclick = function(event) {
            alert(event.target.id + " " + event.buttons);
        }

        if(i % 9 == 0) {
            var space = document.createElement("br");
            container.appendChild(space);
        }  
        
    }

}
