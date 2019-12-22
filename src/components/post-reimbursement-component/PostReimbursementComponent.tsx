import React, { SyntheticEvent } from 'react'
import { Container, Card, TextField, Button } from '@material-ui/core'
import NavBar from '../navbar/navbar'
import { submitReimbursement } from '../../remote/reimbursement-client/reimbursement'

export class PostReimbursementComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            updated: false,
            author: 0,
            amount: 0,
            dateSubmitted: 0,
            description: '',
            status: 0,
            type: 0
        }
    }
    postAuthor = (e: any) => {
        this.setState({
            ...this.state,
            author: e.target.value
        })
    }
    postAmount = (e: any) => {
        this.setState({
            ...this.state,
            amount: e.target.value
        })
    }
    postDateSubmitted = (e: any) => {
        this.setState({
            ...this.state,
            dateSubmitted: e.target.value
        })
    }
    postDescription = (e: any) => {
        this.setState({
            ...this.state,
            description: e.target.value
        })
    }
    postStatus = (e: any) => {
        this.setState({
            ...this.state,
            status: e.target.value
        })
    }
    postType = (e: any) => {
        this.setState({
            ...this.state,
            type: e.target.value
        })
    }
    postReimbursement = async (e: SyntheticEvent) => {
        e.preventDefault()
        try {
            let u = await submitReimbursement(0, this.state.author, this.state.amount, this.state.dateSubmitted, 1, this.state.description, 1, this.state.status, this.state.type)
            if (u.status === 200) {
                this.setState({
                    ...this.state,
                    updated: true
                })
            } else {
                this.setState({
                    ...this.state,
                    updated: false
                })
            }
        } catch (e) {
            console.log(e);

        }


    }

    render() {
        let message = () => {
            if (this.state.updated) {
                return <p>Reimbursement Posted</p>
            }
        }
        return (
            <div>
            <nav>
            <NavBar />
        </nav>
            <Container component="main" maxWidth="xs">
                
                <Card>
                    <form onSubmit={this.postReimbursement} className="updateComponent" noValidate autoComplete="off">
                        <TextField value={this.state.author} onChange={this.postAuthor} id="standard-basic-1" label="Author ID" />
                        <TextField value={this.state.amount} onChange={this.postAmount} id="standard-basic-2" label="amount" />
                        <TextField value={this.state.dateSubmitted} onChange={this.postDateSubmitted} id="standard-basic-3" label="date submitted" />
                        <TextField value={this.state.description} onChange={this.postDescription} id="standard-basic-4" label="description" />
                        <TextField value={this.state.status} onChange={this.postStatus} id="standard-basic-5" label="status" />
                        <TextField value={this.state.type} onChange={this.postType} id="standard-basic-6" label="type" />
                        <br />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="inherit"
                            className='{classes.submit}'
                        >
                            Post Reimbursement
                        </Button>
                    </form>
                    {message()}
                </Card>
            </Container></div>
        )
    }
}