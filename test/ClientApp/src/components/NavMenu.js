import React from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';

export default props => (
  <Navbar inverse fixedTop fluid collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to={'/'}>ArchPoint PHR</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>

        <LinkContainer to={'/'} exact>
          <NavItem>
            <Glyphicon glyph='home' /> Home
          </NavItem>
        </LinkContainer>

        <LinkContainer to={'/createNewHealthRecord'}>
          <NavItem>
            <Glyphicon glyph='th-list' /> Create New Health Record
          </NavItem>
        </LinkContainer>

        <LinkContainer to={'/medHistory'}>
          <NavItem>
            <Glyphicon glyph='th-list' /> Medical History
          </NavItem>
        </LinkContainer>

        <LinkContainer to={'/medicalCard'}>
          <NavItem>
             <Glyphicon glyph='th-list' /> Medical Quick Card
          </NavItem>
        </LinkContainer>

        <LinkContainer to={'/personalInfo'}>
          <NavItem>
              <Glyphicon glyph='th-list' /> Personal Information
          </NavItem>
        </LinkContainer>

        <LinkContainer to={'/tellFriend'}>
          <NavItem>
             <Glyphicon glyph='th-list' /> Tell-A-Friend
          </NavItem>
        </LinkContainer>

        <LinkContainer to={'/uploadMedData'}>
           <NavItem>
              <Glyphicon glyph='th-list' /> Upload Medical Records
          </NavItem>
        </LinkContainer>

      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
