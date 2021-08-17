import { useState } from "react";
import SkillList from "./SkillList";

const Home = () => {
    // let name = 'Nazanin';
    const [skills, setskills] = useState(
        [
            {title: 'HTML', body: 'lorem ipsum ...', class: 'Web Development', id: 1},
            {title: 'CSS', body: 'lorem ipsum ...', class: 'Web Development', id: 2},
            {title: 'JS', body: 'lorem ipsum ...',class: 'Web Development', id: 3},
            {title: 'React.JS', body: 'lorem ipsum ...',class: 'Web Development', id: 4},
            {title: 'Python', body: 'lorem ipsum ...', class: 'AI', id: 5},
            {title: 'Machine Learning', body: 'lorem ipsum ...', class: 'AI', id: 6},
            {title: 'Deep Learning', body: 'lorem ipsum ...',class: 'AI', id:7},
            {title: 'Data Mining', body: 'lorem ipsum ...',class: 'AI', id:8},
            {title: 'SEO', body: 'lorem ipsum ...',class: 'Web Development', id: 9}
        ]
    );
    return (  
        <div className="home">
         <SkillList skills={skills.filter((skill)=>skill.class==='Web Development')} title="My Web Skills"/> 
         <SkillList skills={skills.filter((skill)=>skill.class==='AI')} title="My AI Skills"/>   
        </div>
    );
}
 
export default Home;