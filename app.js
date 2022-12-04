const h1 = document.querySelector("div.hello:first-child h1"); // querySelector 조건에 맞는 첫번째 값만 가져옴 (querySelectorAll 다가져옴)

function handleTitleClick(){
    h1.classList.toggle("clicked");
    // if (h1.classList .contains(clickedClass)){
    //     h1.classList.remove(clickedClass);
    // }else{
    //     h1.classList.add(clickedClass);
    // }
}

h1.addEventListener("click", handleTitleClick);


