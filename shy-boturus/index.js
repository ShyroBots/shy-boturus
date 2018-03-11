const Discord = require('discord.js');
const shy = new Discord.Client();

shy.login('jaja');

shy.on('message', message => {
    if (message.content.startsWith('s.ping')){
        message.channel.send('pong!');
    }


    if(message.content.startsWith('s.dado')){
        randonmNumber = Math.floor(Math.random() * (20 - 1) + 1);
        if(randonmNumber == 1){
            message.reply("Não foi dessa vez");
        }
        else{
            message.reply("Voce tirou o número: " + randonmNumber)
        }
    }


if(message.content.startsWith("s.clear")){
    let numberMessages = message.content.slice(7,message.content.length)
    
    message.channel.fetchMessages({limit: numberMessages}).then(messages => message.channel.bulkDelete(messages));
    message.reply("As ultimas" + numberMessages + " mensagens foram deletadas.");
}

});