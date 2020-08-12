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
import PostJob from './pages/PostJob';
import EditProfile from './pages/EditProfile';
import Me from './pages/Me';
import theme from './theme';

// Components
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  const containerStyle = {
    position: 'absolute',
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    borderRadius: 0,
    padding: 0
  }

  return (
    // TODO set theme toggle
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Container style={containerStyle}>
          <Router>
            <Switch>
              <PrivateRoute exact path='/' component={Home} />
              <Route path='/signin' component={SignIn} />
              <Route path='/signup' component={SignUp} />
            </Switch>
          </Router>
        </Container>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
