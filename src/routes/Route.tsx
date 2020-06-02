// import React from 'react';
// import {
//   Route as ReactDOMRoute,
//   RouteProps as ReactDOMRouteProps,
// } from 'react-router-dom';

// interface RouteProps extends ReactDOMRouteProps {
//   isPrivate?: boolean;
//   component: React.ComponentType;
// }

// const Route: React.FC<RouteProps> = ({ component: Component, ...rest }) => {
//   return (
//     <ReactDOMRoute
//       {...rest}
//       render={() => {
//         return <Component />;
//       }}
//     />
//   );
// };
// export default Route;

import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from 'react-router-dom';
import { useAuth } from '../hooks/AuthContext';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();
  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        let component;
        if (isPrivate && user && user.admin) {
          component = <Component />;
        }
        if (isPrivate && (!user || !user.admin)) {
          component = (
            <Redirect to={{ pathname: '/signin', state: { from: location } }} />
          );
        } else component = <Component />;
        return component;
      }}
    />
  );
};
export default Route;
