import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Redux
import { useDispatch, useSelector } from 'react-redux'

// Auth
import { setUser, signOut } from './actions'

// Mui
import { Paper, Container, ThemeProvider } from '@material-ui/core'

// Pages
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import app from './firebase';
import PostJob from './pages/PostJob';
import EditProfile from './pages/EditProfile';
import Me from './pages/Me';
import theme from './theme';

// Components
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  const localTheme = useSelector(state => state.theme.theme)
  const dispatch = useDispatch()

  // TODO use effect that refreshes the colors on change of theme

  const containerStyle = {
    minHeight: '100vh',
    padding: '1rem 0',
    borderRadius: 0
  }

  const validateUser = app.auth().onAuthStateChanged(user => {
    if (user) {
      // Set redux auth to is signed in
      localStorage.setItem('token', user.refreshToken)
      dispatch(setUser(user))
    } else {
      dispatch(signOut)
      console.log('no user signed in')
    }
  })

  useEffect(() => { validateUser() }, [])

  return (
    // TODO set theme toggle
    <ThemeProvider theme={theme}>
      <Paper style={containerStyle}>
        <Router>
          <Switch>
            <Container>
              <PrivateRoute exact path='/' component={Home} />
              <PrivateRoute exact path='/post-job' component={PostJob} />
              <PrivateRoute exact path='/me' component={Me} />
              <PrivateRoute exact path='/me/edit' component={EditProfile} />
              <Route path='/signin' component={SignIn} />
              <Route path='/signup' component={SignUp} />
            </Container>
          </Switch>
        </Router>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
