import styled from "styled-components"
import {useContext, useState} from "react"
import UserContext from "../contexts/UserContext"
import back from "../assets/back.svg"
import { useHistory } from "react-router-dom"
import axios from "axios"

export default function AddCash() {
    const [value, setValue] = useState("")
    const [description,setDescription]=useState("")
    const [requesting,setRequesting] = useState(false)
    const {userInfo} = useContext(UserContext)
    let history=useHistory()

    function cashIn(e){
        e.preventDefault()
        setRequesting(true)

        const body={
            userId: userInfo.user.id,
            value,
            description,
            cashIn: true,
        }
        const config = {
            headers:{
                Authorization:`Bearer ${userInfo.token}`
        }}

        axios.post("http://localhost:4000/transaction",body,config).then(r=>{
            console.log(r)
            setRequesting(false)
            history.push("/wallet")
        }).catch(e=>{
            console.log(e)
            setRequesting(false)
        })
    }

    return (
        <Wrapper>
            <Header>
                <Title>Nova entrada</Title>
                <img src={back} alt="close" onClick={()=>history.push("/wallet")}></img>
            </Header>
            <Form onSubmit={cashIn}>
                <Input type="number" placeholder="Valor (centavos)" value={value} onChange={e=>setValue(e.target.value)}></Input>
                <Input type="text" placeholder="Descrição" value={description} onChange={e=>setDescription(e.target.value)}></Input>
                {requesting?
                    <Button>Salvando...</Button>:
                    <Button type="submit">Salvar entrada</Button>
                }
            </Form>
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
    gap:15px;
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

const Form= styled.form`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 13px;
`

const Input = styled.input`
    height: 58px;
    width: 100%;
    background: #FFFFFF;
    border-radius: 5px;
    padding-left: 15px;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
    ::placeholder{
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;
        color: #000000;
    }
`;

const Button = styled.button`
    width: 100%;
    height: 46px;
    background: #A328D6;
    border-radius: 5px;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;
`;