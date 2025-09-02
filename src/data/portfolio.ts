import { PortfolioData } from "@/lib/types";

export const portfolioData: PortfolioData = {
    meta: {
        title: "Messias Vasconcelos | Desenvolvedor Full Stack",
        description: "Desenvolvedor Full Stack apaixonado por criar experiências digitais que funcionam.",
    },
    header: {
        brandName: "mvdevfullstack",
        navItems: [
            { id: 'sobre', label: 'Sobre' },
            { id: 'habilidades', label: 'Habilidades' },
            { id: 'projetos', label: 'Projetos' },
            { id: 'depoimentos', label: 'Depoimentos'},
            { id: 'contato', label: 'Contato' }
        ]
    },
    hero: {
        headline: {
            line1: "Desenvolvendo",
            line2: "experiências",
            line3: "digitais que",
            line4: "funcionam."
        },
        subheadline: "Fullstack Developer especializado em React, Node.js e soluções escaláveis. Transformo ideias em produtos digitais de alta qualidade.",
        ctaButtons: {
            primary: {
                text: "Fale comigo sobre seu projeto",
                link: "https://wa.me/5588999382994?text=Olá,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar."
            },
            secondary: {
                text: "Ver Projetos",
                scrollTo: "projetos"
            }
        },
        codeBlock: {
            fileName: "portfolio.tsx",
            variable: "developer",
            name: "Messias Vasconcelos",
            skills: ["React", "Node.js", "TypeScript"],
            passion: "Resolver problemas complexos"
        }
    },
    about: {
        title: "Sobre Mim",
        paragraphs: [
            "Sou um desenvolvedor full-stack curioso por natureza e com uma paixão por criar soluções que resolvem problemas reais. Minha jornada na programação começou com o desejo de transformar ideias em realidade digital, e desde então, tenho me aprofundado em tecnologias que me permitem construir aplicações robustas, escaláveis e eficientes.",
            "Acredito que a colaboração e a comunicação são a chave para o sucesso de qualquer projeto. Estou sempre em busca de novos desafios e oportunidades para aprender e crescer como profissional."
        ],
        subtitle: "Por que me escolher?",
        note: "Estou ciente de que sou novo no mercado de trabalho, mas a minha experiência na faculdade em Análise e Desenvolvimento de Sistemas e em projetos freelancers me deram a base para evoluir para um dev júnior.",
        cards: [
            { id: 1, icon: "award", title: "Carreira em ascensão", description: "Sempre integrando novas habilidades e conhecimentos para incorporar na carreira dev." },
            { id: 2, icon: "briefcase", title: "Experiência sólida", description: "Experiência em projetos freelancer e acadêmicos." },
            { id: 3, icon: "code", title: "Código limpo", description: "Código semântico, reutilizável e de fácil manutenção." },
            { id: 4, icon: "rocket", title: "Colaboração positiva", description: "Aberto a críticas, sugestões e novas ideias." }
        ]
    },
    skills: {
        title: "Habilidades & Tecnologias",
        description: "Dominando as tecnologias mais modernas e em constante evolução para criar soluções inovadoras",
        categories: {
            frontend: {
                title: "Frontend",
                skills: [
                    { id: 1, name: 'React', level: '90%' },
                    { id: 2, name: 'TypeScript', level: '85%' }, 
                    { id: 3, name: 'Next.js', level: '95%' },
                    { id: 4, name: 'TailwindCSS', level: '90%' },
                    { id: 5, name: 'HTML5', level: '95%' },
                    { id: 6, name: 'CSS3', level: '92%' }
                ]
            },
            backend: {
                title: "Backend",
                skills: [
                    { id: 1, name: 'Node.js', level: '85%' },
                    { id: 2, name: 'Express', level: '80%' },
                    { id: 3, name: 'PostgreSQL', level: '75%' },
                    { id: 4, name: 'Mysql', level: '80%' },
                    { id: 5, name: 'Python', level: '50%' },
                    { id: 6, name: 'PHP', level: '75%' }
                ]
            },
            devops: {
                title: "Ferramentas & DevOps",
                tools: ['Git', 'Docker', 'AWS', 'Vercel', 'CI/CD']
            }
        }
    },
    projects: {
        title: "Projetos em Destaque",
        description: "Uma seleção dos meus melhores trabalhos, demonstrando expertise em tecnologias modernas e soluções inovadoras.",
        projects: [
          {
            id: 1,
            title: 'Gerenciamento de Obras Civis',
            description: 'Um sistema moderno que simplifica a gestão de obras civis, integrando controle de serviços, produtos, equipes e finanças em uma única plataforma.',
            technologies: ['React', 'Node.js', 'Firebase',],
            demoLink: '#',
            codeLink: 'https://github.com/mmvdesigner?tab=repositories',
            imageUrl: 'https://i.ibb.co/M5SHH9Q/lider.png',
            hint: 'admin platform',
          },
          {
            id: 2,
            title: 'Loteamento Moradas Acaraú',
            description: 'landing page de vendas, criada com o objetivo único de converter visitantes em clientes.',
            technologies: ['Next.js', 'Firebase', 'E-mailjs', 'Tailwind'],
            demoLink: 'https://moradasacarau.clebertonsilvacorretor.com.br/',
            codeLink: 'https://github.com/mmvdesigner?tab=repositories',
            imageUrl: 'https://i.ibb.co/yFWnSMZ/moradas.png',
            hint: 'landpage',
          },
          {
            id: 3,
            title: 'SysZmPesscados',
            description: 'É um sistema moderno para o gerenciamento completo de pescados, embarcações, unindo controle de estoque, insumos em geral.',
            technologies: ['PHP', 'Mysql', 'CodeIgniter'],
            demoLink: '#',
            codeLink: 'https://github.com/mmvdesigner?tab=repositories',
            imageUrl: 'https://i.ibb.co/TKYVBNb/zmpescados.png',
            hint: 'admin platform',
          },
        ],
        viewAllButtonText: "Ver todos os projetos",
        viewAllButtonLink: "https://github.com/mmvdesigner?tab=repositories"
    },
    experience: {
        title: "Experiência Profissional",
        description: "Mais de 5 anos construindo soluções inovadoras e liderando projetos de alta complexidade.",
        experiences: [
            {
                id: 1,
                company: 'FreelanceHub',
                position: 'Desenvolvedor Freelancer',
                period: 'Jan 2019 - Mai 2020',
                location: 'Trabalho Remoto',
                employmentType: 'Freelancer',
                description: 'Desenvolvimento de soluções personalizadas para pequenas e médias empresas. Foco em e-commerce e automação de processos.',
                achievements: {
                    title: 'Principais Conquistas:',
                    items: [
                        'Completou 40+ projetos freelance',
                        'Avaliação média 4.9/5 em plataformas',
                        'Desenvolveu 8 lojas online',
                        'Automação que economizou 200h/mês'
                    ]
                },
                technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL']
            },
            {
                id: 2,
                company: 'StartupX',
                position: 'Full Stack Developer',
                period: 'Mar 2021 - Dez 2022',
                location: 'Rio de Janeiro, RJ',
                employmentType: 'Híbrido',
                description: 'Desenvolvimento de plataforma SaaS completa desde o MVP até a escala de 10k+ usuários. Foco em performance e experiência do usuário.',
                achievements: {
                    title: 'Principais Conquistas:',
                    items: [
                        'Desenvolveu MVP em 3 meses',
                        'Escalou aplicação para 10k+ usuários',
                        'Reduziu tempo de carregamento em 60%',
                        'Implementou sistema de pagamentos'
                    ]
                },
                technologies: ['Next.js', 'PostgreSQL', 'Stripe', 'Vercel', 'Redis']
            },
            {
                id: 3,
                company: 'Tech Innovation Labs',
                position: 'Senior Full Stack Developer',
                period: 'Jan 2023 - Presente',
                location: 'São Paulo, SP',
                employmentType: 'Remoto',
                description: 'Liderando o desenvolvimento de aplicações web modernas com React 18 e Node.js. Responsável pela arquitetura de microserviços e implementação de CI/CD.',
                achievements: {
                    title: 'Principais Conquistas:',
                    items: [
                        'Aumentou performance das aplicações em 40%',
                        'Liderou equipe de 5 desenvolvedores',
                        'Implementou testes automatizados (95% cobertura)',
                        'Migrou arquitetura para microserviços'
                    ]
                },
                technologies: ['React', 'TypeScript', 'Node.js', 'AWS', 'Docker', 'GraphQL']
            },
        ]
    },
    testimonials: {
        title: "O que dizem meus clientes",
        description: "Feedbacks de parceiros e clientes com quem tive o prazer de colaborar.",
        testimonials: [
          {
            id: 1,
            name: 'João Silva',
            title: 'CEO da StartupX',
            quote: 'O Messias é um profissional excepcional. Ele transformou nossa visão em um produto robusto e escalável. Sua expertise técnica e comprometimento foram cruciais para o sucesso do nosso projeto.',
            avatarUrl: 'https://picsum.photos/100/100',
            rating: 5,
            hint: "man portrait"
          },
          {
            id: 2,
            name: 'Julia Santos',
            title: 'Gerente de Produto na InovaTech',
            quote: 'Trabalhar com o Messias foi incrível. Ele é proativo, tem ótima comunicação e entrega um código de altíssima qualidade. Recomendo fortemente seus serviços para qualquer desafio de desenvolvimento.',
            avatarUrl: 'https://picsum.photos/101/101',
            rating: 5,
            hint: "woman portrait"
          },
          {
            id: 3,
            name: 'Carlos Lima',
            title: 'CTO da Soluções Digitais',
            quote: 'Poucos desenvolvedores têm a visão completa de full-stack que o Messias possui. Ele navega com facilidade entre o front-end e o back-end, sempre propondo as melhores soluções.',
            avatarUrl: 'https://picsum.photos/102/102',
            rating: 5,
            hint: "man smiling"
          },
        ]
    },
    contact: {
        title: "Vamos Trabalhar Juntos",
        description: "Pronto para dar o próximo passo? Vamos conversar sobre como posso ajudar a tornar seu projeto uma realidade.",
        info: {
            title: "Entre em Contato",
            email: { label: "Email", address: "mvdevfullstack@gmail.com" },
            phone: { label: "Telefone", number: "+55 (88) 99938-2994" },
            location: { label: "Localização", value: "Acaraú-CE, Brasil" },
        },
        form: {
            fields: [
                { name: "nome", label: "Nome", type: "text", placeholder: "Seu nome completo" },
                { name: "email", label: "Email", type: "email", placeholder: "seuemail@exemplo.com" },
                { name: "subject", label: "Assunto", type: "text", placeholder: "Assunto da mensagem" },
                { name: "mensagem", label: "Sua mensagem", type: "textarea", placeholder: "Conte-me como posso ajudar..." },
            ],
            submitButtonText: "Enviar Mensagem",
            success: {
                title: "Mensagem Enviada!",
                message: "Obrigado por entrar em contato. Retornarei em breve!"
            }
        },
        tip: {
            title: "Dica Rápida",
            description: "Quanto mais detalhes você fornecer sobre seu projeto, melhor poderei entender suas necessidades e oferecer a solução ideal."
        }
    },
    footer: {
        brandName: "mvdevfullstack",
        shortDescription: "Desenvolvedor Full Stack apaixonado por criar experiências digitais que funcionam.",
        quickLinks: {
            title: "Links Rápidos",
            links: [
                { href: "#sobre", label: "Sobre" },
                { href: "#habilidades", label: "Habilidades" },
                { href: "#projetos", label: "Projetos" },
                { href: "#contato", label: "Contato" },
            ]
        },
        socialLinks: {
            title: "Conecte-se",
            links: [
                { name: "github", url: "https://github.com/mmvdesigner" },
                { name: "linkedin", url: "https://linkedin.com/in/alexjohnson" },
                { name: "twitter", url: "https://twitter.com/alexjohnson" },
                { name: "dribbble", url: "#" },
            ]
        },
        copyright: "mvdevfullstack. Todos os direitos reservados."
    }
};
    