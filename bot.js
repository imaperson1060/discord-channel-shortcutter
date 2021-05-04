const { Client, MessageAttachment } = require("discord.js"),
    fs = require("fs"),
    client = new Client();

client.login(token);

client.on("ready", () => {
    client.user.setActivity("Shortcutter | >help", {
        type: "PLAYING"
    });
});

client.on("message", (message) => {
    if (message.content.startsWith(">shortcut")) {
        console.log(message.mentions.channels.first())
        if (message.mentions.channels.first()) {
            message.reply("**WARNING:**\nBrowsers will block the shortcut because internet shortcuts are commonly used for scams.", new MessageAttachment(Buffer.from(`[InternetShortcut]\r\nURL=discord://discordapp.com/channels/${message.guild.id}/${message.mentions.channels.first().id}\r\nIconFile=${message.guild.iconURL()}\r\nIconIndex=0`, "utf-8"), `${message.mentions.channels.first().name}.url`));
        } else {
            message.reply("**WARNING:**\nBrowsers will block the shortcut because internet shortcuts are commonly used for scams.", new MessageAttachment(Buffer.from(`[InternetShortcut]\r\nURL=discord://discordapp.com/channels/${message.guild.id}/${message.channel.id}\r\nIconFile=${message.guild.iconURL()}\r\nIconIndex=0`, "utf-8"), `${message.channel.name}.url`));
        }
    }

    if (message.content == ">help") {
        message.reply({
            "embed": {
                "color": "#7289DA",
                "author": {
                    "name": "Shortcutter",
                    "icon_url": "https://avatars3.githubusercontent.com/u/68653653?s=48&v=4"
                },
                "title": "This bot was created by imaperson!",
                "fields": [{
                        "name": "Use the bot:",
                        "value": "Type *>shortcut* in any channel the bot can send messages in to use."
                    },
                    {
                        "name": "Invite it here:",
                        "value": "[https://discord.com/api/oauth2/authorize?client_id=838967702872916000&permissions=34816&scope=bot](https://discord.com/api/oauth2/authorize?client_id=838967702872916000&permissions=34816&scope=bot)"
                    }
                ],
                "timestamp": new Date(),
                "footer": {
                    "text": "© imaperson"
                }
            }
        });
    }
});
