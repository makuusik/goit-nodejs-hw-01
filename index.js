const yargs = require("yargs");
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      listContacts().then((contacts) => console.table(contacts));
      break;

    case "get":
      getContactById(id).then((contact) => console.log(contact));
      break;

    case "add":
      addContact(name, email, phone).then((contact) => console.log(contact));
      break;

    case "remove":
      removeContact(id).then((contact) => console.log(contact));
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

const argv = yargs
  .option("action", {
    alias: "a",
    describe: "choose action",
    demandOption: true,
  })
  .option("id", {
    alias: "i",
    describe: "user id",
  })
  .option("name", {
    alias: "n",
    describe: "user name",
  })
  .option("email", {
    alias: "e",
    describe: "user email",
  })
  .option("phone", {
    alias: "p",
    describe: "user phone",
  }).argv;

invokeAction(argv);
