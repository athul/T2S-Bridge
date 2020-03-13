# T2S-Bridge
A bidirectional bridge connecting telegram and slack. In about **55** lines of code😁

T2S is a simple node app which lets you connect messages from **Telegram and Slack** and *vice versa*.

It is a simple node app which you can host on Glitch and is fast⚡️.

You can just remix on Glitch 👇
<!-- Remix Button -->
<a href="https://glitch.com/edit/?utm_content=project_teleslackoli&utm_source=remix_this&utm_medium=button&utm_campaign=glitchButton#!/remix/teleslackoli">
  <img src="https://cdn.glitch.com/2bdfb3f8-05ef-4035-a06e-2043962a3a13%2Fremix%402x.png?1513093958726" alt="remix this" height="33">
</a>

## Setting Up

Make a `.env` file and add the necessary tokens. ENV variables are case sensitive and you should set the like this

```
SLACK_TOKEN= Get the token from https://my.slack.com/services/new/bot
SLACK_CHAN= Set the channel you want these messages forwarded to
TG_TOKEN= Telegram token for your bot from BOTFATHER bot in telegram
TG_CHAT= ChatID of the chat you want to get and forward the messages. Talk to jsondump bot and get chatid
```
You're good to go :tada:

### Contributors
- Athul Cyriac Ajay @athul

### License
**MIT**