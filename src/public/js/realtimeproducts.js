const socket = io();


socket.on(`products`, async data => {
    console.log(await data);

    const productContent = document.getElementById("productsContent");

    let content = "";

    console.log(typeof(data));

    await data.forEach(product => {
        content += `${product.title} <br/>`;
    });

    productContent.innerHTML = content;
})
