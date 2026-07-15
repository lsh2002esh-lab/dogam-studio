import { motion } from 'framer-motion';
import { FileText, Film, Handshake, PenTool, Scissors } from 'lucide-react';

const steps = [
  { icon: PenTool, title: '기획', text: '인물과 포맷의 관찰 포인트를 정의합니다.' },
  { icon: FileText, title: '구성', text: '회차 구조, 질문, 장면의 흐름을 설계합니다.' },
  { icon: Film, title: '촬영', text: '출연자의 자연스러운 리듬과 현장성을 담습니다.' },
  { icon: Scissors, title: '편집', text: '이야기의 밀도와 플랫폼 문법에 맞춰 다듬습니다.' },
  { icon: Handshake, title: '납품/판권', text: '브랜드와 플랫폼 활용에 맞춰 결과물을 확장합니다.' },
];

export default function Process() {
  return (
    <section className="bg-ink py-24 text-white sm:py-32">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="eyebrow">Process</p>
          <h2 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">From idea to license</h2>
        </motion.div>

        <div className="mt-14 grid gap-4 lg:grid-cols-5">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.07 }}
                className="border border-white/10 bg-white/[0.035] p-5"
              >
                <div className="flex items-center justify-between gap-4">
                  <Icon className="text-mint-300" size={24} />
                  <span className="text-xs font-black text-white/32">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="mt-8 text-2xl font-black">{step.title}</h3>
                <p className="mt-4 text-sm leading-6 text-white/58">{step.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
