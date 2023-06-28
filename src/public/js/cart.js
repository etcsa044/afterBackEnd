
    let remove_btn = document.getElementsByClassName("remove_btn");
    remove_btn = Array.from(remove_btn);

for(let i = 0; i <= remove_btn.length; i++){
    remove_btn[i].addEventListener("click", async (evt)=>{
        evt.preventDefault();

        const pid = remove_btn[i].id
        const cid = remove_btn[i].name

        const response = await fetch(`/api/carts/${cid}/product/${pid}`, {
            method:"PUT",
            headers:{
                "Content-type":"aplication/json"
            }
        })

        if(response.status === 200){
            location.reload();
        }
    })
}





