import React,{ Component }from 'react';
import AppNavBar from './components/AppNavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import ShoppingList from './components/Shoppinglist';
import ItemModel from './components/ItemModel';
import {Provider} from 'react-redux';
import {Container} from 'reactstrap';
import store from './store';

class App extends Component {
  render(){
  return (
    <Provider store={store}>
     <div className="App">
       <AppNavBar />
       <Container>
          <ItemModel />
          <ShoppingList />
        </Container>
     </div>
    </Provider>
  );
}
}
export default App;
