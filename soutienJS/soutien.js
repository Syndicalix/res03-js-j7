let superheroes = [
    "Superman",
    "Batman",
    "Iron Man",
    "Wonder Woman",
    "Black Widow",
    "Mighty Thor"
];

for(superhero of superheroes)
{
    console.log(superhero)
}

let numbers = [23, 54, 145, 325, 42, 987, -21];


for(let i = 0; i < numbers.length; i++)
{
    console.log(numbers[i] <=100);
}

let data = [
    ["George", "Barack", "Donald"],
    [43, 44, 45],
    ["Superman", "Batman", "Iron Man"],
    ["Clark", "Bruce", "Tony"]
];


for (let i = 0; i < data.length; i++) {
    for(let j = 0; j < data[i].length; j++) {
        console.log(data[i][j])
    }
}