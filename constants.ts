
import { NavItem, PortfolioItem, Project, Testimonial } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { 
    id: 1, 
    title: 'Mara Sunset', 
    category: 'Travel', 
    imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop', 
    size: 'large' 
  },
  { 
    id: 2, 
    title: 'Maasai Heritage', 
    category: 'Culture', 
    imageUrl: 'https://images.unsplash.com/photo-1533158307587-828f0a76ef93?q=80&w=1000&auto=format&fit=crop', 
    size: 'medium' 
  },
  { 
    id: 3, 
    title: 'Nairobi Essence', 
    category: 'Portrait', 
    imageUrl: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1000&auto=format&fit=crop', 
    size: 'medium' 
  },
  { 
    id: 4, 
    title: 'Savannah Vows', 
    category: 'Event', 
    imageUrl: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1200&auto=format&fit=crop', 
    size: 'large' 
  },
  { 
    id: 5, 
    title: 'Rift Valley Aerial', 
    category: 'Drone', 
    imageUrl: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?q=80&w=1200&auto=format&fit=crop', 
    size: 'medium' 
  },
  { 
    id: 6, 
    title: 'The Guardian', 
    category: 'Conservation', 
    imageUrl: 'https://images.unsplash.com/photo-1577176735509-c124cb1c67d6?q=80&w=1000&auto=format&fit=crop', 
    size: 'small' 
  },
  {
    id: 7,
    title: 'Safari Lodge Luxury',
    category: 'Real Estate',
    imageUrl: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1200&auto=format&fit=crop',
    size: 'large'
  },
  {
    id: 8,
    title: 'Samburu Colours',
    category: 'Culture',
    imageUrl: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1000&auto=format&fit=crop',
    size: 'small'
  },
  {
    id: 9,
    title: 'Coastline from Above',
    category: 'Drone',
    imageUrl: 'https://images.unsplash.com/photo-1588612502804-d4df5582c76a?q=80&w=1200&auto=format&fit=crop', 
    size: 'medium'
  },
  {
    id: 10,
    title: 'Contemporary Nairobi',
    category: 'Real Estate',
    imageUrl: 'https://images.unsplash.com/photo-1572970647614-23d9171f25b2?q=80&w=1200&auto=format&fit=crop',
    size: 'medium'
  },
  {
    id: 11,
    title: 'Lamu Streets',
    category: 'Travel',
    imageUrl: 'https://images.unsplash.com/photo-1565551694364-793575454b1f?q=80&w=1200&auto=format&fit=crop',
    size: 'large'
  },
  {
    id: 12,
    title: 'Wildlife Protector',
    category: 'Conservation',
    imageUrl: 'https://images.unsplash.com/photo-1518709414768-a88981a45e5d?q=80&w=1000&auto=format&fit=crop',
    size: 'small'
  },
  {
    id: 13,
    title: 'Golden Hour Joy',
    category: 'Portrait',
    imageUrl: 'https://images.unsplash.com/photo-1522512115668-c09775d6f424?q=80&w=1000&auto=format&fit=crop',
    size: 'medium'
  },
   {
    id: 14,
    title: 'Traditional Celebration',
    category: 'Event',
    imageUrl: 'https://images.unsplash.com/photo-1529328243610-d88691f1a58a?q=80&w=1200&auto=format&fit=crop',
    size: 'large'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Golden Hour Portrait Series',
    description: 'A heartfelt collection of portraits captured during the warm glow of sunset. Each frame was designed to highlight natural beauty, emotion, and authentic expression — celebrating people in their most effortless and honest moments.',
    imageUrl: 'https://images.unsplash.com/photo-1551406856-f83ce90558b9?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Urban Romance',
    description: 'A cinematic exploration of love in the city — blending architecture, movement, and connection into a series of images that feel intimate and alive.',
    imageUrl: 'https://images.unsplash.com/photo-1516962215378-7fa2e137ae91?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'The Minimalist Studio Collection',
    description: 'Clean, modern, and intentional. This studio project focuses on simplicity, shape, and light — revealing how powerful minimalism can be when paired with emotion.',
    imageUrl: 'https://images.unsplash.com/photo-1502160163363-23a780b9c565?q=80&w=1600&auto=format&fit=crop'
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