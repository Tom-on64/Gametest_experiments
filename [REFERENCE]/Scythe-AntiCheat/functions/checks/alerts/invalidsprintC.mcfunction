# InvalidSprint/C
scoreboard players add @s[type=player,tag=sprint,tag=sneak,m=!c,tag=!flying] invalidsprintvl 1
execute @s[type=player,tag=sprint,tag=sneak,m=!c,tag=!flying] ~~~ tellraw @a[tag=notify] {"rawtext":[{"text":"§r§6[§aScythe§6]§r "},{"selector":"@s"},{"text":" §1has failed §7(Movement) §4InvalidSprint/C. VL= "},{"score":{"name":"@s","objective":"invalidsprintvl"}}]}
tp @s[type=player,tag=sprint,tag=sneak,m=!c,tag=!flying] @s
