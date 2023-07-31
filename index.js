const argv = require("yargs").argv;
const contactsFns = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
	switch (action) {
		case "list":
			const allContacts = await contactsFns.listContacts();
			return console.log(allContacts);

		case "get":
			const oneContact = await contactsFns.getContactById(id);
			return console.log(oneContact);

		case "add":
			const newContact = await contactsFns.addContact({
				name,
				email,
				phone,
			});
			return console.log(newContact);

		case "remove":
			const removedContact = await contactsFns.removeContact(id);
			return console.log(removedContact);

		default:
			console.warn("\x1B[31m Unknown action type!");
	}
};

invokeAction(argv);
