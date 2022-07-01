import { title } from "process";
import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Button from "../../Components/Button";

const MockComponent = () => {
    return <div>
        <Button title={"GET API TOKEN"} onClick={() => {}}></Button>
    </div>;
};

enum Pages {
    SignIn = "/",
    SignUp = "signUp",
    HomePageArticles = "articles",
    HomePageNews = "news",
    SearchPage = "search", 
    ContentPage = "post/:id",
}
const Router = () => {
    return (
        <BrowserRouter>
          <Routes>
            <Route path={Pages.SignIn} element={<MockComponent />}>
              <Route path={Pages.SignUp} element={<MockComponent />} />
              <Route path={Pages.HomePageArticles} element={<MockComponent />} />
              <Route path={Pages.HomePageNews} element={<MockComponent />} />
              <Route path={Pages.SearchPage} element={<MockComponent />} />
              <Route path={Pages.ContentPage} element={<MockComponent />} />
            </Route>
          </Routes>
        </BrowserRouter>
      );
    }

export default Router;