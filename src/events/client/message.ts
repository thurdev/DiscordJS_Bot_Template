module.exports = (client: any, message: any) => {
    const prefix: string | undefined = process.env.PREFIX;

    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    
    const args = message.content.slice(prefix!.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    
    const cmd = client.commands.get(command);
    
    if (!cmd) return;

    cmd.run(client, message, args);

}