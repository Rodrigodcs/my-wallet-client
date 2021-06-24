import styled from "styled-components"
import {useState} from "react"
import {Link, useHistory} from "react-router-dom"
import axios from "axios"

export default function SignUp() {
    const [name, setName] = useState("")
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation,setPasswordConfirmation] = useState("")
    
    let history = useHistory();
    const [requesting,setRequesting] = useState(false)

    function register(e){
        e.preventDefault()
        if(password===passwordConfirmation){
            setRequesting(true)
            const body = {name,email,password}
            axios.post("http://localhost:4000/sign-up",body).then(r=>{
                console.log(r)
                setRequesting(false)
                history.push("/")
            }).catch(e=> {
                console.log(e)
                setRequesting(false)
            })
        }else{
            alert("As senhas não são iguais")
        }
    }

    return (
        <Wrapper>
            <FormWrapper>
                <Title>
                    MyWallet
                </Title>
                <Form onSubmit={register}>
                    <Input type="text" placeholder="Nome" value={name} onChange={e=>setName(e.target.value)}></Input>
                    <Input type="email" placeholder="E-mail" value={email} onChange={e=>setEmail(e.target.value)}></Input>
                    <Input type="password" placeholder="Senha" value={password} onChange={e=>setPassword(e.target.value)}></Input>
                    <Input type="password" placeholder="Confirmar a senha" value={passwordConfirmation} onChange={e=>setPasswordConfirmation(e.target.value)}></Input>
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

