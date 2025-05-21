import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Maira in Progress",
  DESCRIPTION: "a personal blog about everything and nothing at all",
  EMAIL: "hello@mairamartins.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  EMOJI: "🌱",
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "A personal blog about everything and nothing at all",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Short essays about random little things",
};

export const TAGS: Metadata = {
  TITLE: "Tags",
  DESCRIPTION:
    "Topics I've been writing about",
};

export const SOCIALS: Socials = [
  {
    NAME: "instagram",
    HREF: "https://instagram.com/mairamartinsk",
  },
  {
    NAME: "github",
    HREF: "https://github.com/mairamartinsk",
  },
  {
    NAME: "RSS",
    HREF: "/rss.xml",
  },
];

export const NOW: Metadata = {
  TITLE: "Now page",
  DESCRIPTION: "What I'm currently doing, thinking, reading...",
};