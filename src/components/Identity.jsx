import { motion } from 'framer-motion';
import { identities } from '../data/works.js';

export default function Identity() {
  return (
    <section id="identity" className="bg-ink py-24 text-white sm:py-32">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow">Identity</p>
            <h2 className="mt-4 text-balance text-4xl font-black leading-tight sm:text-6xl">
              사람이라는 가장 흥미로운 존재를 기록합니다.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/62">
              도감 스튜디오는 인물을 콘텐츠의 소재가 아니라 하나의 세계로 봅니다. 그래서 모든 프로젝트는
              관찰에서 시작해 이야기로 남습니다.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.09 } },
            }}
            className="divide-y divide-white/10 border-y border-white/10"
          >
            {identities.map((word, index) => (
              <motion.div
                key={word}
                variants={{
                  hidden: { opacity: 0, x: 30 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.55 } },
                }}
                className="group grid grid-cols-[4.5rem_1fr] items-center gap-4 py-7"
              >
                <span className="text-sm font-black text-mint-300">{String(index + 1).padStart(2, '0')}</span>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-3xl font-black leading-none text-white transition group-hover:text-mint-300 sm:text-5xl">
                    {word}
                  </span>
                  <span className="h-px w-12 bg-mint-300 sm:w-20" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
