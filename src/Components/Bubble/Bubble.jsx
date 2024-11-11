import './Bubble.scss'

export default function Bubble(props) {
  return (
    <div className="bubble" id={props.class}>
      <h1>{props.title}</h1>
      <p>
        {props.description}
      </p>
    </div>
  );
}
