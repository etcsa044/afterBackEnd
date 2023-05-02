const socket = io();


async function obtenerProductos() {
    try {
      const response = await fetch('api/products/realtimeproducts');
      const data = await response.json();
      const productContent = document.getElementById("productsContent");

      let content = "";
  
      data.forEach(product => {
          content += `${product.title} ${product.description} ${product.price}  <br/>`;
      });
  
      productContent.innerHTML = content;
    } catch (error) {
      console.error(error);
    }
  }

  obtenerProductos();



socket.on(`products`, data => {

    const productContent = document.getElementById("productsContent");

    let content = "";

    data.forEach(product => {
        content += `${product.title} ${product.description} ${product.price}  <br/>`;
    });

    productContent.innerHTML = content;
});
