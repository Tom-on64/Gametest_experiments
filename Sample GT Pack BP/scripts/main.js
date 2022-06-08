import { Commands, World } from "mojang-minecraft"

Command.run('tellraw @a {"rawtext":[{"text":"Hello, World!"}]}', World.getDimension('overworld'))