const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'r6 dray') {
    	message.reply({embed: {
  "description": "[Dray7z](https://r6db.com/player/a633df64-18bf-4f2d-a314-d75ab9c77657)",
    "color": 16777215,
    "footer": {
      "icon_url": "https://ubistatic19-a.akamaihd.net/resource/it-it/game/rainbow6/siege-v3/r6-operators-list-jager_317272.png",
      "text": "Jäger"
    },
    "thumbnail": {
      "url": "https://uplay-avatars.s3.amazonaws.com/a633df64-18bf-4f2d-a314-d75ab9c77657/default_146_146.png"
    },
    "author": {
      "name": "R6DB",
      "url": "https://r6db.com/player/a633df64-18bf-4f2d-a314-d75ab9c77657",
      "icon_url": "https://i.redd.it/iznunq2m8vgy.png"
    }
}});
  	}
	
	else if(message.content === 'r6 jager') {
    	message.reply({embed: {
  "description": "[Fundy123](https://r6db.com/player/0ce52d73-e597-4aad-b2ac-3733b9c37194)",
    "color": 16777215,
    "footer": {
      "icon_url": "https://ubistatic19-a.akamaihd.net/resource/it-it/game/rainbow6/siege-v3/r6-operators-list-jager_317272.png",
      "text": "Jäger"
    },
    "thumbnail": {
      "url": "https://uplay-avatars.s3.amazonaws.com/0ce52d73-e597-4aad-b2ac-3733b9c37194/default_146_146.png"
    },
    "author": {
      "name": "R6DB",
      "url": "https://r6db.com/player/a633df64-18bf-4f2d-a314-d75ab9c77657",
      "icon_url": "https://i.redd.it/iznunq2m8vgy.png"
	  }
}});
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
