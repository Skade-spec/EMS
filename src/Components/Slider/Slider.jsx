import SliderItem from "./Slider.Item/SliderItem";
import "./Slider.scss";

const partners = [
  {
    id: "1",
    image:
      "http://ems.kz/sites/default/files/styles/logotipy_klientov_na_glavnoy_cvetnoy/public/energosistema.png?itok=c2KFUKnj",
  },
  {
    id: "2",
    image:
      "http://ems.kz/sites/default/files/styles/logotipy_klientov_na_glavnoy_cvetnoy/public/danaestrella.png?itok=SRLv5IbR",
  },
  {
    id: "3",
    image:
      "http://ems.kz/sites/default/files/styles/logotipy_klientov_na_glavnoy_cvetnoy/public/astanagorarchitektura.png?itok=hzmEO2hU",
  },
  {
    id: "4",
    image:
      "http://ems.kz/sites/default/files/styles/logotipy_klientov_na_glavnoy_cvetnoy/public/almaty_memlekettik_energetika.png?itok=vdc-8OHE",
  },
];

export default function Slider(props) {
    console.log(props);
    
  return (
    <span className="slider-background">
      <h1>{props.title}</h1>
      <span className="slider-container">
        <SliderItem image={props.items[0]} ></SliderItem>
        <SliderItem image={props.items[1]}></SliderItem>
        <SliderItem image={props.items[2]}></SliderItem>
      </span>
    </span>
  );
}
