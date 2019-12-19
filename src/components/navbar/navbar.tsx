import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import { Link } from 'react-router-dom';

const Example = (props:any) => {
  return (
    <div>
      <Navbar color="light" light expand="md">
          <Nav className="mr-auto" navbar>
            <NavItem>
            <NavLink><Link to='/users'>Users</Link></NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Expense Reimbursement System</NavbarText>
      </Navbar>
    </div>
  );
}

export default Example;