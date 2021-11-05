//method for changing the style of the table
function changeStyle(num){
    var form = document.querySelector("form");
    var table = form.querySelector("table");
    var tdList = table.querySelectorAll("td");
    switch(num){
        case 1:{
            table.style.background = "white";
            table.style.border = "none";
            tdList.forEach(element => {
                element.style.border = "4px solid #cce0fff0";
                element.style.borderRadius = "20px";
                element.style.background = "white";
                element.style.color = "black";
            });
            table.style.borderRadius = "0";
            break;
        }
        case 2:{
            table.style.background = "#cce0fff0";
            tdList.forEach(element => {
                element.style.border = "none";
                element.style.background = "#cce0fff0";
                element.style.color = "#3f4d61e1";
            });
            table.style.borderRadius = "20px"
            break;
        }
        case 3: {
            table.style.background = "white";
            table.style.border = "none";        
            tdList.forEach(element => {
                element.style.border = "3px solid white";
                element.style.borderRadius = "0";
                element.style.background = "black";
                element.style.color = "white";
            });
            break;
        }
    }
}