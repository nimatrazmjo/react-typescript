import React, { useState } from "react"
import InviteListItem from "./invite-list-item.component";

const InviteList: React.FC = () => {
    const [name, addName] = useState('');
    const [guests, addGuests] = useState<string[]>([]);

    const addGuestToList = () => {
        addGuests([...guests, name]);
        addName('');
    }
    return (
        <div className="invite-list">
            {guests.map(guest => <InviteListItem  key={guest} name={guest} />)}

            <input type="text" onChange={(e) => addName(e.target.value)} value={name} />

            <input type="button" onClick={addGuestToList} value="Add" />
        </div>
    )
}

export default InviteList;