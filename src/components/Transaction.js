import styled from "styled-components"

export default function Transaction({date, description, value, cashIn}){

    function dateFormat(date){
        return `${date.substring(8,10)}/${date.substring(5,7)}`
    }

    return(
        <Wrapper>
            <Date>{dateFormat(date)}</Date>
            <Description>{description}</Description>
            {cashIn?
                <Value credit>{(value/100).toFixed(2).replace(".",",")}</Value>:
                <Value>{(value/100).toFixed(2).replace(".",",")}</Value>
            }
        </Wrapper>
    )
}

const Wrapper= styled.div`
    display:flex;
    justify-content: space-between;
    gap:3%;
`
const Date= styled.h1`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #C6C6C6;
    width:15%;
`
const Description= styled.p`
    width: 100%;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    overflow-x: scroll;
    width:60%;
    white-space: nowrap;
`
const Value= styled.span`
    color: ${props => props.credit ? "#03AC00" : "#C70000"};
    width: 25%;
    text-align: end;
`
