import styled from "styled-components"
import {useContext, useState} from "react"
import UserContext from "../contexts/UserContext"
import back from "../assets/back.svg"
import { useHistory } from "react-router-dom"

export default function RemoveCash() {
    const {userInfo} = useContext(UserContext)
    let history=useHistory()

    return (
        <Wrapper>
            <Header>
                <Title>Nova saída</Title>
                <img src={back} onClick={()=>history.push("/wallet")}></img>
            </Header>
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