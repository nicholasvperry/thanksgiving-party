import { useAtendee, getAtendee } from "./InvitationData.js";
import { Atendee } from "./InvitationCard.js";




//Atendee list makes the list of atendees coming
export const AtendeeList = (wordToFilter) => {
    //Target div class attending
    const contentTarget = document.querySelector("#attending")
    
    contentTarget.innerHTML = ""

    getAtendee()
    .then(() => {
        let atendeeArray = useAtendee()

        //filter attendees to match the word selected in the filter
        if(wordToFilter) {
        atendeeArray = atendeeArray.filter((singleAtendeeObject) => {
            return singleAtendeeObject ? singleAtendeeObject.favoriteFood === wordToFilter : false
        })
    }
        //makes html string to insert in to DOM
        let atendeeHTML = ""
        //Loop and find each attendee
        //if filter inabled finds each attendee that matches filter
        atendeeArray.forEach((singleAtendeeObject) => {
            atendeeHTML += Atendee(singleAtendeeObject)
        })
        //insert html string in to target div
        contentTarget.innerHTML = `
        ${atendeeHTML}`
    })
    
}

//make food filter
export const foodSelect = () => {
    //target div to 
    const atendeeTarget = document.querySelector("#filter")
    getAtendee()
    .then(() => {
        const atendees = useAtendee()
        render (atendees, atendeeTarget)
    })
}

//filter through favorite foods and only print the value once with the if statement
const render = (atendeeCollection, atendeeTarget ) => {
    //uniqueObj is used only to filter array to not show duplicate values
    const uniqueObj = {}
    atendeeTarget.innerHTML = `
    <select class="dropdown" id="atendeeSelect">
<option value="0">Please Select Food</option>
    ${atendeeCollection.map((atendeeObj) => {
        const atendee = atendeeObj.favoriteFood
    
    //! says if the value is not there then add it to the list. Give each object a value starting at 1
    if (!uniqueObj[atendee]){
        uniqueObj[atendee] = 1
        return `<option>${atendee}</option>`
    }
       
})
}
</select> `
}

const eventHub = document.querySelector("body")

eventHub.addEventListener("change", (eventObj) => {
    if(eventObj.target.id === "atendeeSelect") {
        AtendeeList(eventObj.target.value)
    }
})