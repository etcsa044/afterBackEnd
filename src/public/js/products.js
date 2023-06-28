
const titulo = document.getElementById("h1");

let add_frm = document.getElementsByClassName("add_frm")

add_frm = Array.from(add_frm);

console.log(add_frm);


titulo.innerHTML = "Productos Disponibles";

for (let i = 0; i <= add_frm.length; i++) {
    console.log("linea14", add_frm[i].id);
    add_frm[i].addEventListener("click", async (evt)=>{
        evt.preventDefault();
        const prod = {};
        
        const pid = add_frm[i].id
        const cid = "646e6f33a94663109938a5da"

        await fetch(`/api/carts/${cid}/products/${pid}`,{
            method:"PUT",
            headers: {
                "Content-Type":"aplication/json"
            },
            body:JSON.stringify(prod),
        } )
    })
}




