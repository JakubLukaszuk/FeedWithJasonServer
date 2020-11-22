import './App.css';
import MainLayout from './layouts/MainLayout/MainLayout';
import {Route, Switch, Redirect} from 'react-router-dom';
import FeedPage from './pages/FeedPage/ArticelsPage';
import NotFound from './pages/NotFound/NotFound';
import * as routes from './constants/routes';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <MainLayout>
    <Switch>
      <Route exact path={routes.HOME} component={FeedPage}/>
      <Route path={routes.NOT_FOUND} component={NotFound}/>
      <Redirect to={routes.NOT_FOUND}/>
    </Switch>
  </MainLayout>
  );
}

export default App;
