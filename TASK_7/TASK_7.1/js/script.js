function firstImg(){
    var canvas = document.getElementById("canvas_img_1");
    var ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.arc(300,350,100,0,Math.PI*2,true);
    ctx.fillStyle = "#9ddbf5";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(300,350,100,0,Math.PI*2,true);
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#235075";
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(280, 400, 17, 45, -1.35 , 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(240, 320, 12, 20,  4.7 , 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(230, 320, 6, 10,  0 , 0, 2 * Math.PI);
    ctx.fillStyle = "#235075";
    ctx.fill();

    ctx.beginPath();
    ctx.ellipse(320, 320, 12, 20,  4.7 , 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(310, 320, 6, 10,  0 , 0, 2 * Math.PI);
    ctx.fillStyle = "#235075";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(280, 365);
    ctx.lineTo(260, 365);
    ctx.lineTo(280, 320);
    ctx.strokeStyle = "#235075";
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(300, 260, 30, 120,  4.7 , 0, 2 * Math.PI);
    ctx.fillStyle = "#0c5794";
    ctx.fill();
    
    ctx.beginPath();
    ctx.ellipse(300, 260, 30, 120,  4.7 , 0, 2 * Math.PI);
    ctx.strokeStyle = "#123b5c";
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(300, 240, 20, 65,  4.7 , 0, 2 * Math.PI);
    ctx.fillStyle = "#0c5794";
    ctx.fill();

    ctx.beginPath();
    ctx.ellipse(300, 240, 20, 65,  4.7 , 0, 2 * Math.PI);
    ctx.strokeStyle = "#123b5c";
    ctx.stroke();

    ctx.fillRect(235,120,131,120);

    ctx.beginPath();
    ctx.ellipse(300, 120, 20, 65,  4.7 , 0, 2 * Math.PI);
    ctx.fillStyle = "#0c5794";
    ctx.fill();

    ctx.beginPath();
    ctx.ellipse(300, 120, 20, 65,  4.7 , 0, 2 * Math.PI);
    ctx.strokeStyle = "#123b5c";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(235, 120);
    ctx.lineTo(235, 240);
    ctx.strokeStyle = "#123b5c";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(365, 120);
    ctx.lineTo(365, 240);
    ctx.strokeStyle = "#123b5c";
    ctx.stroke();
}

function secondImg(){
    var canvas = document.getElementById("canvas_img_2");
    var ctx = canvas.getContext("2d");
    //заднее колесо
    ctx.beginPath();
    ctx.arc(160,310,60,0,Math.PI*2,true);
    ctx.fillStyle = "#87CEEB";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(160,310,60,0,Math.PI*2,true);
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#4682B4";
    ctx.stroke();

    //переднее колесо
    ctx.beginPath();
    ctx.arc(390,310,60,0,Math.PI*2,true);
    ctx.fillStyle = "#87CEEB";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(390,310,60,0,Math.PI*2,true);
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#4682B4";
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(250,310,20,0,Math.PI*2,true);
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#4682B4";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(140, 310);
    ctx.lineTo(250, 310);

    ctx.moveTo(250, 310);
    ctx.lineTo(210, 210);

    ctx.moveTo(170, 210);
    ctx.lineTo(230, 210);

    ctx.moveTo(390, 310);
    ctx.lineTo(360, 210);

    ctx.moveTo(320, 210);
    ctx.lineTo(360, 210);

    ctx.moveTo(380, 180);
    ctx.lineTo(360, 210);

    ctx.moveTo(250, 310);
    ctx.lineTo(368, 230);

    ctx.moveTo(367, 230);
    ctx.lineTo(216, 230);

    ctx.moveTo(216, 230);
    ctx.lineTo(140, 310);

    ctx.moveTo(289, 330);
    ctx.lineTo(267, 316);

    ctx.moveTo(239, 294);
    ctx.lineTo(215, 273);

    ctx.strokeStyle = "#4682B4";
    ctx.stroke();
}

function thirdImg(){
    var canvas = document.getElementById("canvas_img_3");
    var ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.fillStyle = "#CD5C5C";
    ctx.fillRect(145,220,300,250);

    ctx.moveTo(295,20);
    ctx.lineTo(145,220);
    ctx.lineTo(445,220);
    ctx.closePath();

    // fill
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#000000";
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "#000000";
    ctx.strokeRect(145,220,300,250);

    ctx.beginPath();
    ctx.fillStyle = "#000000";
    ctx.fillRect(165,250,110,80);
    ctx.fillRect(315,250,110,80);
    ctx.fillRect(315,350,110,80);

    ctx.beginPath();
    ctx.moveTo(150, 290);
    ctx.lineTo(280, 290);

    ctx.moveTo(315, 290);
    ctx.lineTo(430, 290);

    ctx.moveTo(315, 390);
    ctx.lineTo(430, 390);

    ctx.moveTo(220, 250);
    ctx.lineTo(220, 340);

    ctx.moveTo(370, 250);
    ctx.lineTo(370, 340);

    ctx.moveTo(370, 350);
    ctx.lineTo(370, 440);

    ctx.lineWidth = 4;
    ctx.strokeStyle = "#CD5C5C";
    ctx.stroke();
    // roof
    ctx.moveTo(295,20);
    ctx.lineTo(145,220);
    ctx.lineTo(445,220);
    ctx.closePath();
    // Fill
    ctx.fillStyle = "#CD5C5C";
    ctx.fill();

    //trumpet
    ctx.beginPath();
    ctx.fillStyle = "#CD5C5C";
    ctx.fillRect(325,50,50,100);

     //circuit 
    ctx.beginPath();
    ctx.moveTo(325, 50);
    ctx.lineTo(325, 150);

    ctx.moveTo(375, 50);
    ctx.lineTo(375, 150);
 
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#000000";
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(350, 50, 10, 25,  4.7 , 0, 2 * Math.PI);
    ctx.fillStyle = "#CD5C5C";
    ctx.fill();

    ctx.beginPath();
    ctx.ellipse(350, 50, 10, 25,  4.7 , 0, 2 * Math.PI);
    ctx.stroke();
    //door
    ctx.beginPath();
    ctx.ellipse(220, 380, 25, 45,  4.7 , 17.3, Math.PI/2);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(175, 380);
    ctx.lineTo(175, 470);

    ctx.moveTo(265, 380);
    ctx.lineTo(265, 470);

    ctx.moveTo(220, 355);
    ctx.lineTo(220, 470);

    ctx.lineWidth = 3;
    ctx.strokeStyle = "#000000";
    ctx.stroke();
    //door handles
    ctx.beginPath();
    ctx.arc(205,420,6,0,Math.PI*2,true);

    ctx.lineWidth = 3;
    ctx.strokeStyle = "#000000";
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(235,420,6,0,Math.PI*2,true);

    ctx.lineWidth = 3;
    ctx.strokeStyle = "#000000";
    ctx.stroke();

}

firstImg()
secondImg()
thirdImg()