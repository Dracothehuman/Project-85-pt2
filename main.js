canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car_width=100;
car_height=90;


car_x=10;
car_y=10;

background_image="parkingLot.jpg";
car_image="car2.png";

function add(){
    background_background=new Image();
    background_background.onload=jo;
    background_background.src=background_image;

    car_car=new Image();
    car_car.onload=mama;
    car_car.src=car_image;
}

function jo(){
    ctx.drawImage(background_background, 0, 0, canvas.width, canvas.height);
}
function mama(){
    ctx.drawImage(car_car, car_x, car_y, car_width, car_height);
}

window.addEventListener("keydown",mykeydown);

function mykeydown(e){
    var lag=e.keyCode;
    console.log(lag);

    if (lag=='38'){
        up();
        console.log("up");
    }
    if (lag=='40'){
        down();
        console.log("down");
    }
    if (lag=='37'){
        left();
        console.log("left");
    }
    if (lag=='39'){
        right();
        console.log("right");
    }

}
function up(){
    if (car_y>=0){
        car_y=car_y-10;
        console.log("When your key is clicked, the x axis is" + car_x + " and you y is" + car_y);
        jo();
        mama();
    }
}
function down(){
    if (car_y<=500){
        car_y=car_y+10;
        console.log("When your key is clicked, the x axis is" + car_x + " and you y is" + car_y);
        jo();
        mama();
    }
}

function left(){
    if (car_x>=0){
        car_x=car_x-10;
        console.log("When your key is clicked, the x axis is" + car_x + " and you y is" + car_y);
        jo();
        mama();
    }
}
function right(){
    if (car_x<=700){
        car_x=car_x+10;
        console.log("When your key is clicked, the x axis is" + car_x + " and you y is" + car_y);
        jo();
        mama();
    }
}