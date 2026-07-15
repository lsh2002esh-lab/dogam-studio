import { motion } from 'framer-motion';
import { Instagram, Mail, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-mint-300 py-24 text-ink sm:py-32">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end"
        >
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-ink/55">Contact</p>
            <h2 className="mt-4 text-balance text-4xl font-black leading-tight sm:text-6xl">
              기록하고 싶은 사람이 있다면, 도감 스튜디오와 이야기해보세요.
            </h2>
          </div>
          <div className="border border-ink/12 bg-ink p-6 text-white">
            <p className="text-lg font-bold leading-8">프로젝트 문의, 포맷 개발, 외주 제작, 판권 상담을 함께 논의합니다.</p>
            <div className="mt-8 grid gap-3">
              <a
                href="mailto:hello@dogam.studio"
                className="flex items-center gap-3 border border-white/10 px-4 py-4 text-sm font-bold transition hover:border-mint-300 hover:text-mint-300"
              >
                <Mail size={18} />
                hello@dogam.studio
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 border border-white/10 px-4 py-4 text-sm font-bold transition hover:border-mint-300 hover:text-mint-300"
              >
                <Instagram size={18} />
                Instagram
              </a>
              <a
                href="mailto:hello@dogam.studio?subject=도감%20스튜디오%20프로젝트%20문의"
                className="mt-3 inline-flex items-center justify-center gap-2 bg-mint-300 px-5 py-4 text-sm font-black text-ink transition hover:bg-white"
              >
                <MessageCircle size={18} />
                프로젝트 문의하기
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
