import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { ContactProvider } from './ContactContext';
import List from './List';
import Form from './Form';

function App() {
  return (
    <ContactProvider>
      <Router>
        <Switch>
          <Route path="/list">
            <List />
          </Route>
          <Route path="/form">
            <Form />
          </Route>
          <Route path="/" exact>
            <Redirect to="/list" />
          </Route>
        </Switch>
      </Router>
    </ContactProvider>
  );
}

export default App;
