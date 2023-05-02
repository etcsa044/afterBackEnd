const socket = io();


socket.on(`products`, data => {

    const productContent = document.getElementById("productsContent");

    let content = "";

    data.forEach(product => {
        content += `${product.title} ${product.description} ${product.price}  <br/>`;
    });

    productContent.innerHTML = content;
});
