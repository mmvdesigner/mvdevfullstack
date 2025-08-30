import { Github, Linkedin, Twitter, Dribbble } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-muted-foreground">
            <div>
                <Link href="/" className="text-xl font-bold text-foreground flex items-center space-x-2 mb-4">
                    <span className='text-primary'>{'<'}</span>
                    <span>mvdevfullstack</span>
                    <span className='text-primary'>{'/>'}</span>
                </Link>
                <p className="text-sm">Desenvolvedor Full Stack apaixonado por criar experiências digitais que funcionam.</p>
            </div>
            <div>
                <h4 className="font-semibold text-foreground mb-4">Links Rápidos</h4>
                <ul className="space-y-2 text-sm">
                    <li><Link href="#sobre" className="hover:text-primary transition-colors">Sobre</Link></li>
                    <li><Link href="#habilidades" className="hover:text-primary transition-colors">Habilidades</Link></li>
                    <li><Link href="#projetos" className="hover:text-primary transition-colors">Projetos</Link></li>
                    <li><Link href="#contato" className="hover:text-primary transition-colors">Contato</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="font-semibold text-foreground mb-4">Conecte-se</h4>
                <div className="flex space-x-4">
                    <Link href="https://github.com/mmvdesigner" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github size={20} />
                    </Link>
                    <Link href="https://linkedin.com/in/alexjohnson" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin size={20} />
                    </Link>
                    <Link href="https://twitter.com/alexjohnson" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Twitter size={20} />
                    </Link>
                     <Link href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Dribbble size={20} />
                    </Link>
                </div>
            </div>
        </div>
        <div className="text-center text-sm text-muted-foreground border-t border-border mt-8 pt-6">
            © {new Date().getFullYear()} mvdevfullstack. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
