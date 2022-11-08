import './App.css';
import MarsAnimation from './marsAnimation/marsAnimation'
import Info from './info_card/info';

function App() {
  return (
    <div className="App">
      
    
    <div className="grid-container">
    <div className="grid-item"><Info/></div>
    <div className="grid-item"><MarsAnimation/></div>
 

    </div>
   

 
    </div>
  );
}

export default App;
