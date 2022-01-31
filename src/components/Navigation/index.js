import React from 'react'
import { Navbar, Container} from 'react-bootstrap';

function Nav(props) {

const {currentSection, handleSectionChange} = props
const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];


return (
<Navbar className='navbar' collapseOnSelect expand="lg" variant="dark">
  <Container>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <ul className="flex-row">
   {tabs.map(tab => (
      <li className={`nav-item nav-link`}
      key={tab}
      onClick={() => handleSectionChange(tab)}
      className={
        currentSection === tab ? 'nav-link active' : 'nav-link'
      }
      > {tab}
    </li>
  ))}
</ul>
  </Navbar.Collapse>
  </Container>
</Navbar>
)}

export default Nav;