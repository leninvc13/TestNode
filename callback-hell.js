
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
    const empleado = empleados.find( (e) => e.id === id)

    if(empleado) {
        callback(null, empleado);
    }
    else{
        callback( `Empleado con id: ${ id } no existe`);
    }

    return empleado;
}


const getSalario = ( id, callback ) =>{

    const salario = salarios.find( (e) => e.id === id)

    if(salario){
        callback(null, salario);
    }
    else{
        callback( `Salario con id: ${ id } no existe`);
    }

}

//console.log(getEmpleado(5));

getEmpleado(1, (err, empleado) => {
    if(err){
        console.log('Error')
        return console.log(err)
    }
   
    getSalario(1, (err, salario) => {
        if(err){
            return console.log(err)
        }
        
        console.log('El empleado: ', empleado, 'tiene un salario de:', salario)


    })


})


