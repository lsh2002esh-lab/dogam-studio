import { motion } from 'framer-motion';
import { Aperture, BookOpen, Clapperboard, Search } from 'lucide-react';

const values = [
  {
    icon: Search,
    title: '관찰',
    text: '사람의 말, 표정, 관계, 순간을 오래 바라봅니다.',
  },
  {
    icon: BookOpen,
    title: '기록',
    text: '흩어지는 개성과 장면을 하나의 콘텐츠 아카이브로 엮습니다.',
  },
  {
    icon: Aperture,
    title: '발견',
    text: '일상적인 인물 안에서 플랫폼이 원하는 새로움을 찾습니다.',
  },
  {
    icon: Clapperboard,
    title: '제작',
    text: '기획, 촬영, 편집, 납품과 판권 판매까지 연결합니다.',
  },
];

export default function About() {
  return (
    <section id="about" className="bg-fog py-24 text-ink sm:py-32">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]"
        >
          <div>
            <p className="eyebrow text-mint-500">About</p>
            <h2 className="mt-4 text-balance text-4xl font-black leading-tight sm:text-5xl">
              세상의 다양한 개성을 모으고 기록합니다.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-9 text-zinc-700">
            <p>
              도감이라는 이름은 세상의 다양한 것들을 모아 기록하고, 관찰하고 발견하며, 하나하나의 개성을
              담아낸다는 의미를 가집니다.
            </p>
            <p>
              우리는 사람의 말, 표정, 관계, 순간을 관찰합니다. 그 관찰을 콘텐츠로 만들고, 브랜드와 플랫폼이
              활용할 수 있는 판권으로 확장합니다.
            </p>
          </div>
        </motion.div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="border border-zinc-200 bg-white p-6 transition hover:border-mint-300 hover:shadow-mint"
              >
                <Icon className="text-mint-500" size={30} />
                <h3 className="mt-8 text-2xl font-black">{value.title}</h3>
                <p className="mt-4 text-sm leading-6 text-zinc-600">{value.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
