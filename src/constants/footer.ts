import React from 'react';
import { 
  FacebookIcon, 
  TwitterIcon, 
  TelegramIcon, 
  RedditIcon, 
  LinkedInIcon, 
  YouTubeIcon, 
  DiscordIcon, 
  InstagramIcon 
} from '@/components/SocialIcons';

export const FOOTER_SECTIONS = [
  {
    title: "Investieren",
    links: [
      "Kryptowährungen",
      "Krypto-Indizes", 
      "Aktien*",
      "ETFs*",
      "Edelmetalle",
      "Rohstoffe*"
    ]
  },
  {
    title: "Profitieren",
    links: [
      "Cash Plus",
      "Staking",
      "BEST",
      "Tell-a-Friend",
      "Affiliate werden"
    ]
  },
  {
    title: "Lernen",
    links: [
      "Kryptowährungen",
      "Investieren",
      "Finanzplanung",
      "Blockchain",
      "Krypto-Sicherheit"
    ]
  },
  {
    title: "Features",
    links: [
      "Club",
      "Payments",
      "Sparplan",
      "Swap",
      "Sicherheit"
    ]
  }
];

export const PRODUKTE_LINKS = [
  "Card",
  "BEST",
  "Pantos",
  "App",
  "Bitpanda Custody"
];

export const BITPANDA_TECH_LINKS = [
  "Home",
  "Plattform",
  "Kunden",
  "Partner",
  "Einblicke"
];

export const COMPANY_LINKS = ["Über uns", "Karriere", "Presse", "Blog", "Hilfe"];

export const SOCIAL_ICONS = [
  { 
    name: "Facebook", 
    icon: React.createElement(FacebookIcon)
  },
  { 
    name: "Twitter", 
    icon: React.createElement(TwitterIcon)
  },
  { 
    name: "Telegram", 
    icon: React.createElement(TelegramIcon)
  },
  { 
    name: "Reddit", 
    icon: React.createElement(RedditIcon)
  },
  { 
    name: "LinkedIn", 
    icon: React.createElement(LinkedInIcon)
  },
  { 
    name: "YouTube", 
    icon: React.createElement(YouTubeIcon)
  },
  { 
    name: "Discord", 
    icon: React.createElement(DiscordIcon)
  },
  { 
    name: "Instagram", 
    icon: React.createElement(InstagramIcon)
  }
];

export const LEGAL_LINKS = [
  "Impressum",
  "Datenschutzerklärung", 
  "Geschäftsbedingungen und Richtlinien",
  "Hinweisgeber",
  "Complaints",
  "Bug Bounty",
  "Cookie settings"
];

export const MEDIA_LOGOS = [
  {
    name: "Bloomberg",
    src: "https://sbcdn.bitpanda.com/500x102/ad04ac45f1/bloomberg-logo-white.png",
    alt: "Bloomberg"
  },
  {
    name: "TechCrunch", 
    src: "https://sbcdn.bitpanda.com/500x71/9be9840de7/techcrunch-logo-white.png",
    alt: "TechCrunch"
  },
  {
    name: "CNBC",
    src: "https://sbcdn.bitpanda.com/500x68/08e67f4838/cnbc-logo-white.png", 
    alt: "CNBC"
  }
];
