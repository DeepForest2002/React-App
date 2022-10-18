import './App.css';
import Navbar from './Components/Navbar';
import Textforms from './Components/Textforms';
function App() {
  return (
   <>
     <Navbar title="TextUtils" AboutText="About Textutils" Contact="Contact Us"/> 
     <div className="container">
      <Textforms heading="Enter the text to analyze"/>
     </div>
   </>
  
  );
}

export default App;
