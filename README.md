# discord-verification-bot
The simplest verification bot. 

### How does it work?

You basically have to send `!verify` in a channel and it'll give you a certian role, and send you a DM saying that the verification was successful.<br>
**NOTE:** The command works in **any** channel, so make sure to restrict the bot to that certain verification channel.

### Tech Stack

- [Node.js](https://nodejs.org) (I used v17.3.1, but anything after v12 should **probably** work
- [Npm](https://nodejs.org) (I used 8.3.0, but anything which comes with Node.js v12 or above **should** work
- [Discord.js@12.5.3](https://github.com/discordjs/discord.js/tree/v12) (v13 will **not** work. I made it using an older version because.....I don't really know)
- [dotenv](https://github.com/motdotla/dotenv) (I used v16.0.0) 

### How to use?

- Install Node.js and Npm (Made with Node.js@17.3.1 and Npm@8.3.0
- Make a Discord Bot account
- `git clone https://github.com/insidiousthedev/discord-verification-bot` or download the repository
- Install dependencies with `npm i` (you can use Yarn or Pnpm or anything else as well)
- Rename `.env.example` to `.env` and fill in your Bot's token.
- Go to `index.js` and change the "verifiedRole" id to your "Verified" role id
- Run the bot with `npm start`

### How to change prefix?

The bot doesn't have a command/prefix handler, so just go to `line 12` in the `index.js` file and change the `!verify` to whatever you want! <br>
Examples: `$verify`, `verify`, `v!verify`

### License

I don't care what you do with the bot, but if you're a good person please credit me. <br>
Licensed under the [MIT License](https://github.com/insidiousthedev/discord-verification-bot/blob/main/LICENSE)
