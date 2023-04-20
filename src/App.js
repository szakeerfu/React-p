import logo from './logo.svg';
import './# App.css'
import { Button } from './Components/Button';
import { ReactBenifits } from './Components/ReactBenifits';
 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
 
        <ReactBenifits></ReactBenifits>
        <Button/> 
        
        
      </header>
    </div>
  );
}

export default App;
