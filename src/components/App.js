import {GlobalStyle} from "./GlobalStyle"
import {BrowserRouter as Router, Switch, Route, useHistory} from "react-router-dom"
import SignUp from "./SignUp"
import SignIn from "./SignIn"
import Wallet from "./Wallet"
import AddCash from "./AddCash"
import RemoveCash from "./RemoveCash"
import UserContext from "../contexts/UserContext"
import {useState} from "react"

export default function App(){
    const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem('myWalletUserInfo'))!==null?JSON.parse(localStorage.getItem('myWalletUserInfo')):"");
    let history = useHistory()

    
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
                    <Route path="/cash-in" exact>
                        <AddCash/>
                    </Route>
                    <Route path="/cash-out" exact>
                        <RemoveCash/>
                    </Route>
                </Switch>
            </Router>
        </UserContext.Provider>
    )
}
