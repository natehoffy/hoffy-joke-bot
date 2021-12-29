const {jokeGetter} = require("./getJoke")
const {updateContact} = require("./updateContact");

const mainService = async(contactId) => {
    try {
        const joke = await jokeGetter()
        const updatedContact = await updateContact(contactId, joke)
        console.log("Contact updated with a joke!")
    } catch (err) {
        console.log("Joke processing error: ");
        console.log(err);
    }
}

module.exports = {
    mainService
}
