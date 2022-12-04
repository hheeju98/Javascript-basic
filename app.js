const h1 = document.querySelector("div.hello:first-child h1"); // querySelector 조건에 맞는 첫번째 값만 가져옴 (querySelectorAll 다가져옴)

function handleTitleClick(){
    const currentColor = h1.style.color;
    let newColor;
if (currentColor === "blue"){
   newColor = "tomato";
}else{
    newColor = "blue";
    }
    h1.style.color = newColor;
}

function handleMouseEnter(){
h1.innerText = "Mouse is here!";
}



// h1.onclick = handleTitleClick;
// h1.onmouseenter = handleMouseEnter;
h1.addEventListener("click", handleTitleClick);


