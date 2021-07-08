
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux';
import { Container } from 'semantic-ui-react';
import Header from './Components/Header';
import InputField from './Components/InputField';
import store from './store/store';

function App() {
  return (
    <>
    <Provider store={store}>
      <Container>
        <Header/>
        <InputField/>
      </Container>
    </Provider>
    </>
  );
}

export default App;
