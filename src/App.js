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
                <Route path='/profile' render={()=><Profile posts={props.state.posts}/>}/>
                <Route path='/dialogs' render={()=><Dialogs dialogs={props.state.dialogs} messages={props.state.messages}  />}/>
            </div>

        </BrowserRouter>
    </div>
  );
}

export default App;
