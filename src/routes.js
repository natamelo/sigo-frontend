import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "./services/auth";
import SignIn from "./pages/SignIn";
import Companies from "./pages/Companies";
import { GlobalStyle } from './styles/global'


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: "/", state: { from: props.location } }} />
            )
        }
    />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={SignIn} />
            <PrivateRoute path="/app" component={Companies} />
            <Route path="*" component={() => <h1>Página não encontrada</h1>} />
        </Switch>
        <GlobalStyle/>
    </BrowserRouter>
);

export default Routes;