require('dotenv').config
const TelegramBot = require('telebot')
const SlackBot = require('slackbots')

const {
    TG_TOKEN: tgtoken,
    TG_CHAT: chatid,
    SLACK_TOKEN: sltoken,
    SLACK_CHAN: slchannel
} = process.env;

const tgbot = new TelegramBot(tgtoken)
const slbot = new SlackBot({ token: sltoken, name: 'TeleSlackoli' });
const params = { icon_emoji: ':cat:' }
slbot.on('start', () => {
    slbot.postMessageToChannel(
        slchannel,
        'Telegram Bridge',
        params
    );
})

slbot.on('message', (data) => {
    if (data.type !== 'message') {//if the response isn't a message do nothing
        return
    }
    if (typeof data.user !== 'undefined') {
        sendTg(data.user, data.text)
    }
    if (data.subtypes === 'bot_message' && typeof data.user !== 'undefined') {//if the message is from a bot,don't send fwd to tg
        sendTg('TeleSlackoli', data.text)
    }
})

tgbot.on('text', (msg) => {
    if (msg.from.is_bot) {
        return
    } else {
        if (typeof msg.chat.title == 'undefined') {
            sendSlack(msg.from.username, msg.text, 'DM')//Send the response chat as DM
        }
        else {
            sendSlack(msg.from.username, msg.text, msg.chat.title)//Send the response chat as the title of the group
        }
    }
})
function sendTg(user, text) {//Function to send the Response to telegram with userid and response as params
    tgbot.sendMessage(chatid, `[${user} from #${slchannel}],

${text}`, 'MarkDown')}
function sendSlack(user, text, chan) {//send Messages to Slack with userid,response and channel name as params
    slbot.postMessageToChannel(slchannel, `[${user} from ${chan}]

${text}`, params)}
tgbot.start()//Listen for the TG Bot