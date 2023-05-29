
const titulo = document.getElementById("h1");
const add_btn = document.getElementsByClassName("add_btn");

titulo.innerHTML = "Productos Disponibles";


function saludo(precio){
    console.log("hola")
}



// add_btn.addEventListener("click", ()=>{saludo()})

// Buenas, lo tenes que poner en un formulario que haga un post a la ruta de agregar al carrito, podes poner inputs que sean de type hidden, esto significa que van a ser invisibles, no se van a ver, y a cada input le pones el name que necesita por ejemplo name=Price y de value le pasas el precio del producto