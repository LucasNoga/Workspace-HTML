//npm init
//npm install --save discord.js

const Discord = require('discord.js')
const bot = new Discord.Client()
const token = 'MzIyMzExMDExMTQxMTU2ODY0.DBqxQw.6QgXouLw2JvJhWrD7nFuukmSve4'

const Google = require('./commandes/google')

//pour preparer le bot
bot.on('ready', function(){
	console.log("Logged in as " + bot.user.tag);
	bot.user.setAvatar('./avatar_bot.png')
	.then(() => console.log('Avatar mis en place avec succes'))
	.catch(() => console.error)

	bot.user.setGame(bot.channels.name).catch(console.error)
})

//permet d'envoyer pong lors du message !ping
bot.on('message', function(msg){
	if(Google.match(msg)){
		Google.action(msg)
	}

	if(msg.content === '!ping'){
		msg.channel.send('pong')
	}

})

//Permet d'envoyer un message a un membre qui arrive sur le channel
bot.on('guildMemberAdd', function(member){
	member.createDM().then( function(channel){
		channel.send('Bienvenue sur le channel' + member.displayName)
	}).catch(console.error)
})


//connexion du bot avec le token
bot.login(token)