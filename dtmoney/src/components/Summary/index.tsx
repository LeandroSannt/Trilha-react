import { Container } from './styles'
import inconImg from '../../assets/income.svg'
import outconImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from '../../TransactionsContext'
import { useEffect, useState, useContext } from 'react'


export function Summary(){
    const {transactions}= useContext(TransactionsContext)

    return(
    <Container>
        <div>
            <header>
                <p>Entradas</p>
                <img src={inconImg} alt="Entradas"/>
            </header>
            <strong>R$ 1000,00</strong>
        </div>

        <div>
            <header>
                <p>Saidas</p>
                <img src={outconImg} alt="Saidas"/>
            </header>
            <strong>- R$ 500,00</strong>
        </div>

        <div className="highlight-background">
            <header>
                <p>Entradas</p>
                <img src={totalImg} alt="Entradas"/>
            </header>
            <strong>R$ 500,00</strong>
        </div>
    </Container>

    )
}
