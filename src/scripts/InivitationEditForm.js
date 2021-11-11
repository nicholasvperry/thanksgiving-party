import { useAtendee, updateNote } from "./InvitationData.js";
import { AtendeeList } from "./InvitationList.js";

//Print edit form where the add atendee form is. We can put is somewhere else if we wanted

const contentTarget = document.querySelector("#listForm")

export const atendeeEditForm = (atendeeId) => {
    //Give this component access to our applications atendees
    const allAtendees = useAtendee()

    //Find the atendee note we click on by its unique id
    const atendeeToEdit = allAtendees.find(singleAtendee=> singleAtendee.id === atendeeId)

    //Print the form
    //Retrieve id from the id in the save changes button
    contentTarget.innerHTML = `
        <h2>Edit Attendee</h2>
   
        <div><input id="name" type="text" value="${atendeeToEdit.name}"></div>
        <div><input id="age" type="number" value="${atendeeToEdit.age}"></div>
        <div><input id="favoriteFish" type="text" value="${atendeeToEdit.favoriteFish}"></div>
        <div><input id="favoriteFood" type="text" value="${atendeeToEdit.favoriteFood}"></div>
        <div><input id="picture" type="text" value="${atendeeToEdit.picture}"></div>
        <div><label for="handed">Right Handed:</label></div>
        <div><input id="handed" type="checkbox" placeholder="Guest's Handed"></div>

    <button id="saveAtendee">Save</button>
    <button id="cancel">Cancel</button>
    `
}

//Event listener for save note changes. Needs if statement to work
const eventHub = document.querySelector("#listForm")
eventHub.addEventListener("click", (event) => {
    if(event.target.id.startsWith("saveAtendee")){

        

        // Make a new object representation of a note
        //+ in front of even looks for intiger
        //the id is pulled from the save changes button
        const editedAtendee = {
            id: +event.target.id.split("--")[1],
            name: document.querySelector(`#name`).value,
            age: document.querySelector(`#age`).value,
            favoriteFish: document.querySelector(`#favoriteFish`).value,
            favoriteFood: document.querySelector(`#favoriteFood`).value,
            picture: document.querySelector(`#picture`).value,
            handed: document.querySelector(`#handed`).checked
        }
        //clear out edit form
        document.querySelector(`#name`).value = ""
        document.querySelector(`#age`).value = ""
        document.querySelector(`#favoriteFish`).value = ""
        document.querySelector(`#favoriteFood`).value = ""
        document.querySelector(`#picture`).value = ""
        document.querySelector(`#handed`).checked = false
        // Send to json-server and refresh the list
        updateNote(editedAtendee).then(AtendeeList)

    }
})