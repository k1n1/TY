import Account from "./components/Auth/Account";
import Register from "./components/Auth/Register";
import Verify from "./components/Auth/Verify";
import Login from "./components/Auth/Login";
import Forgot from "./components/Auth/Forgot";
import Search from "./components/Search/Result";
import Setnewpassword from "./components/Auth/Setnewpassword";
import Home from "./components/Screens/Home";
import Profile from "./components/User/Profile";
import Studio from "./components/User/Studio";

const routes = [
    { path:"/account", name:"Account", component:Account },
    { path:"/account/register", name:"Register", component:Register },
    { path:"/account/verify/:id", name:"Verify", component:Verify },
    { path : "/account/login", name:"Login", component:Login },
    { path : "/account/forgot", name:"Forgot", component:Forgot },
    { path: "/account/forgot/:id", name:"Setnewpassword", component: Setnewpassword},
    { path:"/search/:query", name:"Search", component : Search },
    { path: "/", name:"Home", component: Home},
    { path: "/profile", name:"Profile", component: Profile},
    { path: "/studio", name:"Studio", component: Studio}

]

export default routes;