// event.target.(value) - > When I click a button, this object return the button index.
// event.buttons - > When I click a button, this object return what button I clicked on the mouse.

var gameBoard = document.getElementById("gameBoard");
var arrBtn = [], frq = [];
var open = true, bombs = -1;


window.addEventListener('DOMContentLoaded', function() { 
        for(var i = 1; i <= 81; ++i) {
                $(gameBoard).append(`<button class = "btn" id = "`+ i +`" onmousedown = "mouseEvent(event);"></button`);           
                arrBtn.push(1);
                                           
                if(i % 9 == 0) {
                        $(gameBoard).append("<br>");
                }
        }
});

function mouseEvent(event) {
        var btnTrigg = event.target.id - 1, mouseClick = event.buttons;
             
        if(mouseClick == 1) {
                return makeSteps(btnTrigg);
        }
        return placeFlag(btnTrigg);
}



function makeSteps(btnTrigg) {
        if(frq[btnTrigg] == 2)
                return placeFlag(btnTrigg);
            
        if(arrBtn[btnTrigg] % 4 == 0) 
                return detonateBombs();
                
        if(bombs == 0)
                return winnerSweeper();   
            
        var button = $('.btn');
        let height = Math.floor(Math.random() * 2) + 2, 
        witdh = Math.floor(Math.random() * 2) + 1 ,pos = 0;

        while(--height) {
                for(var i = btnTrigg + pos; i <= btnTrigg + pos + witdh; ++i) {
                        if(arrBtn[i] % 4 != 0) {
                                button[i].style.background = "#3a6351";
                                button[i].disabled = true;
                                frq[i] = 1;
                        }
                    }
                    pos += 9;
        }
            
        if(open)
                return generateBombs();
}

function generateBombs() {
        open = false, bombs = 0;
        for(var i = 0; i < 81; ++i) {
                if(frq[i] != 1)
                        arrBtn[i] = Math.floor(Math.random() * 10) + 1;

                if(arrBtn[i] % 4 == 0)
                        ++bombs;
        }
}

function placeFlag(btnTrigg) {           
        var button = $('.btn');
        if(frq[btnTrigg] != 2) {    
                button[btnTrigg].style.background = "#185adb";
                if(arrBtn[btnTrigg] % 4 == 0) {
                        --bombs;
                        button[btnTrigg].disabled = true;
                }
                    frq[btnTrigg] = 2;
        } else {
                button[btnTrigg].style.background = "#faf1e6";
                frq[btnTrigg] = 0;
        }
}

function detonateBombs() {           
        document.getElementById('title').innerHTML = "&#128128;";
        var button = $('.btn');

        for(var i = 0; i < 81; ++i) {
                if(arrBtn[i] % 4 == 0) 
                    button[i].style.background = "#962d2d";
               
                button[i].disabled = true;
        }
}

function winnerSweeper() {
        document.getElementById('title').innerHTML = "&#129351;";
        var button = $('.btn');

        for(var i = 0; i < 81; ++i) {
                if(arrBtn[i] % 4 != 0)
                     button[i].style.background = "#3a6351"; 
                
                button[i].disabled = true;
        }
}
