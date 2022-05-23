import './App.css'
import Navigation from './components/Navigation'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Feed from './pages/Feed'
import Characters from './pages/Characters'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Feed} />
            <Route path="/characters" component={Characters} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
