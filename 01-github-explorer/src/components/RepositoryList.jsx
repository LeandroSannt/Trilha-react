import {RepositoryItem} from "./RepositoryItem";
import '../styles/repositories.scss'
const repository = {
    nome:"unform",
    description:"forms in react",
    link:"https://github.com/LeandroSannt"
}

export function RepositoryList(){
    return(
        <section className="repository-list">
            <h1>Lista de repositorios</h1>
            <ul>
                <RepositoryItem repository = {repository}/>
                <RepositoryItem repository = {repository}/>
                <RepositoryItem repository = {repository}/>
                <RepositoryItem repository = {repository}/>
            </ul>
        </section>
    );
}