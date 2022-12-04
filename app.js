const title = document.querySelector(".hello h1"); // querySelector 조건에 맞는 첫번째 값만 가져옴 (querySelectorAll 다가져옴)



function handleTitleClick(){
    title.style.color = "blue"
    console.log("title was clicked");
}
title.addEventListener("click", handleTitleClick);