import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import BookDetail from '../pages/BookDetail';

const Routes = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/book/:book" component={BookDetail} />
  </Switch>
);

export default Routes;
