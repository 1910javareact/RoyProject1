import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import { Link } from 'react-router-dom';

const NavBar = (props:any) => {
  return (
    <div>
      <Navbar color="light" light expand="md">
          <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink><Link to='/'>Home</Link></NavLink>
            </NavItem>
            <NavItem>
            <NavLink><Link to='/users'>Users</Link></NavLink>
            </NavItem>
            <NavItem>
            <NavLink><Link to='/reimbursements'>Reimbursements</Link></NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Expense Reimbursement System</NavbarText>
      </Navbar>
    </div>
  );
}

export default NavBar;