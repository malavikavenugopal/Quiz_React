
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Quiz from './Components/Quiz';
import Start from './Components/Start';



function App() {
  return (
    <div className="App">
       <Routes>
       
       <Route path={'/'} element={<Start/>}/>
      
       <Route path={'/Quiz'} element={<Quiz/>} /> 
       </Routes>
       
    </div>
  );
}

export default App;
