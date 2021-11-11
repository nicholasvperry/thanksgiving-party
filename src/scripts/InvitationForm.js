import { saveAtendee } from "./InvitationData.js"
import { AtendeeList, foodSelect } from "./InvitationList.js"

const contentTarget = document.querySelector(`#listForm`)

//to save age as int make type number in form and add + before document in newAtendee
//right handed saving as string now boolean
export const InvitationForm = () => {
    contentTarget.innerHTML = `

    <h2>Inviting</h2>
    <div action="name">
        <input id="name" type="text" placeholder="Name">
    </div>

    <div action="age">
        <input id="age" type="number" placeholder="Age">
    </div>

<div action="favoriteFish">
    <input id="favoriteFish" type="text" placeholder="Favorite Fish">
</div>


<div action="favoriteFood">
<input id="favoriteFood" type="text" placeholder="Favorite Food">
</div>

<div action="picture">
    <input id="picture" type="text" placeholder="Picture URL">
</div>

<div action="handed">
    <label for="handed">Right Handed:</label>
    <input id="handed" type="checkbox" placeholder="Guest's Handed">        
</div>

<button id="Save">Save</button>

`

}


//listen for save click and add date into the json
contentTarget.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "Save") {
        
        
        const newAtendee = {
            name: document.querySelector(`#name`).value,
            age: +document.querySelector(`#age`).value,
            favoriteFish: document.querySelector(`#favoriteFish`).value,
            handed: document.querySelector(`#handed`).checked,
            picture: document.querySelector(`#picture`).value,
            favoriteFood: document.querySelector(`#favoriteFood`).value
        } 
        document.querySelector(`#name`).value = ""
        document.querySelector(`#age`).value = ""
        document.querySelector(`#favoriteFish`).value = ""
        document.querySelector(`#handed`).checked = false
        document.querySelector(`#picture`).value = ""
        document.querySelector(`#favoriteFood`).value = ""

        saveAtendee(newAtendee)
        .then(AtendeeList)
        .then(foodSelect)
    }
})
