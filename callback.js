

// setTimeout( ()=> {
//     console.log('Hola mundo');
// }, 2000);


const getUsuarioByID = ( id, callback ) => {
    const user = {
        id,
        nombre: 'Lenin'
    }

    setTimeout(() => {
       callback(user) 
    }, 1500);

}

getUsuarioByID(10, ( usuario ) =>{
    console.log(usuario);
});
