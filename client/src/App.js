import './App.css'
import Navigation from './components/Navigation'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Feed from './pages/Feed'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Feed} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
