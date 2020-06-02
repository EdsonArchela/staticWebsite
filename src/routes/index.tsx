import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Main from '../pages/Main';
import SingIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import CreatePost from '../pages/CreatePost';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/signin" component={SingIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/create-post" component={CreatePost} isPrivate />
  </Switch>
);

export default Routes;
