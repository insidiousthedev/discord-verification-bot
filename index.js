require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', async () => {
	console.log('[BOT] Ready.');
	await bot.user.setStatus('online');
	await bot.user.setActivity(`!verify`, { type: 'PLAYING' });
});

bot.on('message', (msg) => {
	if (msg.content === '!verify') {
		const verifiedEmbed = new Discord.MessageEmbed()
			.setTitle('**Verification successful!**')
			.setDescription('You have been verified!')
			.setColor('#00FF00');
		const verifiedRole = msg.guild.roles.cache.get('945395357926424576');
		msg.member.roles.add(verifiedRole);
		msg.react('✅');
		msg.author.send(verifiedEmbed);
		console.log('[VERIFIED] Member verified.');
		msg.delete({ timeout: 5000 });
	}
});

bot.login(process.env.TOKEN);
