
const empleados = [
    {
        id:1,
        nombre: 'Lenin'       
    },
    {
        id:2,
        nombre: 'Juan'       
    },
    {
        id:3,
        nombre: 'Pedro'       
    }
];


const salarios = [
    {
        id:1,
        salario: 1000       
    },
    {
        id:2,
        salario: 1500
    }
];

const getEmpleado = ( id, callback ) =>{

  return new Promise( (resolve, reject) => {

    const empleado = empleados.find( (e) => e.id === id)?.nombre;

    (empleado) ? resolve(empleado) : reject(`No existe empleado con id ${id}`);

  });

}

const getSalario = (id, callback) => {

    return new Promise( (resolve, reject) => {
        const salario = salarios.find( (e)=> e.id ===id)?.salario;
        (salario) ? resolve(salario) : reject (`No existe un salario asociado al id ${id}`);
    });

}

const id=2;

// getEmpleado(id)
// .then(empleado => console.log(empleado))
// .catch(err=>console.log(err));

// getSalario(id)
// .then(sal => console.log(sal))
// .catch(err=>console.log(err));


// getEmpleado(id)
// .then(empleado =>{
//     getSalario(id)
//      .then(sal => console.log('El empleado:', empleado, 'tiene un salario de: ',sal))
//      .catch(err=>console.log(err));
// }).catch(err => console.log(err));

let nombre;
getEmpleado( id )
.then(emp => {
    nombre = emp;
    return getSalario( id )
})
.then(sal => console.log('El empleado:', nombre, 'tiene un salario de: ',sal))
.catch(err=> console.log(err));
