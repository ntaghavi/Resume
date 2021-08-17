const SkillList = ({skills, title}) => {
    // const skills = props.skills;
    // const title = props.title;
    return ( 
        <div className="skill-list">
            <h2>{title}</h2>
            {skills.map((skill) => (
                <div className="skill-preview" key={skill.id}>
                    <h2>{skill.title}</h2>
                    <p>Skill Class: {skill.class}</p>
                </div>
            ))}
        </div>
    );
}
 
export default SkillList;