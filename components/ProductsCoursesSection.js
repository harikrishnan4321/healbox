"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowRight, BookOpenCheck, GraduationCap, Loader2, PackageOpen } from "lucide-react";

import { apiClient, getApiErrorMessage } from "@/lib/apiClient";

function formatPrice(price) {
  if (price === undefined || price === null || price === "") return "";
  const numericPrice = Number(price);

  if (Number.isNaN(numericPrice)) {
    return String(price);
  }

  if (numericPrice === 0) {
    return "Free";
  }

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(numericPrice);
}

function normalizeItems(items) {
  return Array.isArray(items) ? items : [];
}

function getItemsFromResponse(response, key) {
  const payload = response?.data;

  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.data)) return payload.data;
  if (Array.isArray(payload?.[key])) return payload[key];

  return [];
}

function ProductCard({ item }) {
  const price = formatPrice(item.price);

  return (
    <article className="group grid min-w-0 overflow-hidden rounded-lg border border-[#dce8e3] bg-white shadow-[0_16px_40px_rgba(25,53,48,.08)] transition hover:-translate-y-1 hover:shadow-2xl">
      {item.image && (
        <div className="relative aspect-[16/11] overflow-hidden">
          <img className="h-full w-full object-cover transition duration-500 group-hover:scale-105" src={item.image} alt={item.title} />
          {item.status && <span className="absolute left-3 top-3 rounded-full bg-[#ffd35e] px-3 py-1 text-xs font-black text-[#10201d]">{item.status}</span>}
        </div>
      )}
      <div className="grid gap-3 p-5 sm:p-6">
        <div className="flex min-w-0 items-start justify-between gap-3">
          <div className="min-w-0">
            {item.category && <span className="text-xs font-black uppercase tracking-wide text-[#096454]">{item.category}</span>}
            <h3 className="mt-2 text-xl font-black leading-tight text-[#10201d] sm:text-2xl">{item.title}</h3>
          </div>
          {price && <strong className="shrink-0 rounded-lg bg-[#d8f3e8] px-3 py-2 text-sm font-black text-[#096454]">{price}</strong>}
        </div>
        {item.description && <p className="leading-7 text-[#63706d]">{item.description}</p>}
        {item.link && (
          <a className="mt-1 inline-flex items-center gap-2 font-black text-[#096454]" href={item.link} target="_blank" rel="noreferrer">
            Enquire product <ArrowRight size={16} />
          </a>
        )}
      </div>
    </article>
  );
}

function CourseCard({ item }) {
  const details = [item.lessons, item.duration].filter(Boolean).join(" / ");

  return (
    <article className="group grid min-w-0 overflow-hidden rounded-lg border border-white/15 bg-white/10 text-white shadow-[0_18px_50px_rgba(0,0,0,.18)] backdrop-blur transition hover:-translate-y-1 hover:bg-white/15">
      {item.image && (
        <div className="relative aspect-[16/10] overflow-hidden">
          <img className="h-full w-full object-cover brightness-[.86] transition duration-500 group-hover:scale-105" src={item.image} alt={item.title} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07110f]/70 via-transparent to-transparent" />
          {item.level && <span className="absolute bottom-3 left-3 rounded-full border border-white/25 bg-[#07110f]/70 px-3 py-1 text-xs font-black uppercase text-[#9debdc]">{item.level}</span>}
        </div>
      )}
      <div className="grid gap-3 p-5 sm:p-6">
        {details && (
          <div className="flex flex-wrap items-center gap-2 text-xs font-black uppercase tracking-wide text-[#ffd35e]">
            <BookOpenCheck size={15} /> {details}
          </div>
        )}
        {item.category && <span className="text-xs font-black uppercase tracking-wide text-[#9debdc]">{item.category}</span>}
        <h3 className="text-xl font-black leading-tight sm:text-2xl">{item.title}</h3>
        {item.description && <p className="leading-7 text-white/72">{item.description}</p>}
        {item.link && (
          <a className="mt-1 inline-flex items-center gap-2 font-black text-[#9debdc]" href={item.link} target="_blank" rel="noreferrer">
            Join course <ArrowRight size={16} />
          </a>
        )}
      </div>
    </article>
  );
}

