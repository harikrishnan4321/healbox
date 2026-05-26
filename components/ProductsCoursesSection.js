import Link from "next/link";
import { ArrowRight, BookOpenCheck, GraduationCap, PackageOpen } from "lucide-react";
import content from "@/data/content.json";

const products = content.products || [];
const courses = content.courses || [];

function ProductCard({ item }) {
  return (
    <article className="group grid min-w-0 overflow-hidden rounded-lg border border-[#dce8e3] bg-white shadow-[0_16px_40px_rgba(25,53,48,.08)] transition hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative aspect-[16/11] overflow-hidden">
        <img className="h-full w-full object-cover transition duration-500 group-hover:scale-105" src={item.image} alt={item.title} />
        <span className="absolute left-3 top-3 rounded-full bg-[#ffd35e] px-3 py-1 text-xs font-black text-[#10201d]">{item.status}</span>
      </div>
      <div className="grid gap-3 p-5 sm:p-6">
        <div className="flex min-w-0 items-start justify-between gap-3">
          <div className="min-w-0">
            <span className="text-xs font-black uppercase tracking-wide text-[#096454]">{item.category}</span>
            <h3 className="mt-2 text-xl font-black leading-tight text-[#10201d] sm:text-2xl">{item.title}</h3>
          </div>
          <strong className="shrink-0 rounded-lg bg-[#d8f3e8] px-3 py-2 text-sm font-black text-[#096454]">{item.price}</strong>
        </div>
        <p className="leading-7 text-[#63706d]">{item.description}</p>
        <Link className="mt-1 inline-flex items-center gap-2 font-black text-[#096454]" href="/hello">
          Enquire product <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}

function CourseCard({ item }) {
  return (
    <article className="group grid min-w-0 overflow-hidden rounded-lg border border-white/15 bg-white/10 text-white shadow-[0_18px_50px_rgba(0,0,0,.18)] backdrop-blur transition hover:-translate-y-1 hover:bg-white/15">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img className="h-full w-full object-cover brightness-[.86] transition duration-500 group-hover:scale-105" src={item.image} alt={item.title} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07110f]/70 via-transparent to-transparent" />
        <span className="absolute bottom-3 left-3 rounded-full border border-white/25 bg-[#07110f]/70 px-3 py-1 text-xs font-black uppercase text-[#9debdc]">{item.level}</span>
      </div>
      <div className="grid gap-3 p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2 text-xs font-black uppercase tracking-wide text-[#ffd35e]">
          <BookOpenCheck size={15} /> {item.lessons}
          <span className="h-1 w-1 rounded-full bg-white/40" />
          {item.duration}
        </div>
        <h3 className="text-xl font-black leading-tight sm:text-2xl">{item.title}</h3>
        <p className="leading-7 text-white/72">{item.description}</p>
        <Link className="mt-1 inline-flex items-center gap-2 font-black text-[#9debdc]" href="/hello">
          Join course <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}

export default function ProductsCoursesSection() {
  return (
    <section className="w-full max-w-full overflow-hidden">
      <div className="bg-[#f5faf7] px-4 py-12 sm:px-6 sm:py-14 md:px-10 md:py-16 lg:px-14 lg:py-20">
        <div className="mb-8 grid min-w-0 gap-4 lg:grid-cols-[minmax(0,.8fr)_minmax(0,1fr)] lg:items-end">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wide text-[#096454]"><PackageOpen size={16} /> Products</span>
            <h2 className="mt-3 text-balance text-3xl font-black leading-[1.05] text-[#10201d] sm:text-4xl md:text-5xl lg:text-6xl">Wellness products ready for everyday care.</h2>
          </div>
          <p className="text-base leading-7 text-[#63706d] sm:text-lg sm:leading-8">Explore simple wellness tools, digital packs and workplace resources designed to make everyday care easier.</p>
        </div>
        <div className="grid min-w-0 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {products.map((item) => <ProductCard item={item} key={item.id} />)}
        </div>
      </div>

      <div className="bg-[#07110f] px-4 py-12 text-white sm:px-6 sm:py-14 md:px-10 md:py-16 lg:px-14 lg:py-20">
        <div className="mb-8 grid min-w-0 gap-4 lg:grid-cols-[minmax(0,.8fr)_minmax(0,1fr)] lg:items-end">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wide text-[#9debdc]"><GraduationCap size={16} /> Courses</span>
            <h2 className="mt-3 text-balance text-3xl font-black leading-[1.05] sm:text-4xl md:text-5xl lg:text-6xl">Guided courses for calm, confidence and growth.</h2>
          </div>
          <p className="text-base leading-7 text-white/70 sm:text-lg sm:leading-8">Learn practical routines with guided programs for mindfulness, stress resilience and confidence building.</p>
        </div>
        <div className="grid min-w-0 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((item) => <CourseCard item={item} key={item.id} />)}
        </div>
      </div>
    </section>
  );
}
