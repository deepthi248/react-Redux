import logo from './logo.svg';
import './App.css';
import CakeContainer from './Components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import CounterContainer from './Components/CounterContainer';
import CounterContainerHooks from './Components/CounterContainerHooks';


function App() {
  return (
    <Provider store={store}>
      <CounterContainerHooks />
    </Provider>
  );
}

export default App;
