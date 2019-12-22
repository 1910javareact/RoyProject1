import React from 'react'
import { User } from '../../../models/user';

interface IUserByIdDisplayRowProps{
    user: User
}

export const UserByIdDisplayRowComponent: React.FC<IUserByIdDisplayRowProps> = (props) => {
    return (
        <tr>
            <td>{props.user.username}</td>
            <td>{props.user.email}</td>
            <td>{props.user.firstName}</td>
            <td>{props.user.lastName}</td>
            <td>{props.user.role}</td>
        </tr>
    )
}