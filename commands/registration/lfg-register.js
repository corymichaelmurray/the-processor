const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('lfg-register')
        .setDescription('Register a game under a user')
        .addStringOption(option =>
            option.setName('game')
                .setDescription('The game to register')
                .setRequired(true)
                .addChoices(
                    { name: 'Rocket League', value: 'Rocket League'},
                    { name: 'Apex Legends', value: 'Apex Legends'},
                    { name: "Baldur's Gate 3", value: "Baldur's Gate 3"},
                    { name: 'Halo', value: 'Halo'},
                    { name: 'Fortnite', value: 'Fortnite'})
        ),
    async execute(interaction) {
        const game = interaction.options.getString('game');
        console.log(game);
        const member = interaction.member
        const role = interaction.guild.roles.cache.find(role => role.name === game)
        member.roles.add(role)
        await interaction.reply({content: `You have been registered for notifications to play ${game}! You can unregister at any time by using the /lfg-unregister command.`, ephemeral: true });
    }
};