// import './App.css';
// import Navbar from './component/Home/Navbar/Navbar';
import { Provider } from 'react-redux';
import store from './store';
import List from './component/Home/Todo/List';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Navbar/> */}
        <List />
      </div>
    </Provider>
  );
}

export default App;
