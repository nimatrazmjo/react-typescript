import React from "react"
import { IInviteList } from "../interfaces/invite-list.interface"

const InviteListItem:React.FC<IInviteList> = ({name}) =>(<li>{name}</li>);

export default InviteListItem;