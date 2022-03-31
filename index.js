

function opisFun(){

    document.getElementById("nawig").style.display = "none";
    document.getElementById("vis").style.display = "none";
    document.getElementById("opis").style.display = "inline-block";
    var wrapper = document.getElementById("opis");
    var markup = "<p id = \"opisP\"> <h2 style = \"text-align: center;\"> Opis metody </h2> <br> \
    Metoda prostokątów polega na przybliżeniu wartości całki z danej funkcji za pomocą sumy pól prostokątów. Na początku wybieramy liczbę n - ilość prostokątów,\
    których użyjemy do przybliżania całki. Następnie wyznaczamy n punktów na wykresie funkcji f, które posłużą nam do narysowania prostokątów.\
    Istnieją trzy sposoby rysowania prostokątów - możemy przyjąć, że wyznaczone przez nas punkty są:<br> <br>a) Lewymi wierzchołkiami górnych krawędzi prostokątów<br> \
    b) Środkami górnych krawędzi prostokątów<br>  c) Prawymi wierzchołkami górnych krawędzi prostokątów\n \
    <br> <br> Matematyczne wzory opisujące metodę: <br> </p> <img src = \"./wzor1.jpg\" alt = \"wzor1\">  <br><br> <img src = \"./wzor2.jpg\" alt = \"wzor1\"> <br>";
    wrapper.innerHTML = markup;
}

function visFun(){
    document.getElementById("nawig").style.display = "none";
    document.getElementById("opis").style.display = "none";
    document.getElementById("vis").style.display = "inline-block";
    var wrapper = document.getElementById("vis");
    var markup = "<h2 style = \"text-align: center;\"> Wizualizacja </h2> <br> \
    <canvas id=\"visCanvas\" width=\"400\" height=\"400\"></canvas> <br>\
    <div id = \"nType\"> \
        <p> Podaj liczbę prostokątów: (między 1, a 20): &ensp; <input type=\"number\" id=\"nNum\" name=\"nNum\" min=\"1\" max=\"20\" value = \"1\" onchange=\"draw()\"> </p>\
    </div>\
    <form id= \"formRadio\"> \
        <input type=\"radio\" id=\"fun1\" name=\"choice\" value = \"fun1\" checked onclick=\"draw()\">fun1</input> \
        <input type=\"radio\" id=\"fun2\" name=\"choice\" value = \"fun2\" onclick=\"draw()\">fun2</input> \
        <input type=\"radio\" id=\"fun3\" name=\"choice\" value = \"fun3\" onclick=\"draw()\">fun3</input> \
    </form> <br>\
    <div id = \"calculateDiv\"> \
        <input type=\"button\" id=\"calcButton\" value = \"Oblicz całkę\" onClick = \"calculate()\"></input> \
        <br>\
        <div id = \"wynikDiv\"></div> \
    </div>\
    <br>\
    <div id = \"resetDiv\"> \
        <input type=\"button\" id=\"resetButton\" value = \"Reset\" onClick = \"resetCanvas()\"></input> \
    </div> <br>\
    ";
    wrapper.innerHTML = markup;

    setupCanvas();
    draw();
}




function setupCanvas(){
    var visCnv = document.getElementById("visCanvas");
    var visCtx = visCnv.getContext("2d");
    visCtx.shadowColor = 'black';
    visCtx.shadowBlur = 10;
    visCtx.font = "15px Times New Roman";
    visCtx.beginPath();
    visCtx.fillText("X", 370, 390);
    visCtx.fillText("Y", 10, 30 );
    visCtx.fillText("(0,0)", 10, 390);
    visCtx.moveTo(25,375);
    visCtx.lineTo(375,375);
    visCtx.moveTo(25,375);
    visCtx.lineTo(25,25);
    visCtx.moveTo(25,25);
    visCtx.lineTo(30,40);
    visCtx.moveTo(25,25);
    visCtx.lineTo(20,40);
    visCtx.moveTo(375,375);
    visCtx.lineTo(360,370);
    visCtx.moveTo(375,375);
    visCtx.lineTo(360,380);


    for( let i = 1; i < 7; i++){
        visCtx.fillText(7-i, 10, 25 + i * 50 + 5);
        visCtx.moveTo(25 , 25 + i * 50);
        visCtx.lineTo(20, 25 + i * 50);
        visCtx.moveTo(25 , 25 + i * 50);
        visCtx.lineTo(30, 25 + i * 50);
    }

    for( let i = 1; i < 7; i++){
        visCtx.fillText(i, 25+ i * 50 - 5, 395);
        visCtx.moveTo(25 + i * 50 , 375);
        visCtx.lineTo(25 + i * 50, 370);
        visCtx.moveTo(25 + i * 50 , 375);
        visCtx.lineTo(25 + i * 50, 380);
    }
    visCtx.closePath();
    visCtx.lineWidth = 2;
    visCtx.strokeStyle = '#006666';
    visCtx.stroke();
}

