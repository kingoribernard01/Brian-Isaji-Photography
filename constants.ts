

import { NavItem, PortfolioItem, Project, Testimonial } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { 
    id: 1, 
    title: 'Grazing Cattle', 
    category: 'Conservation', 
    imageUrl: 'https://i.postimg.cc/j5ch2Cs6/A-cow.jpg', 
    size: 'large' 
  },
  { 
    id: 2, 
    title: 'The Homestead', 
    category: 'Travel', 
    imageUrl: 'https://i.postimg.cc/k4syGDJC/A-farm.jpg', 
    size: 'medium' 
  },
  { 
    id: 3, 
    title: 'University Lecture', 
    category: 'Event', 
    imageUrl: 'https://i.postimg.cc/PJqQwhJG/A-lecturer-at-Multimedia-University-of-Kenya.jpg', 
    size: 'medium' 
  },
  { 
    id: 4, 
    title: 'Poultry Portrait', 
    category: 'Conservation', 
    imageUrl: 'https://i.postimg.cc/vTmtVMBJ/Chicken.jpg', 
    size: 'large' 
  },
  { 
    id: 5, 
    title: 'Lush Fields', 
    category: 'Travel', 
    imageUrl: 'https://i.postimg.cc/SsdGRjyd/Farm.jpg', 
    size: 'medium' 
  },
  { 
    id: 6, 
    title: 'Ceremonial Gifting', 
    category: 'Event', 
    imageUrl: 'https://i.postimg.cc/yxNyZBxV/Gifting-session-at-Multimedia-University-of-Kenya.jpg', 
    size: 'small' 
  },
  {
    id: 7,
    title: 'Village Walk',
    category: 'Culture',
    imageUrl: 'https://i.postimg.cc/rmj9sz8Z/In-a-village.jpg',
    size: 'large'
  },
  {
    id: 8,
    title: 'Sunflower Season',
    category: 'Conservation',
    imageUrl: 'https://i.postimg.cc/PxyMJNt3/Of-sunflowers.jpg',
    size: 'small'
  },
  {
    id: 9,
    title: 'Lake Crossing',
    category: 'Travel',
    imageUrl: 'https://i.postimg.cc/pr1YQ759/On-a-boat.jpg', 
    size: 'medium'
  },
  {
    id: 10,
    title: 'The Flock',
    category: 'Conservation',
    imageUrl: 'https://i.postimg.cc/RFdThqS5/Sheep.jpg',
    size: 'medium'
  },
  {
    id: 11,
    title: 'Guest Speaker',
    category: 'Event',
    imageUrl: 'https://i.postimg.cc/qq7x30q7/Speaker-at-Multimedia-University-of-Kenya.jpg',
    size: 'large'
  },
  {
    id: 12,
    title: 'Closing Remarks',
    category: 'Event',
    imageUrl: 'https://i.postimg.cc/Kjsr7V3n/Vote-of-thanks-during-an-event.jpg',
    size: 'small'
  },
  {
    id: 13,
    title: 'Mother Hen',
    category: 'Conservation',
    imageUrl: 'https://i.postimg.cc/Y0yfNVLh/Worth-shot-of-hens-and-chicks.jpg',
    size: 'medium'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Cultural Heritage & Community',
    description: 'A vibrant documentation of ceremonial traditions at Multimedia University. This series focuses on the warmth of exchange, the texture of traditional attire, and the palpable joy of shared community moments—freezing the energy of the event in time.',
    imageUrl: 'https://i.postimg.cc/yxNyZBxV/Gifting-session-at-Multimedia-University-of-Kenya.jpg'
  },
  {
    id: 2,
    title: 'Event Highlights: Visual Pulse',
    description: 'A cinematic recap capturing the essence of live events. From the anticipation of the crowd to the peak moments of performance, this reel demonstrates a keen eye for timing, motion, and the electric atmosphere of the day.',
    imageUrl: 'https://img.youtube.com/vi/NKTE3OrfQOA/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/NKTE3OrfQOA'
  },
  {
    id: 3,
    title: 'The Silent Crossing',
    description: 'An atmospheric exploration of travel and solitude. Captured on open waters, this project plays with negative space, reflection, and the quiet determination of the journey, highlighting the beauty found in transit and stillness.',
    imageUrl: 'https://i.postimg.cc/pr1YQ759/On-a-boat.jpg'
  },
  {
    id: 4,
    title: 'Corporate Feature: Brand Story',
    description: 'A polished visual narrative designed for corporate communication. This project intertwines interviews with B-roll footage to construct a compelling story that aligns with brand identity and strategic messaging.',
    imageUrl: 'https://img.youtube.com/vi/Db7ltsyqXaw/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/Db7ltsyqXaw'
  },
  {
    id: 5,
    title: 'Rural Rhythms',
    description: 'A conservation-focused narrative highlighting the timeless bond between pastoral life and nature. These frames celebrate the simple, grounded beauty of the countryside and its inhabitants, showcasing the raw texture and dignity of agricultural life.',
    imageUrl: 'https://i.postimg.cc/j5ch2Cs6/A-cow.jpg'
  },
  {
    id: 6,
    title: 'Strategic Planning Documentation',
    description: 'A comprehensive overview of project workflows and event organization strategies. This document showcases the meticulous planning and structural foundation that goes into successful large-scale productions.',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop', // Placeholder for document
    externalLink: 'https://drive.google.com/file/d/1jCQ7YJYfdcG0tThoQO9ve059P6UgRAVL/view'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "Brian captured the soul of our wedding in Diani. The sunset shots by the ocean were magical, and he made our families feel so at ease throughout the entire celebration.",
    author: "Zainab & Omar",
    location: "Diani Beach Wedding"
  },
  {
    id: 2,
    quote: "We needed professional branding photos for our new offices in Westlands. Brian's eye for lighting and detail gave us exactly the sophisticated, modern look we wanted.",
    author: "Kamanu Associates",
    location: "Corporate Branding"
  },
  {
    id: 3,
    quote: "The safari portraits in Maasai Mara are breathtaking. He didn't just take photos; he told the story of our adventure in a way we will cherish forever. Asante sana!",
    author: "The Williams Family",
    location: "Maasai Mara Safari"
  },
  {
    id: 4,
    quote: "Kazi safi sana! Brian brought out the vibe of our traditional ceremony in Lamu perfectly. The colors and emotions were just... wow.",
    author: "Juma & Amani",
    location: "Lamu Traditional Wedding"
  },
  {
    id: 5,
    quote: "I needed a portfolio update and Brian made me feel like a superstar. Picha ni kali, professionalism iko juu. Definitely booking again.",
    author: "Sarah Otieno",
    location: "Kilimani Portrait Session"
  },
  {
    id: 6,
    quote: "Tulifurahia sana photoshoot ya familia yetu Runda. He was patient with the kids and the photos came out looking natural and timeless.",
    author: "Baraka & Wanjiku",
    location: "Runda Family Shoot"
  },
  {
    id: 7,
    quote: "Our tech conference in Gigiri needed sharp, dynamic coverage. Brian captured the energy of the speakers and the audience perfectly.",
    author: "TechSummit Africa",
    location: "Gigiri Conference"
  },
  {
    id: 8,
    quote: "Asante sana Brian for capturing Mum's 60th birthday in Naivasha. You didn't just take pictures, you preserved memories.",
    author: "Mama Njoroge & Family",
    location: "Naivasha Celebration"
  },
  {
    id: 9,
    quote: "The photos for our Airbnb listing in Mombasa have doubled our bookings. He knows how to showcase space and light beautifully.",
    author: "David K.",
    location: "Mombasa Real Estate"
  },
  {
    id: 10,
    quote: "Vibe ya pwani ilishikwa vizuri sana. The street photography shoot in Old Town was artistic and raw. Umetisha sana bro!",
    author: "Fatuma M.",
    location: "Mombasa Old Town"
  },
  {
    id: 11,
    quote: "Professional, creative, and strictly on time. The aerial shots of our eco-lodge in Tsavo are simply stunning visuals.",
    author: "EcoLodges Kenya",
    location: "Tsavo Aerial Project"
  },
  {
    id: 12,
    quote: "Hii ni kazi safi! The wedding photos in Karen were beyond our expectations. Uliweza!",
    author: "Kevin & Brenda",
    location: "Karen Wedding"
  },
  {
    id: 13,
    quote: "Best photographer in Nairobi hands down. Picha zinaongea. Professionalism top notch.",
    author: "Creative Hub",
    location: "Nairobi Studio"
  },
  {
    id: 14,
    quote: "Tulipenda sana vile uliturelax wakati wa shoot. The graduation photos are amazing.",
    author: "Faith M.",
    location: "Juja Graduation"
  },
  {
    id: 15,
    quote: "Umejua kazi yako. The corporate headshots have elevated our brand image seriously.",
    author: "Nexus Corp",
    location: "Upper Hill Corporate"
  },
  {
    id: 16,
    quote: "Amazing shots of the Rift Valley rally. Ulinasa action vizuri sana. Hatari!",
    author: "Rally Enthusiasts Club",
    location: "Naivasha Rally"
  },
  {
    id: 17,
    quote: "Hatukudhani picha zingetoka hivi. You made our engagement shoot in Karura Forest magical.",
    author: "Ian & Joy",
    location: "Karura Forest"
  },
  {
    id: 18,
    quote: "Noma sana! The nightlife shots for our club launch were electric. Big up!",
    author: "The Loft",
    location: "Westlands Nightlife"
  },
  {
    id: 19,
    quote: "Asante kwa kazi nzuri. Our family reunion in Nanyuki is now immortalized beautifully.",
    author: "The Kariukis",
    location: "Nanyuki Reunion"
  }
];
