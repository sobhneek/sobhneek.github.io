import type { SocialLink } from "../types";

export const SOCIALS: SocialLink[] = [
    {
        name: "Github",
        href: "https://github.com/Sobhneek",
        linkTitle: `Follow me on Github`,
        isActive: true,
    },
    {
        name: "Mail",
        href: "mailto:sobhneek.hothi@mail.utoronto.ca",
        linkTitle: `Send me an email`,
        isActive: true,
    },
    {
        name: "Google Scholar",
        href: "https://scholar.google.ca/citations?user=xgjIGJAAAAAJ&hl=en",
        linkTitle: `Sobhneek Hothi on Google Scholar`,
        isActive: true,
    },

    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/sobhneek-hothi-502251217/",
        linkTitle: `Sobhneek Hothi on LinkedIn`,
        isActive: true,
    },
];

export const SOCIAL_ICONS: Record<string, string> = {
    Github: "Github",
    Mail: "Mail",
    Linkedin: "LinkedIn",
    "Google Scholar": "GoogleScholar"
};