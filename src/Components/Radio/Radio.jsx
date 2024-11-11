import './Radio.scss'

export default function Radio(props) {
  return (
    <div className="radio">
      <h1>{props.title}
      <span>
        <label htmlFor={props.for}>
            Дa
        </label>
        <input type="radio" id={props.for} name={props.name}/>
        <label htmlFor={props.for2}>
            Нет
        </label>
        <input type="radio" id={props.for2} name={props.name}/>
      </span>
      </h1>
    </div>
  );
}