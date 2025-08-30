import { Github, Linkedin, Twitter, Dribbble } from 'lucide-react';
import Link from 'next/link';
import { portfolioData } from '@/data/portfolio';

const socialIcons: { [key: string]: React.ReactNode } = {
    github: <Github size={20} />,
    linkedin: <Linkedin size={20} />,
    twitter: <Twitter size={20} />,
    dribbble: <Dribbble size={20} />,
};

export default function Footer() {
  const { brandName, shortDescription, quickLinks, socialLinks, copyright } = portfolioData.footer;

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-muted-foreground">
            <div>
                <Link href="/" className="text-xl font-bold text-foreground flex items-center space-x-2 mb-4">
                    <span className='text-primary'>{'<'}</span>
                    <span>{brandName}</span>
                    <span className='text-primary'>{'/>'}</span>
                </Link>
                <p className="text-sm">{shortDescription}</p>
            </div>
            <div>
                <h4 className="font-semibold text-foreground mb-4">{quickLinks.title}</h4>
                <ul className="space-y-2 text-sm">
                    {quickLinks.links.map(link => (
                      <li key={link.href}><Link href={link.href} className="hover:text-primary transition-colors">{link.label}</Link></li>
                    ))}
                </ul>
            </div>
            <div>
                <h4 className="font-semibold text-foreground mb-4">{socialLinks.title}</h4>
                <div className="flex space-x-4">
                    {socialLinks.links.map(link => (
                        <Link key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                            {socialIcons[link.name]}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
        <div className="text-center text-sm text-muted-foreground border-t border-border mt-8 pt-6">
            © {new Date().getFullYear()} {copyright}
        </div>
      </div>
    </footer>
  );
}
