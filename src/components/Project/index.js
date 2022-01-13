import react from "react";

const Project = () => {
    
    const projectlist = [
        { name: 'Sputtle Music App'},
        { name: 'Nutrivalue'},
        { name: 'Mern Thoughts Blog'},
        { name: 'Tech it Ralph'},
        { name: 'Book Search Engine'},
        { name: 'Photo-Snap gallery'},
        { name: 'Pizza Builder'},
        { name: 'Just Tech News'},
        { name: 'Vault-tec PWA'},
        { name: 'The Gathering ORM'},
        { name: 'Note Taker Achievement-get'},
        { name: 'Art of Recruiter Programming'},
        { name: 'Forecast Brought to you'},
        { name: 'Day Schedule Planer'},
        { name: 'TaskMaster'},
        { name: 'Coding Quiz'},
        { name: 'Password Generator'},

]
    
    
    
    return (
        <ul className="flex-row">
        {projectlist.map((project) => (
            <li>{project.name}</li>
        ))}
    </ul>

    )
}

export default Project;