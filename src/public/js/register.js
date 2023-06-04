

const register_frm = document.getElementById("register_form");


register_frm.addEventListener("submit", async evt => {
    evt.preventDefault();
    const data = new FormData(register_frm);
    const obj = {};
    data.forEach((value, key) => (obj[key] = value));
    const response = await fetch("/api/session/register", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        }
    })

    const responseData = await response.json();
    if (responseData.status === "success"){
        window.location.replace("login");
    }
        console.log(responseData);

})