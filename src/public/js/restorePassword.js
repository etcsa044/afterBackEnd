const recover_frm = document.getElementById("recover_password_form");


recover_frm.addEventListener("submit", async evt => {
    evt.preventDefault();
    const data = new FormData(recover_frm);
    const obj = {};
    data.forEach((value, key) => (obj[key] = value));
    const response = await fetch("api/session/restorepassword", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        }
        
    })
        const responseData = await response.json();
        console.log(responseData.message);
        if (responseData.status === "success"){
            window.location.replace("/login");
        }
        console.log(responseData);
        
})