import { User } from '../../models/user'
import { RouteComponentProps } from 'react-router'
import { getUserById } from '../../remote/user-clients/user'
import { UserByIdDisplayRowComponent } from './users-display-row/UserByIdDisplayRowComponent'
import NavBar from '../navbar/navbar'
import { Table } from 'reactstrap'
import React from 'react'

interface IUsersDisplayProps extends RouteComponentProps {
    user: User
}

interface IUserDisplayState {
    User: User[]
}

export class UserByIdDisplayComponent extends React.Component<any, IUserDisplayState>{
    constructor(props: any) {
        super(props)
        this.state = {
            User: []
        }
    }

    async componentDidMount() {
        try {
            let u = await getUserById()
            if (u.status === 200) {
                this.setState({
                    ...this.state,
                    User: u.body
                })
            }
        } catch (e) {
            console.log(e);

        }
    }

    render() {
        let rows = this.state.User.map((e) => {
            return <UserByIdDisplayRowComponent user={e} key={'user ' + e.userId} />
        })
        return (
            <div>
                <nav>
                    <NavBar />
                </nav>
                <Table bordered color='danger'>
                    <thead>
                        <tr>
                            <td>Username</td>
                            <td>Email</td>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Role</td>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </Table>
            </div>
        )
    }
}