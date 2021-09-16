import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MainPageNews from "./views/MainPageNews";
import News from "./views/News";
import NewDetails from "./views/NewDetails";
import FormSignIn from "./views/FormSignIn";
import FormRegistration from "./views/FormRegistration";
import NotFound from "./views/NotFoundPage";
import Layout from "./components/Layout";
import Request from "./views/Request";

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
            <Switch>
                <Route exact path="/"><MainPageNews /></Route>
                <Route path="/news"><News /></Route>
                <Route path="/details/:id"><NewDetails /></Route>
                <Route path="/signin"><FormSignIn /></Route>
                <Route path="/registration"><FormRegistration /></Route>
                <Route path="/request"><Request /></Route>
                <Route path="*"><NotFound /></Route>
            </Switch>
            </Layout>
        </BrowserRouter>
    );
};

export default App;