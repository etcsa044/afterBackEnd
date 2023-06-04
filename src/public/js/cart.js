window.addEventListener("load", function() {
    const frm_eliminar = document.getElementsByClassName("frm_eliminar");
// const input_eliminar = document.getElementsByClassName("input_eliminar");
// const btn_eliminar = document.getElementsByClassName("btn_eliminar");


console.log(frm_eliminar)

for(let i = 0; i <= frm_eliminar.length; i++){
    frm_eliminar[i].addEventListener("submit", async (evt)=>{
        evt.preventDefault();
        console.log("hola")
    })
}
  });




