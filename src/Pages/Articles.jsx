import "/public/scss/default.scss";
import Headline from "../Components/Headline/Headline";
import LastNews from "../Components/LastNews/LastNews";
import { useState } from 'react'
import TabsSection from "../Components/TabsSection/TabsSection";

export default function Articles() {

    const [ tab, setTab ] = useState('business')

    return (
        <main>
            <Headline category='Статьи'></Headline>
            <TabsSection active={tab} onChange={(current) => setTab(current)}></TabsSection>
            <div className="Stack">
                
                    {tab === 'business' && (
                        <>
                        <div className="double">
                        <LastNews image="https://img.freepik.com/free-photo/silhouette-businessman-with-glasses_1098-84.jpg?ga=GA1.1.1284052089.1726738623&semt=ais_hybrid" text="ИСО возможность перейти на демократические..." date="26/11/2023" link="http://www.ems.kz/sites/default/files/statyi/pdf/BE_12_2014_Persona_0.pdf"></LastNews>
                        <LastNews image="https://img.freepik.com/free-photo/office-desktop-with-laptop-and-a-glasses_23-2148174049.jpg?w=1380&t=st=1726766908~exp=1726767508~hmac=87011924adfb48692bb5c6cba41da2533eb25119fea035d10d00c72a200ac470" text="Сертификат качества: Эффективность и..." date="21/09/2024" link="http://www.ems.kz/sites/default/files/statyi/pdf/BE_04_2014.pdf"></LastNews>
                        </div>
                        <div className="double">
                        <LastNews image="https://img.freepik.com/free-photo/paperwork_1098-18063.jpg?ga=GA1.1.1284052089.1726738623&semt=ais_hybrid" text="Дороги, которые мы выбираем" date="31/08/2024" link="http://www.ems.kz/sites/default/files/statyi/pdf/BE_8_2014_QA_Lokomotiv.pdf"></LastNews>
                        <LastNews image="https://media.istockphoto.com/id/950986656/photo/business-finance-accounting-contract-advisor-investment-consulting-marketing-plan-for-the.jpg?s=612x612&w=0&k=20&c=U-y6cADCby4QwENFptPrVcK_MplesqZmnDxUMMkJZvM=" text="Стандарты строить и жить помогают" date="28/09/2024" link="http://www.ems.kz/sites/default/files/statyi/pdf/BE_7_2014_QA_Astana.pdf"></LastNews>
                        </div>
                        <LastNews image="https://img.freepik.com/free-photo/business-corporate-workplace-team-plan-project_1418-45.jpg?ga=GA1.1.1284052089.1726738623&semt=ais_hybrid" text="ИСО 9001 как первооснова к..." date="11/09/2024" link="http://www.ems.kz/sites/default/files/statyi/pdf/BE_09_2012.pdf"></LastNews>
                        
                        
                        </>
                    )}
                    {tab === 'world' && (
                        <>
                        <div className="double">
                            <LastNews image="https://img.freepik.com/free-photo/business-people-shaking-hands-together_53876-13391.jpg?ga=GA1.1.1284052089.1726738623&semt=ais_hybrid" text="Задача стать передовой экономикой мира" date="02.10.2024" link="http://www.ems.kz/sites/default/files/statyi/pdf/sik_oktyabr_persona_s_foto.pdf"></LastNews>
                            <LastNews image="https://img.freepik.com/free-photo/business-adviser-analyzing-financial-figures-denoting-progress-work-company_1423-97.jpg?ga=GA1.1.1284052089.1726738623&semt=ais_hybrid" text="Путь к предприятию нового типа..." date="19.10.2024" link="http://www.ems.kz/sites/default/files/statyi/pdf/Stand_i_kach_k_pred_nov_tipa.pdf"></LastNews>
                        </div>
                        <div className="double">
                            <LastNews image="https://img.freepik.com/free-photo/executives-negotiating-meeting_1098-508.jpg?ga=GA1.1.1284052089.1726738623&semt=ais_hybrid" text="Роль высшего руководства в..." date="25.10.2024" link="http://www.ems.kz/sites/default/files/statyi/pdf/Rol_vysshego_rukovodstva_CK_8.09.pdf"></LastNews>
                            <LastNews image="https://img.freepik.com/free-photo/working-process-startup-businessman-working-wood-table-with-new-finance-project-modern-notebook-table-pen-holding-hand_1423-50.jpg?ga=GA1.1.1284052089.1726738623&semt=ais_hybrid" text="Нужны ли нам системы менеджмента?" date="02.07.2024" link="http://www.ems.kz/sites/default/files/statyi/pdf/Nuzhny%20li%20nam%20sistemy%20menedjmenta.pdf"></LastNews>
                        </div>
                        <div className="double">
                            <LastNews image="https://img.freepik.com/free-photo/businessman-with-leather-briefcase_53876-101890.jpg?ga=GA1.1.1284052089.1726738623&semt=ais_hybrid" text="Взаимоотношения в коллективе как фактор..." date="01.08.2024" link="http://www.ems.kz/sites/default/files/statyi/pdf/Vzaimootnoshenie_v_kolektive_kak_faktor_CK_7.10_0.pdf"></LastNews>
                            <LastNews image="https://img.freepik.com/free-photo/businessman-hands-using-cell-phone-with-financial-report-graph_1150-754.jpg?ga=GA1.1.1284052089.1726738623&semt=ais_hybrid" text="Вместо власти ответственность и..." date="30.06.2024" link="http://www.ems.kz/sites/default/files/statyi/pdf/02_2013_Rol_analiza.pdf"></LastNews>
                        </div>
                        </>
                    )}
                    {tab === 'news' && (
                        <>
                        <LastNews image="https://img.freepik.com/free-photo/close-up-glasses-annual-summary_1098-3466.jpg?ga=GA1.1.1284052089.1726738623&semt=ais_hybrid" text="Особенности и размышления о новой..." date="17/07/2024" link="http://www.ems.kz/sites/default/files/statyi/pdf/GOSTANDART_%E2%84%962_0.pdf"></LastNews>
                        <LastNews image="https://img.freepik.com/free-photo/business-concept-with-copy-space-office-desk-table-with-pen-focus-analysis-chart-computer-notebook-cup-coffee-desk-vintage-tone-retro-filter-selective-focus_1418-552.jpg?ga=GA1.1.1284052089.1726738623&semt=ais_hybrid" text="Почему ISO не всегда находит..." date="13/09/2024" link="http://www.ems.kz/sites/default/files/statyi/pdf/GOSTANDART_2014.pdf"></LastNews>
                        </>
                    )}
                    {tab === 'qualities' && (
                        <>
                        <LastNews image="https://img.freepik.com/free-photo/business-concept-with-copy-space-office-desk-table-with-pen-focus-analysis-chart-computer-notebook-cup-coffee-desk-vintage-tone-retro-filter-selective-focus_1418-680.jpg?ga=GA1.1.1284052089.1726738623&semt=ais_hybrid" text="Удовлетворенность потребителя ва..." date="07/09/2024" link=""></LastNews>
                        <LastNews image="https://img.freepik.com/free-photo/business-data-analysis-graph_53876-14765.jpg?ga=GA1.1.1284052089.1726738623&semt=ais_hybrid" text="Удовлетворенность потребителя ва..." date="18/09/2024" link=""></LastNews>
                        <LastNews image="https://img.freepik.com/free-photo/high-angle-business-composition-with-colorful-graphics_23-2148488609.jpg?ga=GA1.1.1284052089.1726738623&semt=ais_hybrid" text="Удовлетворенность потребителя ва..." date="27/10/2024" link=""></LastNews>
                        </>
                    )}
                
            </div>
        </main>
    )
}