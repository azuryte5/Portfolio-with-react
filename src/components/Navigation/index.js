import React from 'react'

function Nav(props) {

const {currentSection, handleSectionChange, sections} = props
const tabs = ['About', 'Portfolio', 'Contact Me', 'Resume'];


return (
<nav>
<ul className="flex-row">
  {tabs.map(tab => (
      <li className={`nav-item`}
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