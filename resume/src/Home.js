import { useState } from "react";
import SkillList from "./SkillList";

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
         <SkillList skills={skills} title="My Skills"/>   
        </div>
    );
}
 
export default Home;