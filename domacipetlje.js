//Zadatak 5

for (let i = 0; i <=10; i ++){

console.log(i); }

//Zadatak 5a

let broj = 0;

while (broj<=10){

    console.log("while", broj);
    broj++;
}

//Zadatak 6

let i = 3;
for (i = 3; i<= 20; i+=2){

    console.log(i++);
}

//Zadatak 7

let umnozak = 1

for (let i = 4; i <= 8; i++){

    umnozak *= i;
}
console.log(umnozak);

//Zadatak 8

for ( let i = 1; i<= 15; i+=4){

    console.log(i);
}

//Zadatak 9

const niz = ["1", "6", "2","4" ,"8"];

for(let i = 0; i<niz.length; i++){

    console.log(niz[i])
}

//Zadatak 10

for ( let i = 10; i>= 1; i--){

    console.log(i);
}

//Zadatak 11

for (let i = 1; i<= 5; i++){

    for (let j = 1; j<=5; j++){

        let umnozak = i*j;

        console.log(i + "*" + j + "=" + umnozak);
    }

    console.log(" ");

}



//Zadatak 12

var slijed = [2, "pozdrav", true, 5 ,"programiranje"];

var stringslijed =[];


slijed.forEach(element => {

    if(typeof(element) === "string"){
    

        stringslijed.push(element);
    }
});

console.log(stringslijed);