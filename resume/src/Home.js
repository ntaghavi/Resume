const Home = () => {
    const clickHandle = () =>{
        console.log('Hello');
    }
    return (  
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={clickHandle}>Click me!</button>
        </div>
    );
}
 
export default Home;