function LoadingState() {
  return (
    <div className="flex min-h-40 items-center justify-center gap-3 rounded-lg bg-white text-[#10201d]">
      <Loader2 className="animate-spin" />
      Loading from backend
    </div>
  );
}

function EmptyState({ children, dark = false }) {
  return (
    <div className={`rounded-lg border p-6 text-center font-bold ${dark ? "border-white/15 bg-white/10 text-white/70" : "border-[#dce8e3] bg-white text-[#63706d]"}`}>
      {children}
    </div>
  );
}

export default function ProductsCoursesSection() {
  const [products, setProducts] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productError, setProductError] = useState("");
  const [courseError, setCourseError] = useState("");

  useEffect(() => {
    const fetchProductsAndCourses = async () => {
      setLoading(true);
      setProductError("");
      setCourseError("");

      const [productsResult, coursesResult] = await Promise.allSettled([
        apiClient.get("/products/get_products?limit=50"),
        apiClient.get("/courses/get_courses?limit=50"),
      ]);

      if (productsResult.status === "fulfilled") {
        setProducts(normalizeItems(getItemsFromResponse(productsResult.value, "products")));
      } else {
        setProducts([]);
        setProductError(getApiErrorMessage(productsResult.reason, "Unable to load products from the backend."));
      }

      if (coursesResult.status === "fulfilled") {
        setCourses(normalizeItems(getItemsFromResponse(coursesResult.value, "courses")));
      } else {
        setCourses([]);
        setCourseError(getApiErrorMessage(coursesResult.reason, "Unable to load courses from the backend."));
      }

      setLoading(false);
    };

    fetchProductsAndCourses();
  }, []);

  const hasProducts = useMemo(() => products.length > 0, [products]);
  const hasCourses = useMemo(() => courses.length > 0, [courses]);

  return (
    <section className="w-full max-w-full overflow-hidden">
      <div className="bg-[#f5faf7] px-4 py-12 sm:px-6 sm:py-14 md:px-10 md:py-16 lg:px-14 lg:py-20">
        <div className="mb-8 grid min-w-0 gap-4 lg:grid-cols-[minmax(0,.8fr)_minmax(0,1fr)] lg:items-end">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wide text-[#096454]"><PackageOpen size={16} /> Products</span>
            <h2 className="mt-3 text-balance text-3xl font-black leading-[1.05] text-[#10201d] sm:text-4xl md:text-5xl lg:text-6xl">Wellness products ready for everyday care.</h2>
          </div>
        </div>

        {loading ? (
          <LoadingState />
        ) : productError ? (
          <EmptyState>{productError}</EmptyState>
        ) : hasProducts ? (
          <div className="grid min-w-0 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {products.map((item) => <ProductCard item={item} key={item._id} />)}
          </div>
        ) : (
          <EmptyState>No products found in the backend.</EmptyState>
        )}
      </div>

      <div className="bg-[#07110f] px-4 py-12 text-white sm:px-6 sm:py-14 md:px-10 md:py-16 lg:px-14 lg:py-20">
        <div className="mb-8 grid min-w-0 gap-4 lg:grid-cols-[minmax(0,.8fr)_minmax(0,1fr)] lg:items-end">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wide text-[#9debdc]"><GraduationCap size={16} /> Courses</span>
            <h2 className="mt-3 text-balance text-3xl font-black leading-[1.05] sm:text-4xl md:text-5xl lg:text-6xl">Guided courses for calm, confidence and growth.</h2>
          </div>
        </div>

        {loading ? (
          <LoadingState />
        ) : courseError ? (
          <EmptyState dark>{courseError}</EmptyState>
        ) : hasCourses ? (
          <div className="grid min-w-0 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {courses.map((item) => <CourseCard item={item} key={item._id} />)}
          </div>
        ) : (
          <EmptyState dark>No courses found in the backend.</EmptyState>
        )}
      </div>
    </section>
  );
}
