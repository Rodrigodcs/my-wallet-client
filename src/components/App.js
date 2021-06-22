import {GlobalStyle} from "./GlobalStyle"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import SignUp from "./SignUp"
import SignIn from "./SignIn"
import Wallet from "./Wallet"
import UserContext from "../contexts/UserContext"
import {useState} from "react"

export default function App(){
    const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem('myWalletUserInfo'))!==null?JSON.parse(localStorage.getItem('myWalletUserInfo')):"");

    return (
        <UserContext.Provider value={{userInfo, setUserInfo}}>
            <Router>
                <GlobalStyle/>
                <Switch>
                    <Route path="/" exact>
                        <SignIn/>
                    </Route>
                    <Route path="/sign-up" exact>
                        <SignUp/>
                    </Route>
                    <Route path="/wallet" exact>
                        <Wallet/>
                    </Route>
                </Switch>
            </Router>
        </UserContext.Provider>
    )
}
