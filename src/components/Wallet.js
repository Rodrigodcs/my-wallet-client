import styled from "styled-components"
import exit from "../assets/exit.svg"
import plus from "../assets/plus.svg"
import minus from "../assets/minus.svg"
import {useState, useContext, useEffect} from "react"
import UserContext from "../contexts/UserContext"
import {Link, useHistory} from "react-router-dom"
import axios from "axios"

export default function SignUp() {

    
    return (
        <Wrapper>
            <Header>
                <Title>Olá, fulano</Title>
                <img src={exit}></img>
            </Header>
            <WalletHistory>

            </WalletHistory>
            <Buttons>
                <Button>
                    <img src={plus}></img>
                    <p>Nova<br/>entrada</p>
                </Button>
                <Button>
                    <img src={minus}></img>
                    <p>Nova<br/>saida</p>
                </Button>
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
    font-family: 'Saira Stencil One', cursive;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 50px;
    color: #FFFFFF;
`

const WalletHistory= styled.div`
    width: 100%;
    height: calc(100vh - 114px - 130px);
    background: #FFFFFF;
    border-radius: 5px;
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
    width: 156px;
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