import styled from "styled-components"
import exit from "../assets/exit.svg"
import plus from "../assets/plus.svg"
import minus from "../assets/minus.svg"
import WalletHistory from "./WalletHistory"
import {useContext} from "react"
import UserContext from "../contexts/UserContext"
import {Link, useHistory} from "react-router-dom"

export default function SignUp() {
    const {userInfo} = useContext(UserContext)
    let history= useHistory()

    function logout(){
        localStorage.removeItem('myWalletUserInfo')
        history.push("/")
    }

    return (
        <Wrapper>
            <Header>
                <Title>Olá, {userInfo.user.name}</Title>
                <img src={exit} alt="exit" onClick={logout}></img>
            </Header>
            <WalletHistory/>
            <Buttons>
                <Link to="/cash-in">
                    <Button>
                        <img src={plus} alt="logout"></img>
                        <p>Nova<br/>entrada</p>
                    </Button>
                </Link>
                <Link to="/cash-out">
                    <Button>
                        <img src={minus} alt="logout"></img>
                        <p>Nova<br/>saida</p>
                    </Button>
                </Link>
            </Buttons>
        </Wrapper>
    )
}

const Wrapper= styled.div`
    margin: 0 auto;
    padding: 0 25px;
    max-width: 373px;
    height: 100vh;
    background-color: #925ABE;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

const Header= styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:100%;
    margin-top: 25px;
`

const Title= styled.h1`
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 31px;
    color: #FFFFFF;
`

const Buttons= styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:100%;
    gap:15px;
    margin-bottom: 16px;
`

const Button = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    padding:10px;
    width:156px;
    
    height: 114px;
    background: #A328D6;
    border-radius: 5px;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;
    img{
        width:22px;
    }
    p{
        font-style: normal;
        font-weight: bold;
        font-size: 17px;
        line-height: 20px;
        color: #FFFFFF;
    }
`;