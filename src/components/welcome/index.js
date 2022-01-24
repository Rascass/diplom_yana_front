import { ImageList, ImageListItem } from "@mui/material";
import React from "react";
import img from "./arizona_3.jpg";
import "./style.css";

export default function Welcome() {
	return (
		<div className='background' style={{ backgroundImage: `url(${img})` }}>
			<div className='content'>
				<section className='about-us'>
					<div className='about'>О нас</div>
					<div className='about-text'>
						Прогулки верхом на лошади по живописным местам рядом с Брестом,
						верховая езда (с обучением и самостоятельно), развлекательные
						мероприятия и незабываемые впечатления, катание на лошадях для всех
						возрастов — это только небольшая часть того, что можно получить,
						посетив конно-спортивный клуб «Лошадемании». Наша конная школа
						верховой езды с радость научит и детей, и взрослых управлять лошадью
						и хорошо держаться в седле. Учитель верховой езды определит, нужны
						вам профессиональные верховые лошади либо лошади для начинающих.
						Неспешные прогулки на лошадях в поля и леса рядом с Брестом подарят
						наслаждение от верховой езды. Наши инструкторы при необходмости
						будут рядом и обеспечат комфортную и безопасную прогулку, научат
						базовым навыкам обращения с милыми животными. Для маленьких детей
						организовывается катание на лошадях на небольшие расстояния.
						Фотосессии с лошадьми — это отличная возможность оставить не только
						в памяти, но и на бумаге приятные моменты из жизни. В аренду можно
						взять как одну лошадь, так и несколько. Отличный вариант для
						свадебных фото, Love Story, портфолио или просто для личной
						коллекции. Проведение праздников, дней рождений, корпоративов на
						природе. В увлекательной программе: знакомство с конюшней,
						представление от казаков с элементами джигитовки, прогулки верхом на
						лошадях, пикник. Хороший вариант для детских праздников,
						корпоративов, выездов типа Team Building. Конный клуб «Кони Igo» в
						Бресте будет рад видеть вас!
					</div>
				</section>
				<section>
					<div className='about-us'>
						<div className='clients'>Наши довольные клиенты</div>
					</div>

					<ImageList
						sx={{
							width: "600px",
							height: "auto",
							display: "grid",
							margin: "auto",
							marginBottom: "50px",
						}}
						cols={4}
						rowHeight={164}>
						{clients.map((item) => (
							<ImageListItem key={item.img}>
								<img
									src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
									srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
									alt={item.title}
									loading='lazy'
								/>
							</ImageListItem>
						))}
					</ImageList>
					<div className='about-us'>
						<div className='price'>Услуги, акции, сертификаты</div>
					</div>
					<ImageList
						sx={{
							width: "600px",
							display: "grid",
							height: "600px",
							margin: "auto",
						}}
						cols={2}
						rowHeight={164}>
						{price.map((item) => (
							<ImageListItem key={item.img}>
								<img
									src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
									srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
									alt={item.title}
									loading='lazy'
								/>
							</ImageListItem>
						))}
					</ImageList>
					<div>1</div>
				</section>
			</div>
		</div>
	);
}

const clients = [
	{
		img: "http://loshademania.by/wp-content/uploads/2016/04/alexandra_new2.jpg",
		title: "Breakfast",
	},
	{
		img: "http://loshademania.by/wp-content/uploads/2016/04/zhanna.jpg",
		title: "Burger",
	},
	{
		img: "http://loshademania.by/wp-content/uploads/2016/04/tatyana.jpg",
		title: "Camera",
	},
	{
		img: "http://loshademania.by/wp-content/uploads/2016/04/lyuba.jpg",
		title: "Coffee",
	},
	{
		img: "http://loshademania.by/wp-content/uploads/2016/04/verhom_0011.jpg",
		title: "Fern",
	},
	{
		img: "http://loshademania.by/wp-content/uploads/2016/04/fotoset_001.jpg",
		title: "Mushrooms",
	},
	{
		img: "http://loshademania.by/wp-content/uploads/2016/04/DSC_9441.jpg",
		title: "Tomato basil",
	},
	{
		img: "http://loshademania.by/wp-content/uploads/2016/04/deti_001.jpg",
		title: "Sea star",
	},
];

const price = [
	{
		img: "http://loshademania.by/wp-content/uploads/2016/04/verhom-price7-480x480.jpg",
		title: "Hats",
	},
	{
		img: "http://loshademania.by/wp-content/uploads/2016/04/fotosessii_s_loshadmi-price7-480x480.jpg",
		title: "Honey",
	},
	{
		img: "http://loshademania.by/wp-content/uploads/2016/04/zanyatie-price6-480x480.jpg",
		title: "Basketball",
	},
	{
		img: "http://loshademania.by/wp-content/uploads/2016/04/sertifikat1.jpg",
		title: "Bike",
	},
];
