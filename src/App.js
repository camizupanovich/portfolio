import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import s from './App.module.css';

function App() {
  return (
    <div className={s.app}>
      <Switch>
        <Route path='/' component={Landing}/>
      </Switch>
    </div>
  );
}

export default App;
