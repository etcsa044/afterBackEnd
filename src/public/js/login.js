



const login_frm = document.getElementById("login_form");


login_frm.addEventListener("submit", async evt => {
    evt.preventDefault();
    const data = new FormData(login_frm);
    const obj = {};
    data.forEach((value, key) => (obj[key] = value));
    const response = await fetch("/api/session/login", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        }
        
    })
        const responseData = await response.json();
        if (responseData.status === "success"){
            window.location.replace("/products");
        }
        if(responseData.error.length >= 5){
            window.location.replace("/maxattempts")
        };
        
})

// register_frm.addEventListener("submit", async evt => {
//     evt.preventDefault();
//     const data = new FormData(register_frm);
//     const obj = {};
//     data.forEach((value, key) => (obj[key] = value));
//     const response = await fetch("/api/session/jwtLogin", {
//         method: "POST",
//         body: JSON.stringify(obj),
//         headers: {
//             "Content-Type": "application/json"
//         }
        
//     })
//         const responseData = await response.json();
//         console.log(responseData)
//         if (responseData.status === "success"){
//             window.location.replace("/products");
//         }
//         console.log(responseData);
        

//         //invertigar ASYN defer**** nota mental
//  });

