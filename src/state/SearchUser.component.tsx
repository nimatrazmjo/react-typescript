import React, { useState } from "react"
import { IUser } from "../interfaces/user.interface";
import USERS from "./User.data"

const SearchUser: React.FC = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState<IUser | undefined>();

    const Click = () => {
        const foundUser = USERS.find(user => user.name ==name);
        setUser(foundUser);
    }
    return (
        <div className="search-user">
            <input type="text" name="search" value={name} id="search" onChange={e => setName(e.target.value)} />
            <button onClick={Click}> Search </button>

            <h3>User Details</h3>
            <div> {user && user.name}</div>
            <div> {user && user.age}</div>
        </div>
    )
}

export default SearchUser;