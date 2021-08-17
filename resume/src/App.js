import './App.css';

function App() {

  const title = 'Welcome to my Resume!';
  const fname = 'Nazanin', lname = 'Taghavi';
  const jobs = ['Front-end Developer' , 'AI Engineer'];
  return (
    <div className="App">
     <div className="content">
       <h1>{ title }</h1>
       <h3>{fname } {lname}</h3>
       <p>{jobs[0]} & {jobs[1]}</p>

     </div>
    </div>
  );
}

export default App;
