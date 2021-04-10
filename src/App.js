import s from './App.module.scss';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter,Route} from "react-router-dom";

const App = (props) => {
  return (
    <div className={s.app_wrapper}>
        <BrowserRouter>
            <Header />
            <Nav />
            <div className={s.content}>
                <Route path='/profile' render={()=><Profile

                    state={props.state.profilePage}
                    dispatch={props.dispatch}
                />}/>
                <Route path='/dialogs' render={()=><Dialogs state={props.state.dialogsPage}
                                                            dispatch={props.dispatch}/>}/>
            </div>

        </BrowserRouter>
    </div>
  );
}

export default App;
