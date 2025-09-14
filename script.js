function volume(radius, height) {
    return Math.PI * Math.pow(radius, 2) * height;
}
console.log(volume(21, 7))
/*Arrow functions*/
const square = (x) => x * x;
console.log(square(5));

const welcome = (name) => "Welcome," + name + "!";
console.log(welcome("Myrah"));

const x = 24;//global variable

function product(x) {
    return x * 2;//local variable
}
console.log(product(5));//logs 10
console.log(x);//logs 24 

let y = 10;//global variable
function add(y) { 
    return y + 10;//local variable
}
console.log(add(15));//logs 25
console.log(y);//logs 10

//Triggering DOM Changes
document.getElementById("txt").oninput = function() { //event listener that waits for user input
    let input = document.getElementById("txt").value;
    document.getElementById("output").innerHTML = input;
}
//Button that animates a box when clicked
document.getElementById("startAnimation").onclick = function() {//event listener that waits for button click
    let box = document.getElementById("animate");
    let position = 0;//initial position of the box
    let interval = setInterval(frame, 5);//calls the frame function every 5 milliseconds
    function frame() { //function that moves the box
        if (position == 350) {
            clearInterval(interval);
        } else {
            position++;
            box.style.top = position + 'px';
            box.style.left = position + 'px';
        }
    }
}

let isLoading = false;

document.getElementById("startLoading").onclick = function () {
    const loader = document.getElementById("loader");

    if (isLoading) {
        loader.classList.add("hidden");
        this.textContent = "Start Loading";
    } else {
        loader.classList.remove("hidden");
        this.textContent = "Stop Loading";
    }

    isLoading = !isLoading;
}
