// Your code here

const dodger = document.getElementById("dodger");


document.addEventListener("keydown", function(event) {
    if(event.key === "ArrowLeft"){
        moveDodgerLeft();
    }
    else if(event.key === "ArrowRight"){
        moveDodgerRight();
    }
    else {
        alert('Please use the left or right arrow keys to move the dodger');
    }
  })



function moveDodgerLeft(){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left > 0) {
    dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight(){

    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left < 360) {
      dodger.style.left = `${left + 1}px`;
    }
}