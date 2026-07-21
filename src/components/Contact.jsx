import { motion } from 'framer-motion';
import { MapPin, Mail, MessageCircle } from 'lucide-react';

const email = 'marya20@daum.net';
const mapSrc =
  'https://www.google.com/maps?q=%EC%84%9C%EC%9A%B8%EC%8A%A4%ED%80%98%EC%96%B4&output=embed';

export default function Contact() {
  return (
    <section id="contact" className="bg-mint-300 py-24 text-ink sm:py-32">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="mb-10 max-w-4xl"
        >
          <p className="text-xs font-black uppercase tracking-[0.22em] text-ink/55">Contact</p>
          <h2 className="mt-4 text-balance text-4xl font-black leading-tight sm:text-6xl">
            기록하고 싶은 사람이 있다면, 도감 스튜디오와 이야기해보세요.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]"
        >
          <div className="overflow-hidden border border-ink/12 bg-white">
            <iframe
              title="도감 스튜디오 위치 - 서울스퀘어"
              src={mapSrc}
              className="h-[360px] w-full sm:h-[430px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="border border-ink/12 bg-ink p-6 text-white sm:p-8">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 shrink-0 text-mint-300" size={22} />
              <div>
                <p className="text-sm font-black uppercase tracking-[0.18em] text-mint-300">Office</p>
                <p className="mt-3 text-2xl font-black">서울스퀘어</p>
                <p className="mt-2 text-sm leading-6 text-white/58">서울특별시 중구 한강대로 416</p>
              </div>
            </div>

            <p className="mt-10 text-lg font-bold leading-8">
              프로젝트 문의, 포맷 개발, 외주 제작, 판권 상담을 함께 논의합니다.
            </p>

            <div className="mt-8 grid gap-3">
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 border border-white/10 px-4 py-4 text-sm font-bold transition hover:border-mint-300 hover:text-mint-300"
              >
                <Mail size={18} />
                {email}
              </a>
              <a
                href={`mailto:${email}?subject=${encodeURIComponent('도감 스튜디오 프로젝트 문의')}`}
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
