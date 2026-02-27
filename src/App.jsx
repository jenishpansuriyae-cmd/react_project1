  import './App.css';
  import Navbar from './components/Navbar';
  import Textform from './components/Textform';
  import About from './components/About';
  import Alert from './components/Alert';
   import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import React,{useState} from 'react';

  function App() {

    const [alert,setAlert] = useState();
    const [mode, setMode] = useState('light');

    const showAlert = (message,type) =>{
        setAlert({
          msg: message,
          type: type
        });
        setTimeout(()=>{
          setAlert(null);
        },1500);
    }

    const removeBodyClasses = ()=>{
      document.body.classList.remove('bg-light');
      document.body.classList.remove('bg-dark');
      document.body.classList.remove('bg-warining');
      document.body.classList.remove('bg-success');
      document.body.classList.remove('bg-danger');
      document.body.classList.remove('bg-primary');
    }

    const toggleMode = (cls)=>{
      removeBodyClasses();
      document.body.classList.add('bg-'+cls)
      console.log(cls)
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#042743';
        showAlert("Dark mode has been enabled","success");
        // document.title = 'TextUtils - Dark Mode';
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enabled","success");
        // document.title = 'TextUtils - Light Mode';
      }
    }

    return (
  
       <Router>
         <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/> 
         <Alert alert={alert}/>
        
         <div className="container">
           <Routes>
             <Route path="/about" element={<About/>}/>
             <Route path="/" element={
               <Textform 
                 showAlert={showAlert} 
                 heading="Try TextUtils - Word Counter, Character Counter , Remove extra spaces" 
                 mode={mode} 
               />
             }/>
           </Routes>
        </div>
       </Router>
   );
}
  export default App;