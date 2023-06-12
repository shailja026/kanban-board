
// import './App.css';
// import Navbar from './component/Home/Navbar/Navbar';


import './App.css';

import { Provider } from 'react-redux';
import store from './store';


 import Main from './component/Home/MainPage/Main'; 
// import './App.css';
// import Navbar from './component/Home/Navbar/Navbar';
// import { Provider } from 'react-redux';
// import store from './store';
// import List from './component/Home/Todo/List';
import { Description } from './component/Description/Description';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (

    <Provider store={store}>
    
      <div className="App">
       
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/description/:id' element={<Description/>} />
        </Routes>
      
      </div>
     
    </Provider>

    
   


);

}

export default App;
