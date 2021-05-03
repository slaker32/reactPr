import s from './App.module.scss';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import {BrowserRouter,Route} from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {
  return (
    <div className={s.app_wrapper}>
        <BrowserRouter>
            <Header />
            <Nav />
            <div className={s.content}>
                <Route path='/profile' render={()=><Profile />}/>
                <Route path='/dialogs' render={()=><DialogsContainer/>}/>
            </div>

        </BrowserRouter>
    </div>
  );
}

export default App;
