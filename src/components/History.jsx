import { motion } from 'framer-motion';
import { CalendarDays } from 'lucide-react';

const histories = [
  {
    order: '01',
    period: 'Format',
    title: '술 토크쇼 포맷 개발',
    category: 'AFTER HOURS TALK',
    description: '가볍게 시작되는 술자리의 대화에서 출연자의 관계와 캐릭터가 드러나는 웹 예능 포맷을 기획했습니다.',
  },
  {
    order: '02',
    period: '2024',
    title: '단편영화 프로젝트 제작',
    category: 'ONE SCENE FILM',
    description: '포스터에 표기된 2024년 작업 흐름을 기준으로, 인물의 감정과 한 장면의 밀도를 남기는 단편영화 프로젝트를 구성했습니다.',
  },
  {
    order: '03',
    period: 'Series',
    title: '웹 예능 시리즈 확장',
    category: 'HUMAN INDEX',
    description: '토크, 스케치, 쇼 포맷을 결합해 유튜브에서 빠르게 소비되는 인물 중심 예능 콘텐츠로 확장했습니다.',
  },
  {
    order: '04',
    period: 'Interview',
    title: '인터뷰 콘텐츠 제작',
    category: 'RAW INTERVIEW',
    description: '취향과 관점을 가진 사람들의 대화를 기록하며, 질문보다 인물의 리듬이 남는 인터뷰 콘텐츠를 제작했습니다.',
  },
  {
    order: '05',
    period: '2024',
    title: '브랜드 협업 영상 아카이브',
    category: 'BRAND CHARACTER',
    description: '포스터에 표기된 2024년 협업 작업을 바탕으로 브랜드의 방향성과 인물성을 시각 콘텐츠로 번역했습니다.',
  },
];

export default function History() {
  return (
    <section id="history" className="bg-white py-24 text-ink sm:py-32">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end"
        >
          <div>
            <p className="eyebrow text-mint-500">History</p>
            <h2 className="mt-4 text-balance text-4xl font-black leading-tight sm:text-6xl">
              관찰이 콘텐츠가 된 기록
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-zinc-600">
            도감 스튜디오는 사람을 바라보는 방식에서 출발해 토크쇼, 단편영화, 웹 예능, 인터뷰, 브랜드 협업으로
            작업의 범위를 넓혀왔습니다.
          </p>
        </motion.div>

        <div className="mt-16 border-y border-zinc-200">
          {histories.map((history, index) => (
            <motion.article
              key={history.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className="grid gap-5 border-b border-zinc-200 py-7 last:border-b-0 md:grid-cols-[8rem_1fr] md:gap-10"
            >
              <div className="flex items-center gap-3 text-mint-500">
                <CalendarDays size={19} />
                <div>
                  <span className="block text-2xl font-black">{history.order}</span>
                  <span className="mt-1 block text-xs font-black uppercase tracking-[0.18em] text-zinc-400">
                    {history.period}
                  </span>
                </div>
              </div>
              <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-zinc-400">{history.category}</p>
                  <h3 className="mt-2 text-2xl font-black">{history.title}</h3>
                </div>
                <p className="text-sm leading-7 text-zinc-600">{history.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
