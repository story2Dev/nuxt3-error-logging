import { WebhookClient } from "discord.js";

export default defineEventHandler(async (event) => {
    const discordToken = process.env.NUXT_DISCORD_TOKEN
    const discordId = process.env.NUXT_DISCORD_CHANNEL_ID
    const discordUsername = process.env.NUXT_DISCORD_USERNAME

    const webhookClient = new WebhookClient({
        id: `${discordId}`,
        token: `${discordToken}`
    })

    const body = await readBody(event)
    try {
        await webhookClient.send({
            content: body?.message,
            username: `${discordUsername}`
        })
        return true
    } catch (error) {
        return false
    }

})