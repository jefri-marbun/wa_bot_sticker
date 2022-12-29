import console from "console";
import qrcode from "qrcode-terminal";
import { Client,LocalAuth } from "whatsapp-web.js";


const client = new Client({
    authStrategy: new LocalAuth(),
});

client.on('qr', (qr)=> {
    qrcode.generate(qr, {small:true});
});

client.on('ready', ()=> {
    console.log('Client is Ready!');
});

client.on('message', message => {
	console.log(message.body);
});

client.on('message', message => {
	if(message.body.toLowerCase() === 'hkbp') {
		client.sendMessage(message.from, 'jaya jaya jaya !');
	}
});

client.on('message', message => {
	if(message.body.toLowerCase() === 'opung robi') {
		client.sendMessage(message.from, 'opung ohh opung robbb. tobat pungg');
	}
});

client.on('message', message => {
	if(message.body.toLowerCase() === 'kucing opung') {
		client.sendMessage(message.from, 'hi. aku kucing opung, aku mageran bgt dan hobinya bobo huhuhuhu dan ak gndut mbul emoy 👀');
	}
});

client.on('message', message => {
	if(message.body.toLowerCase() === 'halo') {
		client.sendMessage(message.from, 'hai dengan jepri disini, ada yang bisa dibanting?');
	}
});

client.on('message', message => {
	if(message.body.toLowerCase() === 'angel') {
		client.sendMessage(message.from, 'enjel the demon');
	}
});


client.on('message', async (msg)=> {
    if (msg.body.startsWith('!sticker') && msg.type 
        === 'image') {
        const media = await msg.downloadMedia();

        client.sendMessage(msg.from, media, {
            sendMediaAsSticker: true,
            stickerAuthor: 'made by j',
            stickerName:'jep',
        }
        
        );
        
    }
});
 
 

client.initialize();