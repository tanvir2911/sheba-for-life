import './App.css';
import AuthProvider from './contexts/AuthProvider';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Registration from './Pages/Login/Registration/Registration';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import DynamicServices from './Pages/DynamicSerices/DynamicServices';
import Gallery from './Pages/Gallery/Gallery';
import AboutUs from './Pages/AboutUs/AboutUs';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/registration">
              <Registration></Registration>
            </Route>
            <PrivateRoute path="/services/:serviceId">
              <DynamicServices></DynamicServices>
            </PrivateRoute>
            <PrivateRoute path="/gallery">
              <Gallery></Gallery>
            </PrivateRoute>
            <PrivateRoute path="/about">
              <AboutUs></AboutUs>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
