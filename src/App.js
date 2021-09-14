import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MainPageNews from "./views/MainPageNews";
import News from "./views/News";
import NewDetails from "./views/NewDetails";
import FormSignIn from "./views/FormSignIn";
import FormRegistration from "./views/FormRegistration";
import NotFound from "./views/NotFoundPage";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/"><MainPageNews /></Route>
                <Route path="/news"><News /></Route>
                <Route path="/details/:id"><NewDetails /></Route>
                <Route path="/signin"><FormSignIn /></Route>
                <Route path="/registration"><FormRegistration /></Route>
                <Route path="*"><NotFound /></Route>
            </Switch>
        </BrowserRouter>
    );
};

export default App;