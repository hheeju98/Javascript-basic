const player = {
    name: "nico",
    points: 10,
    fat: true,
};

console.log(player);

player.fat = false;
// const 안의 무언가는 업데이트 가능, 전체는 불가능
player.lastName = "patato";
player.points = player.points + 15;
console.log(player);
//console.log(player.name);
//console.log(player["name"]);
// console = object



