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

    render(): ReactNode {

        return (
            <div>

                {this.props.users}
                {this.state.name}
            </div>
        )
    }
}

export default SearchName;