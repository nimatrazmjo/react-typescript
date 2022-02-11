import { Component, ReactNode } from "react";
import { IUser } from "../interfaces/user.interface";

interface SearchNameProps {
    users: IUser[]
}

interface SearchNameState {
    name: string,
    user:  IUser | undefined
}

class SearchName extends Component<SearchNameProps> {

    state: SearchNameState = {
        name: '',
        user: undefined
    }

    Click = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const foundUser = this.props.users.find(user => user.name ==this.state.name);
        this.setState({user: foundUser});
        
    }

    render(): ReactNode {

        return (
            <div className="search-user">
            <input type="text" name="search" value={this.state.name} id="search" onChange={e => this.setState({name:e.target.value})} />
            <button onClick={this.Click}> Search </button>

            <h3>User Details</h3>
            <div> {this.state.user && this.state.user.name}</div>
            <div> {this.state.user && this.state.user.age}</div>
        </div>
        )
    }
}

export default SearchName;