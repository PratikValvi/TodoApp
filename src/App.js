
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import Header from './Components/Header';
import InputField from './Components/InputField';
import TodoList from './Components/TodoList';
import store from './Store/Store';
import { Provider } from 'react-redux';

function App() {
  
  return (
    <>
    <Provider store={store}>
      <Container>
        <Header />
        <InputField />
        <TodoList />
      </Container>
    </Provider>
    </>
  );
}

export default App;
