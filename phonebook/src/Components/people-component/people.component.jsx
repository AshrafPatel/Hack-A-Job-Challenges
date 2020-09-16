import React from "react";
import "./people.component.css"

const People = ({contact}) => {
    return (
        <div className="card">
            <img src={`https://randomuser.me/api/portraits/${contact.gender}/${contact.ruid}.jpg`} alt="Avatar"/>
            <div className="container">
                <h4><b>{contact.name}</b></h4>
                <h4><i>{contact.phone_number}</i></h4>
                <p>{contact.address}</p>
            </div>
        </div>
    )
}

export default People