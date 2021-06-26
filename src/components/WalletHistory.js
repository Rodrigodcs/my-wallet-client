import styled from "styled-components"
import Transaction from "./Transaction"
import {useState, useContext, useEffect} from "react"
import UserContext from "../contexts/UserContext"
import axios from "axios"
import loadingGif from "../assets/loading.gif"

export default function WalletHistory() {
    const {userInfo} = useContext(UserContext)
    const [transactions, setTransactions]= useState([])
    const [loading, setLoading]= useState(true)
    const [total,setTotal]= useState(0)

    useEffect(() => {
        const config = {
            headers:{
                Authorization:`Bearer ${userInfo.token}`
        }}
        axios.get("https://my-wallet-server.herokuapp.com/wallet-history",config).then(r=>{
            setTransactions(r.data)
            let credit=0
            r.data.forEach((t)=>{
                t.cashIn?
                    credit+=t.value:
                    credit-=t.value
            })
            setTotal(credit)
            setLoading(false)
        }).catch(e=>{
            alert("Não foi possivel obter as transações de sua conta")
            console.log(e)
        })
	}, [userInfo.token]);
    if(loading){
        return (<Wrapper><img src={loadingGif} alt="loading gif"></img></Wrapper>)
    }
    
    return (
        <Wrapper>
            {transactions.length?
                <>
                    <Rows>
                        {transactions.map(t=>
                            <Transaction 
                                key={t.id}
                                date={t.date} 
                                description={t.description} 
                                value={t.value} 
                                cashIn={t.cashIn}
                            />
                        )}
                    </Rows>
                    <Total>
                        <p>SALDO</p>
                        <span className={total<0?"negativo":"positivo"}>{(Math.abs(total/100)).toFixed(2).replace(".",",")}</span>
                    </Total>
                </>:
                <h3>Não há registros de<br/> entrada ou saída</h3>
            }
                
        </Wrapper>
    )
}

const Wrapper= styled.div`
    width: 100%;
    height: calc(100vh - 114px - 130px);
    background: #FFFFFF;
    border-radius: 5px;
    padding:20px 10px 10px 10px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    gap:15px;
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 20px;
    color: #000000;
    .positivo{
        font-weight: normal;
        color:#03AC00;
    }
    .negativo{
        font-weight: normal;
        color:#C70000;
    }
    img{
        width:100px;
        margin: 0 auto;
    }
    h3{
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        color: #868686;
        margin:auto;
    }

`

const Total= styled.div`
    display: flex;
    justify-content: space-between;
`

const Rows= styled.div`
    display:flex;
    flex-direction: column;
    gap:5px;
    overflow-y: scroll;
`