import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'History', href: '#history' },
  { label: 'Works', href: '#works' },
  { label: 'Identity', href: '#identity' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen ? 'border-b border-white/10 bg-ink/88 shadow-2xl backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="section-shell flex h-[72px] items-center justify-between py-4">
        <a href="#top" className="group flex items-center gap-3" aria-label="DO_GAM STUDIO 홈">
          <img
            src="./images/dogam-mark.svg"
            alt=""
            className="h-10 w-10 border border-white/10 transition group-hover:border-mint-300"
            aria-hidden="true"
          />
          <span className="flex flex-col leading-none">
            <span className="text-sm font-black tracking-[0.22em]">DO_GAM</span>
            <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/55">Studio</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-white/68 transition hover:text-mint-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center border border-white/15 text-white md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="메뉴 열기"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-ink/96 px-5 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-3 text-lg font-semibold text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
