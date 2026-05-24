import type { ClinicData, DoctorItem, FeatureItem, PriceCategory, ReviewItem, ServiceItem, StatItem } from "./types";

export const clinic: ClinicData = {
  name: "Стоматология НАВИТИ",
  tagline: "Заботливая стоматология в центре Петербурга",
  description:
    "Вот уже более 17 лет команда НАВИТИ оказывает все виды стоматологических услуг с любовью к каждому пациенту.",
  address: "ул. Восстания, 17, Санкт-Петербург, 191036",
  metro: "м. Площадь Восстания — 4 мин, м. Маяковская — 7 мин",
  phone1: "+7 (921) 970-80-40",
  phone2: "+7 (812) 579-14-31",
  whatsapp: "https://wa.me/79219708040",
  vk: "https://vk.com/naviti.dent",
  hours: "Пн–Пт 10:00–20:00",
  rating: 4.8,
  yearsOfWork: 17,
};

export const navLinks = [
  { id: "services", label: "Услуги" },
  { id: "doctors", label: "Врачи" },
  { id: "prices", label: "Прайс" },
  { id: "reviews", label: "Отзывы" },
  { id: "contacts", label: "Контакты" },
];

export const stats: StatItem[] = [
  { value: "17+", label: "лет работы" },
  { value: "4.8", label: "рейтинг 2GIS" },
  { value: "5", label: "специалистов" },
  { value: "0 ₽", label: "первичная консультация" },
];

export const services: ServiceItem[] = [
  { title: "Терапия", icon: "Stethoscope", description: "Лечение кариеса, пульпита, периодонтита", color: "bg-blue-100 text-primary" },
  { title: "Гигиена", icon: "Sparkles", description: "Профчистка, отбеливание Zoom 4", color: "bg-yellow-100 text-primary" },
  { title: "Ортопедия", icon: "Crown", description: "Коронки, виниры, протезы", color: "bg-amber-100 text-primary" },
  { title: "Хирургия", icon: "Scissors", description: "Удаление, имплантация, синус-лифтинг", color: "bg-slate-100 text-primary" },
  { title: "Ортодонтия", icon: "Smile", description: "Брекеты, элайнеры, ретейнеры", color: "bg-emerald-100 text-primary" },
  { title: "Детская", icon: "Baby", description: "Лечение для детей, «Зубная Фея»", color: "bg-pink-100 text-primary" },
  { title: "Эстетика", icon: "Wand2", description: "Реставрация, виниры, отбеливание", color: "bg-violet-100 text-primary" },
  { title: "Пародонтология", icon: "Shield", description: "Лечение дёсен, кюретаж", color: "bg-cyan-100 text-primary" },
  { title: "Имплантация", icon: "Zap", description: "Dentium, Nobel — под ключ", color: "bg-slate-100 text-primary" },
];

export const whyUsFeatures: FeatureItem[] = [
  { title: "Индивидуальный подход", description: "Слушаем и понимаем каждого пациента", icon: "Heart" },
  { title: "17 лет опыта", description: "Тысячи довольных пациентов", icon: "Award" },
  { title: "Квалифицированные врачи", description: "Специалисты всех направлений", icon: "Shield" },
  { title: "Современное оборудование", description: "CAD/CAM, Zoom 4, цифровой снимок", icon: "Cpu" },
  { title: "Несколько вариантов лечения", description: "Подберём под любой бюджет", icon: "MessageCircle" },
  { title: "Центр города", description: "4 минуты от метро Площадь Восстания", icon: "MapPin" },
];

export const doctors: DoctorItem[] = [
  {
    name: "Александр Сергеевич Величко",
    role: "Ортопед, имплантолог",
    experience: "15+ лет",
    photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&face",
  },
  {
    name: "Наталья Викторовна",
    role: "Терапевт",
    experience: "с 2009 г.",
    photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&face",
  },
  {
    name: "Детский стоматолог",
    role: "«Зубная Фея» · Педиатрия",
    experience: "Опыт с детьми",
    photo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&face",
  },
];

export const priceCategories: PriceCategory[] = [
  {
    id: "therapy",
    title: "Терапия",
    items: [
      { service: "Лечение кариеса", price: "от 3 400 ₽" },
      { service: "Реставрация зуба", price: "6 500 ₽" },
      { service: "Лечение пульпита", price: "от 6 500 ₽" },
      { service: "Прицельный снимок", price: "300 ₽" },
    ],
  },
  {
    id: "hygiene",
    title: "Гигиена",
    items: [
      { service: "Комплексная гигиена", price: "5 000 ₽" },
      { service: "Отбеливание Zoom 4", price: "24 900 ₽" },
    ],
  },
  {
    id: "orthopedics",
    title: "Ортопедия",
    items: [
      { service: "Металлокерамическая коронка", price: "15 000 ₽" },
      { service: "Циркониевая коронка", price: "25 000 ₽" },
      { service: "Коронка E-max", price: "30 000 ₽" },
      { service: "Ультратонкий винир", price: "30 000 ₽" },
      { service: "Съёмный протез", price: "от 30 000 ₽" },
    ],
  },
  {
    id: "surgery",
    title: "Хирургия",
    items: [
      { service: "Удаление молочного зуба", price: "2 000 ₽" },
      { service: "Удаление однокорневого", price: "от 3 000 ₽" },
      { service: "Удаление ретинированного", price: "8 000 ₽" },
    ],
  },
  {
    id: "implantation",
    title: "Имплантация",
    items: [
      { service: "Коронка на Dentium", price: "25 000 ₽" },
      { service: "Коронка на Nobel", price: "от 30 000 ₽" },
      { service: "Синус-лифтинг", price: "от 19 500 ₽" },
    ],
  },
];

export const reviews: ReviewItem[] = [
  {
    quote: "Профессионалы и очень уютная атмосфера. Лечат так, что видеться придётся редко!",
    author: "Впервые Слышу",
    details: "2020 · ★★★★★",
    rating: 5,
  },
  {
    quote: "НАВИТИ спасает мои зубки уже 15 лет! Замечательные люди и отличные специалисты.",
    author: "Екатерина Филиппова",
    details: "★★★★★",
    rating: 5,
  },
  {
    quote: "Александр Сергеевич — суперпрофессионал! Предлагает варианты по цене, объясняет каждый шаг.",
    author: "Новикова Елена",
    details: "2022 · ★★★★★",
    rating: 5,
  },
  {
    quote: "Первый раз пришла в НАВИТИ в 2009 году. Страшно было очень! Но внимание и доброта растопили страх.",
    author: "Ольга Зазуленко",
    details: "★★★★★",
    rating: 5,
  },
  {
    quote: "Желаю врачам НАВИТИ крепкого здоровья! Замечательная клиника и прекрасные врачи!",
    author: "Ladi Nina",
    details: "★★★★★",
    rating: 5,
  },
];
