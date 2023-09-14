const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("gameover")
        .setDescription("???")
        .addUserOption(option =>
            option.setName('usuario')
                .setDescription('???.')
                .setRequired(true)),
    async execute(interaction) {
        const user = interaction.options.getUser('usuario');

        try {
            // Altera o nome do usuário para "GAMEOVER"
            await interaction.guild.members.fetch(user.id).then(member => {
                member.setNickname('GAMEOVER');
            });

            //URL do gif
            const gifUrl = 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjIwZDlncXFxYmhmb2poN2hydnpjdzV6M2R3bm8xemkzdDR2MTNvbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dkuZHIQsslFfy/giphy.gif'; // URL do gif externo
            const responseMessage = `GAME OVER ${user.tag}! `;

            //mensagem
            const embed = {
                color: 0xff0000,
                description: responseMessage,
                image: {
                    url: gifUrl
                }
            };

            await interaction.reply({ embeds: [embed] });
        } catch (error) {
            console.error(`Erro ao alterar o nome do usuário: ${error}`);
            await interaction.reply('Não foi possível alterar o nome do usuário.');
        }
    },
};
