let printSegitiga = 5;

if(typeof(printSegitiga) === "number"){
    let string = "";

    for (let i = 1; i <= printSegitiga; i++) {
        for (let j = 1; j <= printSegitiga - i + 1; j++) {
        string += j;
        }
        string += "\n";
    }
    console.log(string);
}else{
    console.log("Data harus number");
};
