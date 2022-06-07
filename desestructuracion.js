const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    edad:50,
    getNombre(){
            return  `${this.nombre} ${this.apellido} ${this.poder}`
    }
}

// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder

const { nombre, apellido, poder, edad } = deadpool;

function imprimeHeroe( { nombre, apellido, poder, edad } ){
    
//const { nombre, apellido, poder, edad=0 } = heroe;
console.log(nombre, apellido, poder, edad )
}


//console.log(deadpool.getNombre());
 //console.log(nombre, apellido, poder, edad);
// imprimeHeroe(deadpool);

const heroes =[ 'Deadpool', 'Superman','Batman']

const [ , , h3] = heroes

console.log(h3)