import React, { useEffect, useRef, useState } from "react"
import { IUser } from "../interfaces/user.interface";
import USERS from "../state/User.data"

const SearchUser: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [name, setName] = useState('');
    const [user, setUser] = useState<IUser | undefined>();

    const Click = () => {
        const foundUser = USERS.find(user => user.name ==name);
        setUser(foundUser);
    }


    useEffect(()=>{
        if (!inputRef.current) {
            return;
        }
        inputRef.current.focus();
    },[]);

    return (
        <div className="search-user">
            <input
            ref={inputRef}
            type="text" name="search" value={name} id="search" onChange={e => setName(e.target.value)} />
            <button onClick={Click}> Search </button>

            <h3>User Details</h3>
            <div> {user && user.name}</div>
            <div> {user && user.age}</div>
        </div>
    )
}

export default SearchUser;