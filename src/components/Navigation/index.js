import react from "react";

function Nav() {

    const categories = [
                  { name: 'About Me', description: 'Photos of grocery stores, food trucks, and other commercial projects' },
                  { name: 'Portfolio', description: 'Portraits of people in my life' },
                  { name: 'Contact Me', description: 'Delicious delicacies' },
                  { name: 'Resume', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' }
    ]

return (
<nav>
    <ul className="flex-row">
    {categories.map((category) => (
        <li>{category.name}</li>
    ))}
</ul>
</nav>


)
}

export default Nav;