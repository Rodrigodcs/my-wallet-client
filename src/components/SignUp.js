import styled from "styled-components"
import {useState, useContext, useEffect} from "react"
import UserContext from "../contexts/UserContext"
import {Link, useHistory} from "react-router-dom"
import axios from "axios"

export default function SignUp() {
    const [email, setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [pictureUrl,setPictureUrl] = useState("")
    let history = useHistory();
    const [requesting,setRequesting] = useState(false)

    function register(e){
        e.preventDefault()
        setRequesting(true)
        console.log("what")
    }

    return (
        <Wrapper>
            <FormWrapper>
                <Title>
                    MyWallet
                </Title>
                <Form onSubmit={register}>
                    <Input type="email" placeholder="e-mail" value={email} onChange={e=>setEmail(e.target.value)}></Input>
                    <Input type="password" placeholder="password" value={password} onChange={e=>setPassword(e.target.value)}></Input>
                    <Input type="text" placeholder="username" value={username} onChange={e=>setUsername(e.target.value)}></Input>
                    <Input type="url" placeholder="picture url" value={pictureUrl} onChange={e=>setPictureUrl(e.target.value)}></Input>
                    {requesting?
                        <Button>Cadastrando...</Button>:
                        <Button type="submit">Cadastrar</Button>
                    }
                </Form>
                <Link to="/">
                    <p>Já tem uma conta? Entre Agora!</p>
                </Link>
            </FormWrapper>
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
    justify-content: center;
`

const FormWrapper= styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:30px;
    p{
        text-decoration: none;
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
    }
`

const Form= styled.form`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 13px;
`

const Title= styled.h1`
    font-family: 'Saira Stencil One', cursive;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 50px;
    color: #FFFFFF;
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
    width: 326px;
    height: 46px;
    background: #A328D6;
    border-radius: 5px;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;
`;

