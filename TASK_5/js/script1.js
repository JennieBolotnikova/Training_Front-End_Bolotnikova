// number
let arrNumberCalc =  document.querySelectorAll('.number');
// sing & input
let inputIn = document.querySelector('#output-value');
let history = document.querySelector('#history-value');
let clean = document.querySelector('#clear');
let cleanOne = document.querySelector('#backspace');
let point = document.querySelector('.point');
let plurar = document.querySelector('.plurar');
let division = document.querySelector('.division');
let minus = document.querySelector('.minus');
let plus = document.querySelector('.plus');
let equal = document.querySelector('.equal');
let sum = [];
var collection = [];
var resultValArray = [];
//clears the input field
clean.onclick = function() {
   inputIn.innerText = "";
   history.innerText = "";
   sum.length = 0;
}
//removes one element from the input field
cleanOne.onclick = function() {
    var output=inputIn.innerText;
    if(output){//if output has a value
        output= output.substr(0,output.length-1);
        inputIn.innerText = output;
        history.innerText = output;
    }
}

// output numbers
for (let i = 0; i < 10; i++) {
    arrNumberCalc[i].onclick = function() {
        inputIn.innerText = inputIn.innerText + i;
        history.innerText = history.innerText + i;
    }
}

// point
point.onclick = function() {
    let searchPoint = inputIn.innerText.indexOf(".");
    if (searchPoint == -1 && inputIn.innerText.length != 0) {
        inputIn.innerText = inputIn.innerText + ".";
        history.innerText = history.innerText + ".";
    }
}

// calc
plus.onclick = function() {
    sum.push(parseFloat(inputIn.innerText));
    sum.push("+");
    inputIn.innerText = "";
    history.innerText = history.innerText + "+";
}
minus.onclick = function() {
    sum.push(parseFloat(inputIn.innerText));
    sum.push("-");
    inputIn.innerText = "";
    history.innerText = history.innerText + "-";
}
plurar.onclick = function() {
    sum.push(parseFloat(inputIn.innerHTML));
    sum.push("*");
    inputIn.innerHTML = "";
    history.innerText = history.innerText + "*";
}
division.onclick = function() {
    sum.push(parseFloat(inputIn.innerText));
    sum.push("/");inputIn.innerText = "";
    history.innerText = history.innerText + "/";
}
 /*result calculation function*/
equal.onclick = function() {
    sum.push(parseFloat(inputIn.innerText));
    var val = document.querySelector('#history-value').innerText.toString();
    //no operation priority mode
    if(document.querySelector('#no_priority_cb').checked){
        document.querySelector('#with_priority_cb').checked=false;
        let num = 0;
        while(sum.length > 1) {
            switch(sum[1]) {
                case "+": num = sum[0] + sum[2]; sum.splice(0, 3, num); break;
                case "-": num = sum[0] - sum[2]; sum.splice(0, 3, num); break;
                case "/": num = sum[0] / sum[2]; sum.splice(0, 3, num); break;
                case "*": num = sum[0] * sum[2]; sum.splice(0, 3, num); break;
            }
        }
        rounding(sum[0]);
    }//operation priority mode
    else{
        document.querySelector('#no_priority_cb').checked=false   ;
        rounding(eval(val));
        collection.push(val.join(','));        
    }
    sum = [];
}

/*rounding function*/
function rounding(result){
    if(document.querySelector('#integer_mode_cb').checked){
		inputIn.innerText = Math.floor(result);
        history.innerText = Math.floor(result);
        
        resultValArray.push(Math.floor(result));
	}
	else{		
		inputIn.innerText = result;
        history.innerText = result;
  
        resultValArray.push(result);   
	} 
    document.getElementById("pastCalculations").innerText = resultValArray.join(', ');      
}
 /*function of switching modes of operation*/ 
function changeRadioButton(){
	if(document.querySelector('#integer_mode_cb').checked){
		document.querySelector('.point').style.visibility = "hidden"
	}
	else{		
		document.querySelector('.point').style.visibility = "visible"
	}
}
//show calculation history
function showPastCalculations(){
    document.getElementById("pastCalculations").style.display = "inline-block";
}
//hide calculation history
function closePastCalculations(){
    document.getElementById("pastCalculations").style.display = "none";
}



