execute @e[type=xs:server] ~~~ tag @a[tag="§{§k§E§N§C§r§}staff"] add "§{§k§E§N§C§r§}tempTag"
execute @a[tag=!"§{§k§E§N§C§r§}tempTag", c=1] ~~~ function private/init
execute @a[tag="§{§k§E§N§C§r§}tempTag", c=1] ~~~ function private/reload
execute @a[tag=!"§{§k§E§N§C§r§}tempTag", c=1] ~~~ tag @s remove "§{§k§E§N§C§r§}tempTag"