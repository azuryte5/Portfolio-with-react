import React from "react";
import { Card, Button } from 'react-bootstrap';

const Project = () => {
    
    const projectList = [
        { name: 'Sputtle Music App', link: 'https://github.com/azuryte5/music-battle-spotify'},
        { name: 'Nutrivalue', link: 'https://github.com/azuryte5/Nutrition-Sustenance-Value'},
        { name: 'Mern Thoughts Blog', link: 'https://github.com/azuryte5/MERN-deep-thoughts'},
        { name: 'Tech it Ralph', link: 'https://github.com/azuryte5/Tech-It-Ralph'},
        { name: 'Book Search Engine', link: 'https://github.com/azuryte5/MERN-deep-thoughts'},
        { name: 'Photo-Snap gallery', link: 'https://github.com/azuryte5/photo-port-snap'},
        { name: 'Pizza Builder', link: 'https://github.com/azuryte5/nosql-pizza-hunt'},
        { name: 'Vault-tec PWA', link: 'https://github.com/azuryte5/vault-tec-PWA'},
        { name: 'The Gathering ORM', link: 'https://github.com/azuryte5/the-gathering-ORM'},
        { name: 'Note Taker Achievement-get', link: 'https://github.com/azuryte5/note-taker-achievement-GET'},
        { name: 'Art of Recruiter Programming', link: 'https://github.com/azuryte5/art-of-recruiter-programming'},
        { name: 'Forecast Brought to you', link: 'https://github.com/azuryte5/forecast-brought-to-you-6'},
        { name: 'Deep Space Manager', link: 'https://github.com/azuryte5/deep-space-manager'},
        { name: 'Coding Quiz', link: 'https://github.com/azuryte5/Coding-Quiz-IV'},
        { name: 'Password Generator', link: 'https://github.com/azuryte5/Assignment3-password'}
]    
    return (
    <div>
    {projectList.map(project => {
    return (
    <Card className="bg-dark text-white" style={{ width: '18rem'}} border="success">
        <Card.Body>
        <Card.Img src="https://user-images.githubusercontent.com/85147307/149609304-ad5a3969-c1d8-4bee-b98d-145f69c66f71.jpg" alt="Card image" />
            <Card.ImgOverlay> 
            <Card.Title key={project.name}>{project.name}</Card.Title>
            <Card.Subtitle>Subtitle</Card.Subtitle>
            <Button variant="primary">Deployed App</Button>
            <Button variant="primary">GitHub</Button>
            <Card.Link href="#">Deployed App</Card.Link>
            <Card.Link href="#">GitHub Repo</Card.Link>
            </Card.ImgOverlay>
        </Card.Body>
    </Card>)})    
    }
    </div>
    )
}


export default Project;