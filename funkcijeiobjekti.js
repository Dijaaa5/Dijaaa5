// Zadatak 4

function ocijena(postotak){
   
    if (postotak >= 90 )
        return ["odličan"];
    else if (postotak >= 80)
       return ["vrlo dobar"];
    else if (postotak >= 79)
        return["dobar"];
    else if (postotak >= 65)
        return ["dovoljan"];
    else 
       return ["nedovoljan"];
  }
  let postotak = 85;
  console.log(ocijena(postotak));


// Zadatak 5


function obrnutistring(pocetnistring) {
    return pocetnistring.split('').reverse().join('');
}

let string1 = 'Abc123dEf';
let string2 = obrnutistring(string1);

console.log(`Pocetni string: ${string1}`);
console.log(`Obrnuti string: ${string2}`);


// Zadatak 6

function najvecistring(listastringova) {
    let najveci = '';
    for (const str of listastringova) {
        if (str.length > najveci.length) {
            najveci = str;
        }
    }
    return najveci;
}

const lista = ['motori', 'automobili', 'helikopteri', 'brodovi'];
const najduzi = najvecistring(lista);

console.log(`Najduži string je: ${najduzi}`);

// Zadatak 7

function brojponavljanjaznaka(str) {
    const brojac = {}; 


    for (let i = 0; i < str.length; i++) {
        let znak = str[i];

       
        if (brojac[znak]) {
            brojac[znak]++;
        } else {
           
            brojac[znak] = 1;
        }
    }

    
    for (let znak in brojac) {
        console.log(`Znak '${znak}' se pojavljuje ${brojac[znak]} puta.`);
    }
}

let rijec = "program";
brojponavljanjaznaka(rijec);


// Zadatak 8

class Knjiga {
    constructor(naziv, spisatelj, izdanje, br_stranica) {
      this.naziv = naziv;
      this.spisatelj = spisatelj;
      this.izdanje = izdanje;
      this.br_stranica = br_stranica;
    }
  
    ispisKnjiga() {
      console.log(`Naziv knjige je ${this.naziv}. Knjigu je napisao ${this.spisatelj} i ima ${this.br_stranica} stranica. Broj izdanja je ${this.izdanje}.`);
    }
  }
  
  const Knjiga1 = new Knjiga('Dama s kamelijama', 'Aleksandar Dima','851','240');

  Knjiga1.ispisKnjiga();


  // Zadatak 9

  const Knjige = [

    {
      naziv: 'Dama s kamelijama ',
      spisatelj:'Aleksandar Dima', 
      izdanje: '851.',
      broj_stranica: '240'
    },

    {
        naziv: 'Kći kralja močvare',
        spisatelj:'Karen Dionne', 
        izdanje: '2.',
        broj_stranica: '307'

    }
  ];
 
  console.log('Izbor knjige za lektiru:');
  Knjige.forEach(Knjige => {
    console.log(`Naziv: ${Knjige.naziv}, Spisatelj: ${Knjige.spisatelj}, Izdanje: ${Knjige.izdanje}, Broj stranica: ${Knjige.broj_stranica}`);
  });
  
  const jsonKnjige = JSON.stringify(Knjige);
 
  console.log(jsonKnjige);
  

  // Zadatak 10

 
