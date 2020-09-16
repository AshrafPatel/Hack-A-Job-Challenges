import React from "react";
import People from "../people-component/people.component";
import { v4 as uuidv4 } from 'uuid';
import "./people-container.component.css"

function compareObjects(object1, object2, key) {
    const obj1 = object1[key]
    const obj2 = object2[key]
  
    if (obj1 < obj2) {
      return -1
    }
    if (obj1 > obj2) {
      return 1
    }
    return 0
}

const PeopleContainer = ({contacts, searchText, sortType, handleSort}) => {
    let updatedList = contacts.filter((item) => {
        return Object.keys(item).some(key => item[key].toString().toLowerCase().search(searchText.toLowerCase()) !== -1);
    });
    let sorted = updatedList.sort(((contact1, contact2) => {
        return compareObjects(contact1, contact2, sortType)
    }))
    
    return (
    <div className="peoples-container">
        {sorted.map((contact, idx) => {
            return (<People key={uuidv4()} contact={contact} ruid={idx}/>)
        })}
    </div>
    )
}

export default PeopleContainer