import { motion } from 'framer-motion';
import { ArrowDownRight, Play, Sparkles } from 'lucide-react';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section id="top" className="noise relative flex min-h-screen items-center bg-ink pt-24">
      <div className="section-shell relative z-10 grid gap-12 pb-16 pt-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:pt-20">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-5xl">
          <motion.p variants={item} className="eyebrow">
            DO_GAM STUDIO
          </motion.p>
          <motion.h1
            variants={item}
            className="mt-5 max-w-5xl text-balance text-5xl font-black leading-[0.98] tracking-normal text-white sm:text-7xl lg:text-8xl"
          >
            사람을 관찰하고,
            <span className="block text-mint-300">이야기를 기록하는</span>
            스튜디오
          </motion.h1>
          <motion.p variants={item} className="mt-7 max-w-2xl text-lg leading-8 text-white/68 sm:text-xl">
            도감 스튜디오는 웹 예능, 토크쇼, 단편영화 등 다양한 영상 콘텐츠를 기획하고 제작합니다.
          </motion.p>
          <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#works"
              className="inline-flex items-center justify-center gap-2 bg-mint-300 px-6 py-4 text-sm font-black text-ink transition hover:bg-white"
            >
              포트폴리오 보기
              <ArrowDownRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border border-white/18 px-6 py-4 text-sm font-bold text-white transition hover:border-mint-300 hover:text-mint-300"
            >
              프로젝트 문의하기
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.28 }}
          className="relative min-h-[390px] border border-white/10 bg-white/[0.03] p-4 shadow-mint backdrop-blur"
        >
          <div className="absolute right-4 top-4 z-10 flex items-center gap-2 bg-ink/80 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-mint-300">
            <Sparkles size={14} />
            Archive 001
          </div>
          <div className="grid h-full min-h-[360px] grid-cols-6 grid-rows-6 gap-2">
            <div className="col-span-4 row-span-4 overflow-hidden bg-mint-300 p-5 text-ink">
              <div className="flex h-full flex-col justify-between">
                <Play size={42} fill="currentColor" />
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em]">Human Record</p>
                  <p className="mt-2 text-4xl font-black leading-none">사람이라는 장르</p>
                </div>
              </div>
            </div>
            <div className="col-span-2 row-span-2 border border-white/12 bg-white/8" />
            <div className="col-span-2 row-span-3 bg-white text-ink">
              <div className="flex h-full flex-col justify-between p-4">
                <span className="text-5xl font-black">24</span>
                <span className="text-xs font-bold uppercase tracking-[0.2em]">Frames</span>
              </div>
            </div>
            <div className="col-span-3 row-span-2 border border-mint-300/60 bg-ink p-4">
              <p className="text-sm font-semibold leading-6 text-white/78">
                말, 표정, 관계, 순간을 관찰해 콘텐츠의 다음 장면으로 확장합니다.
              </p>
            </div>
            <div className="col-span-3 row-span-2 bg-coal p-4">
              <div className="h-full border-l-2 border-mint-300 pl-4">
                <p className="text-xs uppercase tracking-[0.24em] text-white/42">License Ready</p>
                <p className="mt-3 text-xl font-black">기획부터 판권까지</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
