let b_indonesia = 100;
let b_inggris = 100;
let mtk = 30;
let ipa = 20;

let mean = (b_indonesia + b_inggris + mtk + ipa) / 4;

let grade

if(mean <= 59){
    grade = "E";
}else if(mean <= 69){
    grade = "D";
}else if(mean <= 79){
    grade = "C";
}else if(mean <= 89){
    grade = "B";
}else{
    grade = "A";
}

console.log(`Rata-Rata = ${mean}`);
console.log(`Grade = ${grade}`);