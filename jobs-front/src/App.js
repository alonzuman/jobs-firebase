import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/Auth';

// Mui
import { Paper, Container, ThemeProvider } from '@material-ui/core'

// Pages
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import theme from './theme';

// Components
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
          <Router>
            <Switch>
              <PrivateRoute exact path='/' component={Home} />
              <Route path='/signin' component={SignIn} />
              <Route path='/signup' component={SignUp} />
            </Switch>
          </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
