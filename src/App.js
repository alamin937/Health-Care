import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Details from './components/Details/Details';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';

function App() {

  return (
    <div className="App">
    <AuthProvider>
    <BrowserRouter>
    <Header></Header>
      <Switch>
      <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route>
        <Route path='/contact'>
          <Contact></Contact>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path='/register'>
          <Register></Register>
        </Route>
        <PrivateRoute path='/details/:mediId'>
          <Details></Details>
        </PrivateRoute>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