function resetCanvas(){
    var visCnv = document.getElementById("visCanvas");
    var visCtx = visCnv.getContext("2d");
    visCnv.width = visCnv.width;
    setupCanvas();
}

function draw(){
    var wynik = document.getElementById("wynikDiv");
    wynik.innerHTML = "";
    var n = parseInt(document.getElementById("nNum").value);
    var values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    if(!values.includes(n)){
        alert("Nieprawidlowa wartość liczby prostokątów!");
        return;
    }
    var form = document.getElementById("formRadio");
    var fun = form.elements["choice"].value;

    if(fun == "fun1"){
        drawFun1();
        
    }
    else if( fun == "fun2"){
        drawFun2();
    }
    else if( fun == "fun3" ){
        drawFun3();
    }

    return;
}


function drawFun1(){
    resetCanvas();
    var visCnv = document.getElementById("visCanvas");
    var visCtx = visCnv.getContext("2d");
    visCtx.shadowColor = 'black';
    visCtx.shadowBlur = 10;
    visCtx.beginPath();
    visCtx.moveTo(25,75);
    visCtx.lineTo(75,275);
    visCtx.moveTo(75,275);
    visCtx.lineTo(125,175);
    visCtx.moveTo(125,175);
    visCtx.lineTo(175,325);
    visCtx.moveTo(175,325);
    visCtx.lineTo(225,175);
    visCtx.moveTo(225,175);
    visCtx.lineTo(275,125);
    visCtx.moveTo(275,125);
    visCtx.lineTo(325,325);
    visCtx.closePath();
    visCtx.lineWidth = 2;
    visCtx.strokeStyle = 'blue';
    visCtx.stroke();
    return;
}

function drawFun2(){
    resetCanvas();
    var visCnv = document.getElementById("visCanvas");
    var visCtx = visCnv.getContext("2d");
    visCtx.shadowColor = 'black';
    visCtx.shadowBlur = 10;
    visCtx.beginPath();
    visCtx.moveTo(25,325);
    visCtx.lineTo(75,275);
    visCtx.moveTo(75,275);
    visCtx.lineTo(125,325);
    visCtx.moveTo(125,325);
    visCtx.lineTo(175,75);
    visCtx.moveTo(175,75);
    visCtx.lineTo(225,325);
    visCtx.moveTo(225,325);
    visCtx.lineTo(275,225);
    visCtx.moveTo(275,225);
    visCtx.lineTo(325,75);
    visCtx.closePath();
    visCtx.lineWidth = 2;
    visCtx.strokeStyle = 'blue';
    visCtx.stroke();
    return;
}


function drawFun3(){
    resetCanvas();
    var visCnv = document.getElementById("visCanvas");
    var visCtx = visCnv.getContext("2d");
    visCtx.shadowColor = 'black';
    visCtx.shadowBlur = 10;
    visCtx.beginPath();
    visCtx.moveTo(25,175);
    visCtx.lineTo(75,75);
    visCtx.moveTo(75,75);
    visCtx.lineTo(125,125);
    visCtx.moveTo(125,125);
    visCtx.lineTo(175,275);
    visCtx.moveTo(175,275);
    visCtx.lineTo(225,175);
    visCtx.moveTo(225,175);
    visCtx.lineTo(275,225);
    visCtx.moveTo(275,225);
    visCtx.lineTo(325,125);
    visCtx.closePath();
    visCtx.lineWidth = 2;
    visCtx.strokeStyle = 'blue';
    visCtx.stroke();
    return;
}

