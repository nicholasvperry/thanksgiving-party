import { AtendeeList } from "./InvitationList.js";
import { deleteAtendee } from "./InvitationData.js";
import { atendeeEditForm } from "./InivitationEditForm.js";

//card that is printed with attendees. Checkmark example
export const Atendee = (singleAtendeeObject) => {
    return `
    <section class="entry card">
    <img src="${singleAtendeeObject.picture}">
    <div class="jName">Name: ${singleAtendeeObject.name}</div>
    <div class="jAge">Age: ${singleAtendeeObject.age}</div>
    <div class="jfavoriteFish">Favorite Fish: ${singleAtendeeObject.favoriteFish}</div>
    
    ${singleAtendeeObject.handed ? 
        `<p class="guest-righty">Righty</p>`
        :
        `<p class="guest-righty">Lefty</p>`}
    
    <button id="deleteAtendee--${singleAtendeeObject.id}">Delete</button>
    <button id="edit--${singleAtendeeObject.id}">Edit</button>

    </section>   
    `
}

//Event listener listens for delete button to be clicked.
//Button has object id which is passed to this function.
//After delete happens call AttendeeList
const deleteHub = document.querySelector("body") 
deleteHub.addEventListener("click", (deleteObject) => {
   
  if (deleteObject.target.id.startsWith("deleteAtendee")) {
    const idToDelete = deleteObject.target.id.split("--")[1]
    deleteAtendee(idToDelete)
    .then(AtendeeList)

  }
});

//Event listener listens for edit button to be clicked.
//Button has object id which is passed to this function.
const editHub = document.querySelector("body")
editHub.addEventListener("click", (editObject) => {
    if (editObject.target.id.startsWith("edit")) {
   
    const noteId = +editObject.target.id.split("--")[1]
    atendeeEditForm(noteId)}
})