<h1 align="center"> Harmony Snippets </h1>

<img align="center" src="https://images-ext-2.discordapp.net/external/I5sbBtaBD8JEMWkMosL8qqTOqRqlIcEgS5GbTJl97kY/https/tejas.has-no-bra.in/f/hSbfta.gif?width=909&height=559"  />

## Introduction

This is a set of snippets for Harmony!

What is Harmony?
Harmony is an easy to use Discord API Library for Deno.

- Lightweight and easy to use.
- Complete Object-Oriented approach.
- Slash Commands supported.
- Built-in Commands framework.
- Customizable Caching, with Redis support.
- Use `@decorators` to easily make things!
- Made with ❤️ TypeScript.

> Tip: We recommend using Tab Completion for quick and faster work. Enable it in your Visual Studio Code settings or by adding this snippet `"editor.tabCompletion": "on"` to your editor's settings.json file.

## Snippets

### `client`

```ts
import { Client, Message, Intents } from "https://deno.land/x/harmony/mod.ts";

const client = new Client();

client.on("ready", () => {
  console.log(`Ready! User: ${client.user?.tag}`);
});

client.on("messageCreate", (msg: Message): void => {
  if (msg.content === "!ping") {
    msg.channel.send(`Pong! WS Ping: ${client.ping}`);
  }
});

client.connect($1, Intents.All);
```

### `client-cl`

```ts
import { Client, Message, Intents } from "https://deno.land/x/harmony/mod.ts";

class Bot extends Client {
  constructor(...args) {
    super(...args);
    this.ready.bind(this);
    this.messageCreate.bind(this);
  }

  ready() {
    console.log(`Ready! User: ${this.user?.tag}`);
  }

  messageCreate(msg: Message) {
    if (msg.content === "!ping") {
      msg.channel.send(`Ping! WS PING: ${client.ping}`);
    }
  }
}

const bot = new Bot();
bot.connect($1, Intents.NONE);
```

### `client-cl-d`

```ts
import {
  Client,
  Message,
  Intents,
  event,
} from "https://deno.land/x/harmony/mod.ts";

class Bot extends Client {
  constructor(...args) {
    super(...args);
  }

  @event()
  ready() {
    console.log(`Ready! User: ${this.user?.tag}`);
  }

  @event()
  messageCreate(msg: Message) {
    if (msg.content === "!ping") {
      msg.channel.send(`Ping! WS PING: ${this.ping}`);
    }
  }
}

const bot = new Bot();
bot.connect($1, Intents.NONE);
```

### `cmd-cl`

```ts
class $1Command extends Command {
  name = "$1";

  execute(ctx: CommandContext) {
    $2;
  }
}

client.commands.add(new $1Command());
```

### `cmd-build`

```ts
const $1Command = new CommandBuilder()
  .setName("$1")
  .onExecute((ctx: CommandContext) => {
    $2;
  });

client.commands.add($1Command);
```

### `event-d`

```ts
@event()
$1($2){
  $3
}
```

### `cmd-d`

```ts
@command()
$1 (ctx: CommandContext){
  $2
}
```

## Release Notes

### 1.0.0

Initial release of harmony-snippets

---

## Need help or having issues?

Join us on [our discord!](https://discord.gg/WVN2JF2FRv)

**Enjoy!**
