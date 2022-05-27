import './App.css'
import Navigation from './components/Navigation'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Feed from './pages/Feed'
import Characters from './pages/Characters'
import Comics from './pages/Comics'
import Login from './pages/Login'
import Register from './pages/Register'
import { useState, useEffect, useCallback } from 'react'
import { CheckSession } from './services/auth'

function App() {
  const [authenticated, toggleAuthenticated] = useState(
    false || localStorage.getItem('authenticated')
  )
  const [user, setUser] = useState(null)
  console.log('user:', user)
  const handleLogOut = () => {
    //Reset all auth related state and clear localstorage
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async () => {
    const session = await CheckSession()

    setUser(session)

    toggleAuthenticated(true)
    localStorage.setItem('authenticated', '1')
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <Navigation
        user={user}
        authenticated={authenticated}
        handleLogOut={handleLogOut}
        setUser={setUser}
      />
      <Router>
        <div>
          <Switch>
            <Route exact path="/register" component={Register} />

            <Route
              exact
              path="/login"
              component={(props) => (
                <Login
                  {...props}
                  setUser={setUser}
                  toggleAuthenticated={toggleAuthenticated}
                />
              )}
            />
            <Route exact path="/" component={Feed} />
            <Route path="/characters" component={Characters} />
            <Route path="/comics" component={Comics} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
