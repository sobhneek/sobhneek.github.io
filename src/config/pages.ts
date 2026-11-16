import type { PagesConfig } from "../types";

export const PAGES: PagesConfig = {
    home: {
        title: "",
        subtitle: "" ,
        isActive: true,
    },
    blog: {
        title: "Blog",
        subtitle: "Thoughts on physics, philosophy, and music.",
        isActive: false,
    },
    publications: {
        title: "",
        subtitle: " This website is still under construction****",
        isActive: true,
    },
    talks: {
        title: "Talks & Presentations",
        subtitle: "Public lectures, colloquia, and conference presentations.",
        isActive: false,
    },
    projects: {
        title: "Code & Projects",
        subtitle: "Open source contributions and technological experiments.",
        isActive: false,
    },
    teaching: {
        title: "Teaching",
        subtitle: "Academic courses and educational materials.",
        isActive: false,
    },
    tags: {
        title: "Tags",
        subtitle: "Explore content by topic.",
        isActive: false,
    },
    cv: {
        title: "Curriculum Vitae",
        subtitle: "",
        isActive: true,
    },
};
