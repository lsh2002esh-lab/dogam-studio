import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { works } from '../data/works.js';

export default function Works() {
  return (
    <section id="works" className="bg-fog py-24 text-ink sm:py-32">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <p className="eyebrow text-mint-500">Works</p>
            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">Portfolio Archive</h2>
          </div>
          <div className="flex max-w-md flex-wrap gap-2">
            {['#웹 예능', '#단편영화', '#인터뷰', '#브랜드협업'].map((tag) => (
              <span
                key={tag}
                className="border border-zinc-200 bg-white px-3 py-2 text-sm font-black text-zinc-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {works.map((work, index) => (
            <motion.article
              key={work.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.58, delay: index * 0.06 }}
              className="group border border-zinc-200 bg-white p-3 transition duration-300 hover:-translate-y-1 hover:border-mint-300 hover:shadow-mint"
            >
              <div className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${work.accent}`}>
                {work.image && (
                  <img
                    src={work.image}
                    alt={`${work.category} 포트폴리오 이미지`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                )}
                <div className="absolute inset-3 border border-white/30 mix-blend-screen" />
                <div className="absolute left-5 top-5 bg-ink px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-mint-300">
                  {work.tag}
                </div>
                <div className={`absolute bottom-5 left-5 right-5 ${work.image ? 'text-white' : 'text-ink'}`}>
                  <p className={`text-xs font-black uppercase tracking-[0.28em] ${work.image ? 'text-white/70' : 'text-ink/55'}`}>
                    {work.category}
                  </p>
                  <p className="mt-2 text-4xl font-black leading-none">{work.title}</p>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-mint-500">{work.category}</p>
                    <h3 className="mt-2 text-2xl font-black">{work.title}</h3>
                  </div>
                  <span className="grid h-10 w-10 shrink-0 place-items-center border border-zinc-200 transition group-hover:border-mint-300 group-hover:bg-mint-300">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
                <p className="mt-5 text-sm leading-6 text-zinc-600">{work.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
