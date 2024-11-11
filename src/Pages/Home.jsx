import "/public/scss/default.scss";
import Qualites from "../Components/Qualites/Qualites";
import Text from "../Components/Text/Text";
import LastNews from "../Components/LastNews/LastNews";
import Slider from "../Components/Slider/Slider";

export default function Home() {
  return (
    <main>
      <span className="Stack">
        <Qualites
          icon="http://ems.kz/sites/default/files/images/icons/icon_utp_1.png"
          text="Профессионализм и ответсвенность"
        ></Qualites>
        <Qualites
          icon="http://ems.kz/sites/default/files/images/icons/icon_utp_2.png"
          text="Многолетняя практика"
        ></Qualites>
        <Qualites
          icon="http://ems.kz/sites/default/files/images/icons/icon_utp_3.png"
          text="Высокая надежность"
        ></Qualites>
        <Qualites
          icon="http://ems.kz/sites/default/files/images/icons/icon_utp_4.png"
          text="Неформальный подход"
        ></Qualites>
      </span>
      <span className="Stack">
        <Text
          title="МИССИЯ «EUROASIA MS»"
          description="Проводить с позитивным настроем высокого качества аудиты систем менеджмента, способствующие конкурентноспособности организаций в современной бизнес-среде."
        ></Text>
        <Text
          title="ВИДЕНИЕ: «EUROASIA MS»"
          description="Будет в обозримом будущем представлять собой организацию  (ОПС), способную продолжать проводить  качественные аудиты  систем менеджмента – ISO 9001; ISO 14001, OHSAS 18001, ISO 50001 и др."
        ></Text>
        <Text
          title="Наша отличительная особенность –"
          description="Лидирующие позиции в области профессионализма и качества проводимых аудитов. Наши эксперты обладают глубокими знаниями отрасли и применяют современные методологии."
        ></Text>
      </span>
      <span className="Stack">
        <LastNews image="https://img.freepik.com/free-photo/office-desktop-with-laptop-and-a-glasses_23-2148174049.jpg?w=1380&t=st=1726766908~exp=1726767508~hmac=87011924adfb48692bb5c6cba41da2533eb25119fea035d10d00c72a200ac470" text="Сертификат качества: Эффективность и..." date="21/09/2024" link="http://www.ems.kz/sites/default/files/statyi/pdf/BE_04_2014.pdf"></LastNews>
        <LastNews image="https://img.freepik.com/free-photo/top-view-office-desk-with-growth-chart-calculator_23-2148780608.jpg?t=st=1727108458~exp=1727112058~hmac=5bf89a09e7afdd1125bea7e6bcf442e5e52f77fd203c2c6a88dfeb1cfbcf7d94&w=1380" text="Почему ISO не всегда находит своих..." date="09.09.2024" link="http://www.ems.kz/sites/default/files/statyi/pdf/GOSTANDART_2014.pdf"></LastNews>
        <LastNews image="https://img.freepik.com/free-photo/cropped-business-man-making-notes-from-his-smartphone-calendar-to-the-organizer_1098-19230.jpg?size=626&ext=jpg&ga=GA1.1.1284052089.1726738623&semt=ais_hybrid" text="Удовлетворенность потребителя ва..." date="07/09/2024" link="http://www.ems.kz/sites/default/files/statyi/pdf/Statiya_derevo.pdf"></LastNews>
      </span>
      <Slider
        title="НАШИ СЕРТИФИКАТЫ"
        items={[
          "http://ems.kz/sites/default/files/attestat_akkcred.jpg",
          "http://ems.kz/sites/default/files/15.jpg",
          "http://ems.kz/sites/default/files/13.jpg",
        ]}
      ></Slider>
      <Slider
        title="НАШИ ПАРТНЕРЫ"
        items={[
          "http://ems.kz/sites/default/files/styles/logotipy_klientov_na_glavnoy_cvetnoy/public/energosistema.png?itok=c2KFUKnj",
          "http://ems.kz/sites/default/files/styles/logotipy_klientov_na_glavnoy_cvetnoy/public/danaestrella.png?itok=SRLv5IbR",
          "http://ems.kz/sites/default/files/styles/logotipy_klientov_na_glavnoy_cvetnoy/public/astanagorarchitektura.png?itok=hzmEO2hU",
        ]}
      ></Slider>
    </main>
  );
}
