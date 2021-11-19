import React from 'react';
import {Layout} from 'antd';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Movie from "./pages/movie/Movie";
import NotFound from "./pages/NotFound";
import Menu from './components/Menu/Navbar'


function App() {

  const {Header , Content} = Layout 
  return (
  <div>
     <Layout>
      <Router>
        <Header style={{ zIndex: 1 }}>
        <Menu/>
        </Header>

        <Content>
          <Switch>
            <Route path="/" exact={true}>
              <Home />
            </Route>
          
            <Route path="/movie/:id" exact={true}>
              <Movie />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Content>
      </Router>
    </Layout>

  </div>
  );
}

export default App;
