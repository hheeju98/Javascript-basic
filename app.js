const title = document.querySelector(".hello h1"); // querySelector 조건에 맞는 첫번째 값만 가져옴 (querySelectorAll 다가져옴)

console.dir(title);

function handleTitleClick(){
    title.style.color = "blue";
}

function handleMouseEnter(){
title.innerText = "Mouse is here!";
}

function handleMouseLeave(){
title.innerText = "Mouse is gone!";
}


title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);