const h1 = document.querySelector("div.hello:first-child h1"); // querySelector 조건에 맞는 첫번째 값만 가져옴 (querySelectorAll 다가져옴)

function handleTitleClick(){
    const clickedClass = "clicked";
    if (h1.className === clickedClass){
        h1.className = "";
    }else{
        h1.className = clickedClass;
    }
}

h1.addEventListener("click", handleTitleClick);


