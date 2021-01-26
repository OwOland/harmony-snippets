import { Client, Message, Intents } from 'https://deno.land/x/harmony/mod.ts';

const client = new Client();

client.on('ready', () => {
  console.log(`Ready! User: ${client.user?.tag}`);
})

client.on('messageCreate', (msg: Message): void => {
  if(msg.content === '!ping') {
    msg.channel.send(`Ping! WS PING: ${client.ping}`);
  }
})

client.connect("your client token")