import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configStore } from './redux/configureStore';
import NavbarPage from './components/NavbarPage';
import FooterPage from './components/FooterPage';
import Routes from './Routes';

const store = configStore();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <header>
          {console.log(store.getState())}
          <NavbarPage />
        </header>
        <main>
          <Routes />
        </main>
        <FooterPage />
      </Router>
    </Provider>
  );
}

export default App;
