import { useState } from "react";

const Home = () => {
    // let name = 'Nazanin';
    const [skills, setskills] = useState(
        [
            {title: 'HTML', body: 'lorem ipsum ...', class: 'Front-end', id: 1},
            {title: 'CSS', body: 'lorem ipsum ...', class: 'Front-end', id: 2},
            {title: 'JS', body: 'lorem ipsum ...',class: 'Front-end', id: 3},
            {title: 'React.JS', body: 'lorem ipsum ...',class: 'Front-end', id: 4}
        ]
    );
    return (  
        <div className="home">
            {skills.map((skill) => (
                <div className="skill-preview" key={skill.id}>
                    <h2>{skill.title}</h2>
                    <p>Skill Class: {skill.class}</p>
                </div>
            ))}
        </div>
    );
}
 
export default Home;