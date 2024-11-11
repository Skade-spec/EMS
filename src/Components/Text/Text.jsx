import './Text.scss'

export default function Text(props) {
  return (
    <div className='Text'>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}
