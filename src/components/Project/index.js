import React from "react";
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const Project = () => {
    
    const projectList = [
        { name: 'Sputtle Music App', link: 'https://github.com/azuryte5/music-battle-spotify', image:'https://user-images.githubusercontent.com/85147307/149671331-4c47a551-9024-4890-9f69-c198e5403845.png'},
        { name: 'Nutrivalue', link: 'https://github.com/azuryte5/Nutrition-Sustenance-Value', image:'https://user-images.githubusercontent.com/85147307/149609594-266b3b58-5ad4-443a-a6cb-0da8a3ced07e.png'},
        { name: 'Tech it Ralph', link: 'https://github.com/azuryte5/Tech-It-Ralph', image:'https://user-images.githubusercontent.com/85147307/149609655-39cf6c72-7ecc-41f5-aa96-d8e4bec8cb99.png'},
        { name: 'Vault-tec PWA', link: 'https://github.com/azuryte5/vault-tec-PWA', image:'https://user-images.githubusercontent.com/85147307/149609610-2029cbad-b38c-4d0e-bebd-77da3e83403d.png'},
        { name: 'Art of Recruiter Programming', link: 'https://github.com/azuryte5/art-of-recruiter-programming', image:'https://user-images.githubusercontent.com/85147307/149671175-acf4f25d-5ada-4077-9744-4c518a4fe9fe.png'},
        { name: 'Deep Space Manager', link: 'https://github.com/azuryte5/deep-space-manager', image:'https://user-images.githubusercontent.com/85147307/149609664-94b7ab92-7909-43f3-9f91-da445f24d2fd.png'},

]    
    return (
    <Container className="justify-content-md-center fluid" >
        <Row>
    {projectList.map(project => {
    return (
    <Col>
    <Card className="bg-dark text-white fluid" style={{ width: '20rem'}} border="success" key={project.name}>
        <Card.Body>
        <Card.Img src={project.image} alt="Card image" height="100%" />
            <Card.ImgOverlay> 
            <Card.Title >{project.name}</Card.Title>
            <Card.Subtitle>Subtitle</Card.Subtitle>
            <Button variant="warning">Deployed App</Button>
            <Button variant="primary" href={project.link} target='_blank'>GitHub</Button>
            <Card.Link>Deployed App</Card.Link>
            <Card.Link href={project.link} target='_blank'>GitHub Repo</Card.Link>
            </Card.ImgOverlay>
        </Card.Body>
    </Card>
    </Col>
    )})
    }
    </Row>
    </Container>
    )
}


export default Project;