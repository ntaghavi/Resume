import { useState } from "react";

const Home = () => {
    // let name = 'Nazanin';
    const [name, setName] = useState('Nazanin');
    const clickHandle = () =>{
      setName('Taghavi');
    }
    return (  
        <div className="home">
            <h2>Homepage</h2>
            <p>{name}</p>
            <button onClick={clickHandle}>Click me!</button>
        </div>
    );
}
 
export default Home;