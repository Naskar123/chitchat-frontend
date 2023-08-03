import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import ChatPage from './Pages/Chatpage';





function App() {
  return (
    
    <div className="App">
      <Routes>
      <Route path='/' element={<Homepage/>} exact></Route>
      <Route path='/chats' element={<ChatPage/>}/>  
      </Routes> 
    </div>
   
  );
}

export default App;
