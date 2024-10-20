const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 6969 });

wss.on('connection', (ws) => {
    console.log(`New websocket connection!`);

    ws.on('message', (msg) => {
        ws.send(sillyfyText(`${msg}`));
        console.log(`Server recieved a message!\n${msg}`);
    });
    ws.on('close', (code, reason) => {
        console.log(`Server closed with reason: ${reason} and code: ${code}`);
    })
    ws.on('ping', (data) => {
        console.log(`${data}`);
    })
    ws.on('error', (error) => {
        console.error(`Server recieved an error! \n${error}`);
    })
    ws.on('upgrade', (req) => {
        console.log(`${req}`);
    })
})

// Functions

function sillyfyText(str) {
    const startArray = ["🎉","✨","𝓼𝔀𝓪𝓰","𝓪𝔀𝓮𝓼𝓸𝓶𝓮","𝓯𝓻𝓮𝓪𝓴𝔂", "𝓼𝓲𝓵𝓵𝔂", "★", "bread", "🌟", "🐈", "𝓮𝓿𝓲𝓵", "tally", "𝓼𝓴𝓲𝓫𝓲𝓭𝓲", "yoyle", "scrimblo", "criminal", "devious", "quirky"];
    const endArray = [":3", "★", "😎", "💥", "🌟", "meow", "goober"];
    const endRepeat = 3;
    const startRepeat = 3;
    let sillifiedText = "";
    let toAdd = "";
    let toAddEnd = " ";
    for(let i = 0; i < startRepeat; i++) {
        const silly = startArray[Math.floor(Math.random() * startArray.length)]
        toAdd += silly + " ";
    }
    for(let i = 0; i < endRepeat; i++) {
        const silly = endArray[Math.floor(Math.random() * endArray.length)]
        toAddEnd += silly + " ";
    }
    sillifiedText = toAdd.trim() + " " + str + " " + toAddEnd.trim()
    return sillifiedText
}