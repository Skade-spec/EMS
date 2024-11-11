import "./LastNews.scss";

export default function LastNews(props) {
  return (
    <div className="news-block">
      <img src={props.image} />
      <div>
        <h2>{props.text}</h2>
        <h3>{props.date} <a href={props.link} target="_blank"><img className="icon" src="https://cdn2.iconfinder.com/data/icons/email-103/384/Older-256.png" /></a></h3>
      </div>
    </div>
  );
}
