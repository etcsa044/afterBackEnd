

const socket = io();

const productContent = document.getElementById("productsContent");

socket.on("products",data => {
  let content = "";
  data.forEach(element => {
    content += `${element._id} - ${element.title} <br/> `
    productContent.innerHTML = content;
  });
})

// ************************ FUNCIONES DE FS *******************



// async function obtenerProductos() {
//     try {
//       const response = await fetch('api/products/realtimeproducts');
//       const data = await response.json();

//       let content = "";
  
//       data.forEach(product => {
//           content += `${product.title} ${product.description} ${product.price}  <br/>`;
//       });
  
//       productContent.innerHTML = content;
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   obtenerProductos();



// socket.on(`products`, data => {

//     const productContent = document.getElementById("productsContent");

//     let content = "";

//     data.forEach(product => {
//         content += `${product.title} ${product.description} ${product.price}  <br/>`;
//     });

//     productContent.innerHTML = content;
// });
