import './App.css';
import MainLayout from './layouts/MainLayout/MainLayout';
import {Route, Switch, Redirect} from 'react-router-dom';
import FeedPage from './pages/FeedPage/FeedPage';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <MainLayout>
    <Switch>
      <Route exact path={'/'} component={FeedPage}/>
      <Route path={'/not-found'} component={NotFound}/>
      <Redirect to={'/not-found'}/>
    </Switch>
  </MainLayout>
  );
}

export default App;
