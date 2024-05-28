import React from 'react';

function MainElement({ src, alt, linkText, href, additionalLinks }) {
   return (
      <div className='main-element'>
         <img src={src} alt={alt}></img>
         <a href={href}><span className='section__text-header'>{linkText}</span></a>
         {additionalLinks && (
            <div className='main-element-links'>
               {additionalLinks.map((link, index) => (
                  <a key={index} href={link.href}><span>{link.text}</span></a>
               ))}
            </div>
         )}
      </div>
   );
}

const sectionElementsData = [
   {
      src: "https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/noutbuki.png",
      alt: "Ноутбуки",
      linkText: "Ноутбуки",
      href: "#"
   },
   {
      src: "https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/kompyutery.png",
      alt: "Комп'ютери, неттопи, моноблоки",
      linkText: "Комп'ютери, неттопи, моноблоки",
      href: "#"
   },
   {
      src: "https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/monitory.png",
      alt: "Монітори",
      linkText: "Монітори",
      href: "#"
   },
   {
      src: "https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/tovary-dlya-gejmerov.png",
      alt: "Gaming",
      linkText: "Gaming",
      href: "#"
   },
   {
      src: "https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/planshety.png",
      alt: "Планшети",
      linkText: "Планшети",
      href: "#"
   },
   {
      src: "https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/kabeli-i-perekhodniki.png",
      alt: "Кабелі та перехідники",
      linkText: "Кабелі та перехідники",
      href: "#"
   },
   {
      src: "https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/kompyuternye-komplektuyushchie.png",
      alt: "Комп'ютерні комплектуючі",
      linkText: "Комп'ютерні комплектуючі",
      href: "#",
      additionalLinks: [
         { href: '#', text: 'SSD' },
         { href: '#', text: 'Системи охолодження' },
         { href: '#', text: 'Відеокарти' },
         { href: '#', text: 'Оперативна пам\'ять' },
         { href: '#', text: 'Процесори' },
         { href: '#', text: 'Материнські плати' },
         { href: '#', text: 'Жорсткі диски' },
         { href: '#', text: 'Блоки живлення' }
      ]
   },
   {
      src: "https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/setevoe-oborudovanie.png",
      alt: "Мережеве обладнання",
      linkText: "Мережеве обладнання",
      href: "#",
      additionalLinks: [
         { href: '#', text: 'Маршрутизатори' },
         { href: '#', text: 'Комутатори' },
         { href: '#', text: 'Мережеві адаптери' },
         { href: '#', text: 'Пасивне мережеве обладнання' },
         { href: '#', text: 'Точки доступу Wi-Fi' },
         { href: '#', text: 'Ретранслятори Wi-Fi сигналу' },
         { href: '#', text: 'Патч-корди' }
      ]
   },
   {
      src: "https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/naushniki-i-aksessuary.png",
      alt: "Навушники та аксесуари",
      linkText: "Навушники та аксесуари",
      href: "#",
      additionalLinks: [
         { href: '#', text: 'Навушники' },
         { href: '#', text: 'TWS' },
         { href: '#', text: 'Ігрові гарнітури' },
         { href: '#', text: 'Вакуумні навушники' },
         { href: '#', text: 'Навушники вкладиші' },
         { href: '#', text: 'Накладні навушники' },
         { href: '#', text: 'Повнорозмірні навушники' },
         { href: '#', text: 'Підсилювачі для навушників' },
         { href: '#', text: 'Аксесуари для навушників' }
      ]
   },
   {
      src: "https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/klaviatury-i-myshi.png",
      alt: "Клавіатури та миші",
      linkText: "Клавіатури та миші",
      href: "#",
      additionalLinks: [
         { href: '#', text: 'Комп\'ютерні миші' },
         { href: '#', text: 'Килимки для миші' },
         { href: '#', text: 'Клавіатури' },
         { href: '#', text: 'Комплекти клавіатури та миші' },
         { href: '#', text: 'Аксесуари для клавіатур та мишок' }
      ]
   },
   {
      src: "https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/aksessuari-dlia-elektronyky.png",
      alt: "Аксесуари для електроніки",
      linkText: "Аксесуари для електроніки",
      href: "#",
      additionalLinks: [
         { href: '#', text: 'USB флешки' },
         { href: '#', text: 'Хаби і кардридери' },
         { href: '#', text: 'Аксесуари для ПК і ноутбуків' },
         { href: '#', text: 'Комплектуючі для ноутбуків' },
         { href: '#', text: 'Мережеві фільтри' },
         { href: '#', text: 'Чохли та клавіатури для планшетів' },
         { href: '#', text: 'Сумки, рюкзаки та чохли для ноутбуків' },
         { href: '#', text: 'Очисні засоби' }
      ]
   },
   {
      src: "https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/ofisnaya-tekhnika.png",
      alt: "Офісна техніка",
      linkText: "Офісна техніка",
      href: "#",
      additionalLinks: [
         { href: '#', text: 'Принтери і БФП' },
         { href: '#', text: 'Сканери' },
         { href: '#', text: 'Витратні матеріали для принтерів' },
         { href: '#', text: 'Дошки, фліпчарти' }
      ]
   }
];

export class Main extends React.Component {
   render() {
      return (
         <div className='section'>
            <div className='main-elements'>
               {sectionElementsData.map((element, index) => (
                  <MainElement key={index} {...element} />
               ))}
            </div>
         </div>
      );
   }
}
