
export interface PortfolioData {
    meta: {
        title: string;
        description: string;
    };
    header: {
        brandName: string;
        navItems: {
            id: string;
            label: string;
        }[];
    };
    hero: {
        headline: {
            line1: string;
            line2: string;
            line3: string;
            line4: string;
        };
        subheadline: string;
        ctaButtons: {
            primary: {
                text: string;
                link: string;
            };
            secondary: {
                text: string;
                scrollTo: string;
            };
        };
        codeBlock: {
            fileName: string;
            variable: string;
            name: string;
            skills: string[];
            passion: string;
        };
    };
    about: {
        title: string;
        paragraphs: string[];
        subtitle: string;
        note: string;
        cards: {
            id: number;
            icon: string;
            title: string;
            description: string;
        }[];
    };
    skills: {
        title: string;
        description: string;
        categories: {
            frontend: {
                title: string;
                skills: {
                    id: number;
                    name: string;
                    level: string;
                }[];
            };
            backend: {
                title: string;
                skills: {
                    id: number;
                    name: string;
                    level: string;
                }[];
            };
            devops: {
                title: string;
                tools: string[];
            };
        };
    };
    projects: {
        title: string;
        description: string;
        projects: {
            id: number;
            title: string;
            description: string;
            technologies: string[];
            demoLink: string;
            codeLink: string;
            imageUrl: string;
            hint: string;
        }[];
        viewAllButtonText: string;
    };
    experience: {
        title: string;
        description: string;
        experiences: {
            id: number;
            company: string;
            position: string;
            period: string;
            location: string;
            employmentType: string;
            description: string;
            achievements: {
                title: string;
                items: string[];
            };
            technologies: string[];
        }[];
    };
    testimonials: {
        title: string;
        description: string;
        testimonials: {
            id: number;
            name: string;
            title: string;
            quote: string;
            avatarUrl: string;
            rating: number;
            hint: string;
        }[];
    };
    contact: {
        title: string;
        description: string;
        info: {
            title: string;
            email: {
                label: string;
                address: string;
            };
            phone: {
                label: string;
                number: string;
            };
            location: {
                label: string;
                value: string;
            };
        };
        form: {
            fields: {
                name: string;
                label: string;
                type: string;
                placeholder: string;
            }[];
            submitButtonText: string;
            success: {
                title: string;
                message: string;
            };
        };
        tip: {
            title: string;
            description: string;
        };
    };
    footer: {
        brandName: string;
        shortDescription: string;
        quickLinks: {
            title: string;
            links: {
                href: string;
                label: string;
            }[];
        };
        socialLinks: {
            title: string;
            links: {
                name: string;
                url: string;
            }[];
        };
        copyright: string;
    };
}
