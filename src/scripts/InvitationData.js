let atendeesArray = []

export const useAtendee = () => {
    return atendeesArray.slice()
}

//get data from database
export const getAtendee = () => {
    return fetch(`http://localhost:8088/atendee`) 
        .then(dirtyAtendee => dirtyAtendee.json()) 
        .then(cleanAtendee => {
            atendeesArray = cleanAtendee
        })
}

//save data to database
export const saveAtendee = (atendee) => {
    return fetch(`http://localhost:8088/atendee`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(atendee)
    }) 
    .then(getAtendee)
    }

   //deletNote fetch call. Needs to target ID
export const deleteAtendee = atendeeId => {
    return fetch(`http://localhost:8088/atendee/${atendeeId}`, {
        method: "DELETE"
    })
    .then(getAtendee)
    
}

    //updateNote fetch call
export const updateNote = atendee => {

    return fetch(`http://localhost:8088/atendee/${atendee.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(atendee)
    })
    .then(getAtendee)

}
