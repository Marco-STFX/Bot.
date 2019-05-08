console.log("hi am marco in her bot version");
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
  console.log('I am ready!');
});

bot.on('message', (message) => {
	if(message.content == "hi") {
		message.channel.sendMessage('Heyo!');
	}

	if(message.content == "hello") {
		message.channel.sendMessage('Welcome!');
	}

	if(message.content == "Hello") {
		message.channel.sendMessage('Hi and be welcome to the server!');
	}

	if(message.content == "Hi") {
		message.channel.sendMessage('Ohayo!');
	}

	if(message.content == "heya") {
		message.channel.sendMessage('Hi!');
	}

	if(message.content == "hey") {
		message.channel.sendMessage('Hewwo!');
	}

	if(message.content == "how is it going?") { 
		message.channel.sendMessage('I am fine. u?');
	}

	if(message.content == "O!How it is going?") { 
		message.channel.sendMessage('Fine');
	}

	if(message.content == "O!How is it going?") { 
		message.channel.sendMessage('gud');
	}
	
	if(message.content == "Good afternoon") {
		message.channel.sendMessage('Good afternoon!');
	}

	if(message.content == "ping") {
		message.channel.sendMessage('sorry about that :sweat_smile:');
	}
	
	if(message.content == "How are you") {
		message.channel.sendMessage('good :smile: how about you?');
	}

	if(message.content == "What's up") {
		message.channel.sendMessage('nothing much pal, what about you?');
	}

	if(message.content == "HI") {
		message.channel.sendMessage('Hiya!');
	}

	if(message.content == "Hola") {
		message.channel.sendMessage('Hola partner');
	}

	if(message.content == "Hi") {
		message.channel.sendMessage('Heya');
	}

	if(message.content == "Oof") {
		message.channel.sendMessage('foo');
	}

	if(message.content == "OOF") {
		message.channel.sendMessage('FOO');
	}

	if(message.content == "oof") {
		message.channel.sendMessage('foo');
	}

	if(message.content == "Yo") {
		message.channel.sendMessage('Yo Yo');
	}

	if(message.content == "How are you?") {
		message.reply('Good, u?');
	}

	if(message.content == "Como estas?") {
		message.reply('Bien, en una crisis existencial');
	}

	if(message.content == "XD") {
		message.reply(':p');
	}

	if(message.content == "xd") {
		message.reply('Lmao');
	}

	if(message.content == "Xd") {
		message.reply('Almost');
	}

	if(message.content == "Fuck") {
		message.reply('I oughta ban u someday');
	}

	if(message.content == "How are ya?") {
		message.channel.sendMessage('fine, cleaning the room');
	}

	if(message.content == "O!Wasted") {
		message.channel.sendMessage('https://i.ytimg.com/vi/1Go5pYduPUE/hqdefault.jpg');
	}

	if(message.content == "O!wasted") {
		message.channel.sendMessage('https://i.kym-cdn.com/photos/images/original/001/275/032/287.gif');
	}

	if(message.content == "O!Objection!") {
		message.channel.sendMessage('https://media.giphy.com/media/w6MNHOoLEzBVm/giphy.gif');
	}

	if(message.content == "objection") {
		message.channel.sendMessage('https://media1.tenor.com/images/011594ecb0f6cab37da63bde80dcec71/tenor.gif?itemid=5486683');
	}

	if(message.content == "O!NOW") {
		message.channel.sendMessage('https://pa1.narvii.com/6222/0513230e10a287ec04444f9b7ceb5ae6fb879fa1_hq.gif');
	}

	if(message.content == "O!Attack") {
		message.channel.sendMessage('https://pa1.narvii.com/6222/0513230e10a287ec04444f9b7ceb5ae6fb879fa1_hq.gif');
	}

	if(message.content == "yo") {
		message.channel.sendMessage('yo yo');
	}

	if(message.content == "Hewwo") {
		message.channel.sendMessage('Hewaaa');
	}

	if(message.content == "Lolis") {
		message.channel.sendMessage('FBI in your house');
	}

	if(message.content == "Sweet") {
		message.channel.sendMessage('https://i.ytimg.com/vi/_GzAbsONBV8/maxresdefault.jpg');
	}

	if(message.content == "sweet") {
		message.channel.sendMessage('https://i.ytimg.com/vi/_GzAbsONBV8/maxresdefault.jpg');
	}

	if(message.content == "lolis") {
		message.channel.sendMessage('And some fbi');
	}

	if(message.content == "l o l i s") {
		message.channel.sendMessage('https://tenor.com/view/fbi-raid-swat-gif-11500735');
	}

	if(message.content == "O!Hold it") {
		message.channel.sendMessage('https://tenor.com/view/ace-attorney-hold-it-wait-wright-phoenix-gif-11598650')
	}

	if(message.content == "O!Hold it!") {
		message.channel.sendMessage('https://tenor.com/view/ace-attorney-hold-it-wait-wright-phoenix-gif-11598650')
	}

	if(message.content == "O!hold it") {
		message.channel.sendMessage('https://tenor.com/view/ace-attorney-hold-it-wait-wright-phoenix-gif-11598650')
	}

	if(message.content == "Cual es mi avatar?") {
		message.reply(message.author.avatarURL);
	}

	if(message.content == "Cual es mi perfil?") {
		message.reply(message.author.avatarURL);
	}

	if(message.content == "O!Perfil") {
		message.reply(message.author.avatarURL);
	}

	if(message.content == "What is my avatar?") {
		message.reply(message.author.avatarURL);
	}

	if(message.content == "O!Avatar") {
		message.reply(message.author.avatarURL);
	}

	if(message.content == "O!avatar") {
		message.reply(message.author.avatarURL);
	}

	if(message.content == "O!avatar") {
		message.reply(message.author.avatarURL);
	}

	if(message.content == "It is time for duel!") {
		message.channel.sendMessage('https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/products/pictures/130169.jpg');
	}

	if(message.content == "It is time for duel") {
		message.channel.sendMessage('https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/products/pictures/130169.jpg');
	}

	if(message.content == "O!perfil") {
		message.reply(message.author.avatarURL);
	}
});
bot.login('NTEzNDk5NDkyNTk5ODU3MTYz.XNBpsg.X8wbxB40vX_brNSHCs0mDuZAqZk');