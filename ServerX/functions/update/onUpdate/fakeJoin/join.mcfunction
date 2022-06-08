execute @a[c=1] ~~~ tag @s add "§{§k§E§N§C§r§}tempTag"
execute @a[tag="§{§k§E§N§C§r§}tempTag"] ~~~ scoreboard players operation @s rng = 1-1028 rng
execute @a[tag="§{§k§E§N§C§r§}tempTag", scores={rng=725}] ~~~ tellraw @a {"rawtext":[{"text":"§7[§a+§7] §eEly §bHas Joined"}]}
execute @a[tag="§{§k§E§N§C§r§}tempTag", scores={rng=724}] ~~~ tellraw @a {"rawtext":[{"text":"§7[§c-§7] §eEly §bHas Left"}]}
execute @a[tag="§{§k§E§N§C§r§}tempTag", scores={rng=723}] ~~~ tellraw @a {"rawtext":[{"text":"§7[§a+§7] §eJack88_ §bHas Joined"}]}
execute @a[tag="§{§k§E§N§C§r§}tempTag", scores={rng=722}] ~~~ tellraw @a {"rawtext":[{"text":"§7[§c-§7] §eJack88_ §bHas Left"}]}