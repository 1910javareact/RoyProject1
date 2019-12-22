import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavbarText
} from 'reactstrap';
import { Link } from 'react-router-dom';

const NavBar = (props:any) => {
  return (
      <Navbar color="light" light expand="md">
          <Nav className="mr-auto" navbar>
          <NavItem>
            <Link to='/'>Home|</Link>
            </NavItem>
            <NavItem>
            <Link to='/users'>Users| </Link>
            </NavItem>
            <NavItem>
            <Link to='/update-user'>Update User| </Link>
            </NavItem>
            <NavItem>
            <Link to='/reimbursements'>Reimbursements| </Link>
            </NavItem>
            <NavItem>
            <Link to='/post-reimbursement'>New Reimbursement</Link>
            </NavItem>
          </Nav>
          <NavbarText>Expense Reimbursement System</NavbarText>
      </Navbar>
  );
}

export default NavBar;