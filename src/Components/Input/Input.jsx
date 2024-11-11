import './Input.scss'

export default function Input(props) {
  return (
    <div className="input">
      <h1>{props.title}
      <input type={props.type} placeholder={props.description} id={props.id}/>
      </h1>
      
    </div>
  );
}