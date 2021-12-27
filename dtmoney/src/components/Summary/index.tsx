import { Container } from './styles'
import inconImg from '../../assets/income.svg'
import outconImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useTransactions } from '../../hooks/useTransactions'


export function Summary(){
    const {transactions} = useTransactions()


    const totalDeposits = transactions.reduce((acc,transaction) => {
        if(transaction.type == 'deposit'){
            return acc + transaction.amount
            } 
       return Number(acc);
    },0)

    const totalwithdraws = transactions.reduce((acc,transaction) => {
        if(transaction.type == 'withdraw'){
            return acc - transaction.amount
            } 
       return Number(acc);
    },0)

    const total = transactions.reduce((acc,transaction) => {
        if(transaction.type == 'deposit'){
            acc += transaction.amount
            }else{
             acc -= transaction.amount
            }
       return Number(acc);
    },0)

    return(
    <Container>
        <div>
            <header>
                <p>Entradas</p>
                <img src={inconImg} alt="Entradas"/>
            </header>
            <strong>
            {new Intl.NumberFormat('pt-BR', {
                style:'currency',
                currency:'BRL',  
            }).format(totalDeposits)}
                </strong>
        </div>

        <div>
            <header>
                <p>Saidas</p>
                <img src={outconImg} alt="Saidas"/>
            </header>
            <strong>{new Intl.NumberFormat('pt-BR', {
                style:'currency',
                currency:'BRL',  
            }).format(totalwithdraws)}</strong>
        </div>

        <div className="highlight-background">
            <header>
                <p>Entradas</p>
                <img src={totalImg} alt="Entradas"/>
            </header>
            <strong>{new Intl.NumberFormat('pt-BR', {
                style:'currency',
                currency:'BRL',  
            }).format(total)}</strong>
        </div>
    </Container>

    )
}
