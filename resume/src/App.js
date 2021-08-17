import Navbar from './Navbar';
import Home from './Home';

function App() {

  const title = 'Welcome to my Resume!';
  // const fname = 'Nazanin', lname = 'Taghavi';
  // const jobs = ['Front-end Developer' , 'AI Engineer'];
  return (
    <div className="App">
      <Navbar/>
     <div className="content">
     <Home/>
     </div>
    </div>
  );
}

export default App;
