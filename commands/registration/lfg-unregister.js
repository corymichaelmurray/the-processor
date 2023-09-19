const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('lfg-unregister')
        .setDescription('Unregister a game under a user')
        .addStringOption(option =>
            option.setName('game')
                .setDescription('The game to unregister')
                .setRequired(true)
                .addChoices(
                    { name: 'Rocket League', value: 'Rocket League'},
                    { name: 'Apex Legends', value: 'Apex Legends'},
                    { name: "Baldur's Gate 3", value: "Baldur's Gate 3"},
                    { name: 'Halo', value: 'Halo'},
                    { name: 'Fortnite', value: 'Fortnite'},
                    { name: 'Overwatch', value: 'Overwatch'})
        ),
    async execute(interaction) {
        const game = interaction.options.getString('game');
        console.log(game);
        const member = interaction.member
        const role = interaction.guild.roles.cache.find(role => role.name === game)
        member.roles.remove(role)
        await interaction.reply({ content: `You have been unregistered for notifications to play ${game}! You can register again at any time by using the /lfg-register command.`, ephemeral: true });
    }
};