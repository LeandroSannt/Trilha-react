export function RepositoryItem(props){
    return(
        <li>
        <strong>{props.repository.title}</strong>
            <p>{props.repository.description}</p>
            
            <a href={props.repository.body}>
                Acessar repositorio
            </a>
        </li>
    );
}