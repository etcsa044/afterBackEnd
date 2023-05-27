
const socket = io({
    autoConnect: false
});


const chatBox = document.getElementById("chatBox");
const logs = document.getElementById("logs");
const logsContainer = document.getElementById("logsContainer");




let user;

Swal.fire({
    title: "Ingresa Tu Usuario",
    input: "text",
    icon: "warning",
    text: "Para poder acceder al chat en necesario que te registres",
    inputValidator: (value) => {
        return !value && "Debes Ingresar un nombre";
    },
    allowOutsideClick: false,
    allowEscapeKey: false
}).then(result => {
    user = result.value;
    socket.connect()
    socket.emit("chat:newParticipant", { user })
})

//ON´s
socket.on("chat:messageLogs", data => {
    let message = "";
    data.forEach(log => {
        message += `${log.user} dice: ${log.message} <br/>`;
    });
    logs.innerHTML = message;
})

socket.on("chat:newConnection", data => {
    console.log(data)
    if (!user) return;
    Swal.fire({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        title: `${data} se unió al chat`,
        icon: "success"
    })
})


// Eventos:
chatBox.addEventListener("keyup", evt => {
    if (evt.key === "Enter") {
        if (chatBox.value.trim().length > 0) {
            socket.emit("chat:message", { user, message: chatBox.value.trim() })
        }
        chatBox.value = ""
        logsContainer.scrollTop = logsContainer.scrollHeight;
    }
})

// document.addEventListener("DOMContentLoaded", function(){
//     logsContainer.scrollTop = logsContainer.scrollHeight;
// })

window.addEventListener("load", function() {
    logsContainer.scrollTop = logsContainer.scrollHeight;
});