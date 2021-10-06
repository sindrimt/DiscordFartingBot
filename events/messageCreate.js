const config = require("../Data/config.json");
const { aliases } = require("../commands/hello");

module.exports = async (client, message) => {
  if (/* message.author.bot ||  */!message.guild) return;

  const prefix = config.prefix;

  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
<<<<<<< HEAD
  console.log("args: " + args);
  console.log("command: " + command);
=======
>>>>>>> 2efbd8e9e54c6a0049f5630e27c2071584251797

  let commandFile;

  /* console.log(client.commands);
  console.log(client.aliases); */

  if (client.aliases.has(command)) {
    //client.commands.get(client.aliases.has(command)).name;
    /*  console.log("command : " + command);
     console.log("args : " + args); */

    aliasCommand = client.aliases.get(command);
    commandFile = client.commands.get(aliasCommand);
  } else {
    commandFile = client.commands.get(command);
  }

  //console.log(commandFile); // Den som går igjennom 

  if (!commandFile) return;

  try {
    commandFile.execute(client, message, args);
  } catch (error) {
    console.log(error);
    message.channel.send("something went wrong");
  }
};
