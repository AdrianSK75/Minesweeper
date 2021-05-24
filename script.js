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
        container.appendChild(button);

        button.onclick = function() {
            return getIndex();
        }

        if(i % 9 == 0) {
            var space = document.createElement("br");
            container.appendChild(space);
        }  
        
    }

}


// buttons alert/events
function getIndex() {
    var button = document.querySelectorAll('.btn');

    for(var i = 0; i < button.length; ++i) {
        button[i].addEventListener('click', function(j) {
               return console.log(j);
          }.bind(null, i));
    }
}



