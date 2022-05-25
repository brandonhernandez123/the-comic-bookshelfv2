import './App.css'
import Navigation from './components/Navigation'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Feed from './pages/Feed'
import Characters from './pages/Characters'
import Comics from './pages/Comics'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Router>
        <div>
          <Switch>
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
