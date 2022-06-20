import * as Minecraft from "mojang-minecraft"
import config from "./data/config.js"

const World = Minecraft.world;

if (config.debug) console.warn(`${new Date()} | This is debug mode!`)

World.events.beforeChat.subscribe(msg => {
    const message = msg.message.toLowerCase()
    const sender = msg.sender

    if (config.debug && message === "test") console.warn(`${new Date()} | Works!`)
})