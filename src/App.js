import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Landing from './components/Landing/Landing';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' component={Landing}/>
      </Switch>
    </div>
  );
}

export default App;
