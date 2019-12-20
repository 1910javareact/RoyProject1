import React from 'react'
import { Table } from 'reactstrap'
import { RouteComponentProps } from 'react-router'
import { Reimbursement } from '../../models/reimbursement'
import { getAllReimbursements } from '../../remote/reimbursement-client/reimbursement'
import { ReimbursementsDisplayRowComponent } from './reimbursements-display-row/ReimbursementsDisplayRowComponent'
import NavBar from '../navbar/navbar'

interface IReimbursementsDisplayProps extends RouteComponentProps {
    reimbursement: Reimbursement
}

interface IReimbursementsDisplayState {
    allReimbursements: Reimbursement[]
}

export class ReimbursementsDisplayComponent extends React.Component<any, IReimbursementsDisplayState>{
    constructor(props: any) {
        super(props)
        this.state = {
            allReimbursements: []
        }
    }

    async componentDidMount() {
        try {
            let r = await getAllReimbursements()
            if (r.status === 200) {
                this.setState({
                    ...this.state,
                    allReimbursements: r.body
                })
            }
        } catch (e) {
            console.log(e);

        }
    }

    render() {
        let rows = this.state.allReimbursements.map((e) => {
            return <ReimbursementsDisplayRowComponent reimbursement={e} key={'reimbursement ' + e.reimbursementId} />
        })
        return (
            <div>
                <nav>
                    <NavBar />
                </nav>
                <Table bordered color='danger'>
                    <thead>
                        <tr>
                            <td>Author</td>
                            <td>Description</td>
                            <td>Amount</td>
                            <td>Date Submitted</td>
                            <td>Date Resolved</td>
                            <td>Resolver</td>
                            <td>Status</td>
                            <td>Type</td>
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