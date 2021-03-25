import s from './App.module.scss';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter,Route} from "react-router-dom";

const App = () => {
  return (
    <div className={s.app_wrapper}>
        <BrowserRouter>
            <Header />
            <Nav />
            <div className={s.content}>
                <Route path='/profile' component={Profile}/>
                <Route path='/dialogs' component={Dialogs}/>
            </div>

        </BrowserRouter>
    </div>
  );
}

export default App;
