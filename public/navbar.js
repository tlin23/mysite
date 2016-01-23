var Navbar = require('react-bootstrap/lib/Navbar');
var Nav = require('react-bootstrap/lib/Nav');
var NavItem = require('react-bootstrap/lib/NavItem');
var NavDropdown = require('react-bootstrap/lib/NavDropdown');
var MenuItem = require('react-bootstrap/lib/MenuItem');
var ModalComponent = require('./modal');

var NavbarComponent = React.createClass({
  render: function(){
    return (
      <Navbar fixedTop>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Resume</NavItem>
            <NavDropdown eventKey={2} title="Projects" id="basic-nav-dropdown">
              <MenuItem eventKey={2.1} href='https://tizzite-chat.firebaseapp.com/'>Tizzite</MenuItem>
              <MenuItem eventKey={2.1}>Task Buddy (Pending)</MenuItem>
              <MenuItem eventKey={2.1}>Graffiki   (Pending)</MenuItem>
            </NavDropdown>
            <NavItem eventKey={3} href="#">Contact</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
})

module.exports = NavbarComponent;