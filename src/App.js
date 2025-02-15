//import './App.css';
import Home from './components/Home';
import NavBar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <NavBar/>
        <Home/>

      </header>
    </div>
  );
}

export default App;
