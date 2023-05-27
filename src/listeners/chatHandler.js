import MessagesManager from "../../Dao/mongo/managers/messages.js";


const messageService = new MessagesManager();

const registerChatHandler = async (io, socket) => {

    console.log("new socket connected")

    socket.on("chat:newParticipant",data =>{
        socket.broadcast.emit("chat:newConnection", data.user);
    });
    
    const messageLogs = await messageService.getMessages();
    socket.emit("chat:messageLogs", messageLogs)
    
    const saveMessage = async (message) => {
        await messageService.createMessage(message);
        const messageLogs = await messageService.getMessages();
        io.emit("chat:messageLogs", messageLogs)
    }

    socket.on("chat:message", saveMessage);

}

export default registerChatHandler;