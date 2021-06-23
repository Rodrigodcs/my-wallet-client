import styled from "styled-components"
import {useState, useContext, useEffect} from "react"
import UserContext from "../contexts/UserContext"
import {Link, useHistory} from "react-router-dom"
import axios from "axios"

export default function SignIn() {
    const [email, setEmail] = useState("")
    const [password,setPassword]=useState("")
    const [requesting,setRequesting] = useState(false)
    let history=useHistory()
    const {setUserInfo} = useContext(UserContext);

    useEffect(() => {
        if(JSON.parse(localStorage.getItem('myWalletUserInfo'))!==null){
            setUserInfo(JSON.parse(localStorage.getItem('myWalletUserInfo')))
            history.push("/wallet")
        }
	}, [history,setUserInfo]);

    function login(e){
        e.preventDefault()
        setRequesting(true)
        const body = {email,password}
        axios.post("http://localhost:4000/sign-in",body).then(r=>{
            console.log(r)
            localStorage.setItem('myWalletUserInfo', JSON.stringify(r.data));
            setRequesting(false)
            history.push("/wallet")
        }).catch(e=> {
            console.log(e)
            setRequesting(false)
        })
        
    }

    return (
        <Wrapper>
            <FormWrapper>
                <Title>
                    MyWallet
                </Title>
                <Form onSubmit={login}>
                    <Input type="email" placeholder="e-mail" value={email} onChange={e=>setEmail(e.target.value)}></Input>
                    <Input type="password" placeholder="password" value={password} onChange={e=>setPassword(e.target.value)}></Input>
                    {requesting?
                        <Button>Entrando...</Button>:
                        <Button type="submit">Entrar</Button>
                    }
                </Form>
                <Link to="/sign-up">
                    <p>Primeira vez? Cadastre-se!</p>
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
