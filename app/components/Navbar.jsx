import React from 'react'
import { Nav, NavItem, Navbar, NavDropdown, MenuItem, FormGroup, FormControl, Button } from 'react-bootstrap'
import { Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'

export default function() {

  return (
    <Navbar collapseOnSelect fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/home">Planet Academy</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav activeKey={1}>
          <LinkContainer to="/campuses">
            <NavItem eventKey={1}>Our Campuses</NavItem>
          </LinkContainer>
          <LinkContainer to="/students">
            <NavItem eventKey={2}>Our Students</NavItem>
          </LinkContainer>
          <LinkContainer to="/disciplines">
            <NavItem eventKey={2}>By Discipline</NavItem>
          </LinkContainer>
        </Nav>
        <Nav pullRight>
          <NavDropdown eventKey={3} title="Admin" id="basic-nav-dropdown">
            <LinkContainer to="/admin/campus">
              <MenuItem eventKey={3.1}>Add/Edit Campus</MenuItem>
            </LinkContainer>
            <LinkContainer to="/admin/student">
              <MenuItem eventKey={3.2}>Add/Edit Student</MenuItem>
            </LinkContainer>
          </NavDropdown>
        </Nav>
        <Navbar.Form pullRight>
          <FormGroup>
            <FormControl type="text" placeholder="Search" />
          </FormGroup>
          {' '}
          <Button type="submit">Submit</Button>
        </Navbar.Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

