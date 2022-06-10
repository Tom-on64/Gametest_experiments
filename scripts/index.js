import {Commands, World} from "mojang-minecraft"

World.events.beforeChat.subscribe(() => {
    this.runCommand('/say Hello, World!', World.getDimension('overworld'))
})