function calculate(){

    var wynik = document.getElementById("wynikDiv");
    var fun1An = 19.5;
    var fun2An = 16.5;
    var fun3An = 24.5;
    var form = document.getElementById("formRadio");
    var fun = form.elements["choice"].value;
    var n = parseInt(document.getElementById("nNum").value);
    xTab = new Array(n);
    yTab = new Array(n);
    var halfWidth = (6 / n) / 2;
    var width = 2 * halfWidth;
    for(let i = 0; i < n; i++){
        xTab[i] = halfWidth + i * 2 * halfWidth;
    }
    if(fun == "fun1"){
        for(let i = 0; i < n; i++){
            if(xTab[i] > 0 && xTab[i] <= 1){
                yTab[i] = -4 * xTab[i] + 6;
            }
            if(xTab[i] > 1 && xTab[i] <= 2){
                yTab[i] = 2 * xTab[i];
            }
            if(xTab[i] > 2 && xTab[i] <= 3){
                yTab[i] = -3 * xTab[i] + 10;
            }
            if(xTab[i] > 3 && xTab[i] <= 4){
                yTab[i] = 3 * xTab[i] - 8;
            }
            if(xTab[i] > 4 && xTab[i] <= 5){
                yTab[i] = xTab[i];
            }
            if(xTab[i] > 5 && xTab[i] <= 6){
                yTab[i] = -4 * xTab[i] + 25;
            }
        }

        

    }
    else if(fun == "fun2"){
        for(let i = 0; i < n; i++){
            if(xTab[i] > 0 && xTab[i] <= 1){
                yTab[i] = xTab[i] + 1;
            }
            if(xTab[i] > 1 && xTab[i] <= 2){
                yTab[i] = -1 * xTab[i] + 3;
            }
            if(xTab[i] > 2 && xTab[i] <= 3){
                yTab[i] = 5 * xTab[i]  -9;
            }
            if(xTab[i] > 3 && xTab[i] <= 4){
                yTab[i] = -5 * xTab[i] + 21;
            }
            if(xTab[i] > 4 && xTab[i] <= 5){
                yTab[i] = 2 * xTab[i] - 7;
            }
            if(xTab[i] > 5 && xTab[i] <= 6){
                yTab[i] = 3 * xTab[i] - 12;
            }
        }

    }
    else if(fun == "fun3"){
        for(let i = 0; i < n; i++){
            if(xTab[i] > 0 && xTab[i] <= 1){
                yTab[i] = 2 * xTab[i] + 4;
            }
            if(xTab[i] > 1 && xTab[i] <= 2){
                yTab[i] = -1 * xTab[i] + 7;
            }
            if(xTab[i] > 2 && xTab[i] <= 3){
                yTab[i] = -3 * xTab[i] + 11;
            }
            if(xTab[i] > 3 && xTab[i] <= 4){
                yTab[i] = 2 * xTab[i] - 4;
            }
            if(xTab[i] > 4 && xTab[i] <= 5){
                yTab[i] = -1 * xTab[i] + 8;
            }
            if(xTab[i] > 5 && xTab[i] <= 6){
                yTab[i] = 2 * xTab[i] - 7;
            }
        }
    }

    var visCnv = document.getElementById("visCanvas");
    var visCtx = visCnv.getContext("2d");
    visCtx.shadowColor = 'black';
    visCtx.shadowBlur = 10;
    visCtx.beginPath();

    var halfWidthCnv = (300 / n) / 2;
    for(let i = 0; i < n; i++){
        visCtx.moveTo(25 + 50 * xTab[i], 375 - 50 * (yTab[i]));
        visCtx.lineTo(25 + 50 * xTab[i] - halfWidthCnv , 375 - 50 * (yTab[i]));
        visCtx.moveTo(25 + 50 * xTab[i], 375 - 50 * (yTab[i]));
        visCtx.lineTo(25 + 50 * xTab[i] + halfWidthCnv , 375 - 50 * (yTab[i]));
        
        visCtx.moveTo(25 + 50 * xTab[i] + halfWidthCnv , 375 - 50 * (yTab[i]));
        visCtx.lineTo(25 + 50 * xTab[i] + halfWidthCnv , 375);
        visCtx.moveTo(25 + 50 * xTab[i] - halfWidthCnv , 375 - 50 * (yTab[i]));
        visCtx.lineTo(25 + 50 * xTab[i] - halfWidthCnv , 375);
    }

    visCtx.closePath();
    visCtx.lineWidth = 2;
    visCtx.strokeStyle = 'cyan';
    visCtx.stroke();

    var funDosw = 0; 
    for(let i = 0; i < n; i++){
        funDosw += width * yTab[i];
    }

    funDosw = parseFloat(funDosw).toPrecision(4);

    if(fun == "fun1"){
        var dok = parseFloat(100 * (1 - Math.abs(funDosw - fun1An) / fun1An)).toPrecision(4); 
        wynik.innerHTML = "<br>Wartość rzeczywista całki: " + fun1An + ", Wartość przybliżona:" + funDosw + " Dokładność: " + dok + "%";
    }

    if(fun == "fun2"){
        var dok = parseFloat(100 * (1 - Math.abs(funDosw - fun2An) / fun2An)).toPrecision(4); 
        wynik.innerHTML = "<br>Wartość rzeczywista całki: " + fun2An + ", Wartość przybliżona:" + funDosw + " Dokładność: " + dok + "%";
    }

    if(fun == "fun3"){
        var dok = parseFloat(100 * (1 - Math.abs(funDosw - fun3An) / fun3An)).toPrecision(4); 
        wynik.innerHTML = "<br>Wartość rzeczywista całki: " + fun3An + ", Wartość przybliżona:" + funDosw + " Dokładność: " + dok + "%";
    }
    

}