import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              exact path="/"
              element={<News key="general" country="in" catogory="general" />}/>

            <Route
              exact path="/business"
              element={<News key="business" country="in" catogory="business" />}
            />
            <Route exact path="/entertainment" element={<News key="entertainment" country="in" catogory="entertainment"/>}
            />
            <Route
              exact path="/health"
              element={<News key="health" country="in" catogory="health" />}
            />
            <Route
              exact path="/science"
              element={<News key="science" country="in" catogory="science" />}
            />
            <Route
              exact path="/sports"
              element={<News key="sports" country="in" catogory="sports" />}
            />
            <Route
              exact path="/technology"
              element={
                <News key="technology" country="in" catogory="technology" />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
