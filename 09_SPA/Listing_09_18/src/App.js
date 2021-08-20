import List from './List';
import { ContactProvider } from './ContactContext';
import Form from './Form';

function App() {
  return (
    <ContactProvider>
      <List />
      <Form />
    </ContactProvider>
  );
}

export default App;
