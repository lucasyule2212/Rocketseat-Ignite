
// import { Container } from './styles';
interface IRepositoryItemProps{
repository:{
  name:string;
  description:string;
  html_url:string;
}
}
function RepositoryItem(props:IRepositoryItemProps) {
  return (
    <li >
      <strong>{props.repository.name ?? "Default"}</strong>
      <p>{props.repository.description}</p>
      <a href={props.repository.html_url}>Acessar repositório</a>
    </li>
  );
}

export default RepositoryItem;
