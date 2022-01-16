import React from 'react'

function Nav(props) {

const {currentSection, handleSectionChange} = props
const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];


return (
<nav className='navbar'>
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
</nav>
)
}

export default Nav;