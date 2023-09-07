const { SlashCommandBuilder } = require("discord.js"); // Use a importação que você está usando

module.exports = {
    data: new SlashCommandBuilder()
        .setName("rolardados")
        .setDescription("Rola dados no formato XdY, onde X é o número de dados e Y é o número de lados em cada dado.")
        .addStringOption(option =>
            option.setName('expressao')
                .setDescription('A expressão para rolar dados (por exemplo, 2d6).')
                .setRequired(true)),

    async execute(interaction) {
        const expression = interaction.options.getString('expressao');
        const regex = /^(\d+)d(\d+)$/;

        if (!regex.test(expression)) {
            await interaction.reply('Formato inválido. Use /rolardados XdY, onde X é o número de dados e Y é o número de lados em cada dado.');
            return;
        }

        const [_, numDice, numSides] = expression.match(regex);
        const rolls = [];

        for (let i = 0; i < numDice; i++) {
            const roll = Math.floor(Math.random() * parseInt(numSides)) + 1;
            rolls.push(roll);
        }

        const sum = rolls.reduce((a, b) => a + b, 0); // Calcula a soma dos valores dos dados

        let resultMessage = `:smiling_imp: - Seus dados foram ${rolls.join(', ')} e a soma deu ${sum}.`;

        if (numDice === '1' && numSides === '20' && rolls.includes(20)) {
            resultMessage = `:smiling_imp: - O Inferno te abençoou e você tirou 20.`;
        } else if (numDice === '1' && numSides === '20' && rolls.includes(1)) {
            resultMessage = `:smiling_imp: - A maldição do Diabo caiu em você, logo você tirou 1.`;
        } else if (numDice === '1') {
            resultMessage = `:smiling_imp: - Seu resultado foi o número ${rolls.join(', ')}.`;
        }

        await interaction.reply(resultMessage);
    },
};
