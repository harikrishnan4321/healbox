"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  Award,
  ChevronLeft,
  ChevronRight,
  Filter,
  ImageIcon,
  Loader2,
  Search,
  Sparkles,
} from "lucide-react";

import { apiClient } from "@/lib/apiClient";
import { expertsFallback, galleryFallback } from "@/data/siteContent";

const pageSize = 6;

const section =
  "w-full max-w-full overflow-hidden px-4 py-10 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-14 lg:py-16";

const eyebrow =
  "inline-flex items-center gap-2 text-xs font-black uppercase tracking-wide text-[#0a7a69]";

const sectionHead = "mb-9 max-w-3xl";

const sectionTitle =
  "mt-3 text-balance text-3xl font-black leading-[1.12] text-[#1d342f] sm:text-4xl lg:text-5xl";

const sectionText =
  "mt-4 text-base leading-7 text-[#526862] sm:text-lg sm:leading-8";

const inputShell =
  "flex min-h-12 flex-1 items-center gap-3 rounded-lg border border-[#dce8e3] bg-white px-4 text-[#10201d]";

const card =
  "overflow-hidden rounded-lg border border-[#dce8e3] bg-white shadow-[0_16px_40px_rgba(25,53,48,.08)] transition hover:-translate-y-1 hover:shadow-2xl";

const priorityRoles = [
  "Psychologist",
  "Relationship Counsellor",
  "Career Counsellor",
  "Yoga and naturopathy consultant",
  "Corporate Wellness Coach"
];



/* =========================
   GALLERY SECTION
========================= */
export function GallerySection({ preview = false }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const [type, setType] = useState("all");
  const [query, setQuery] = useState("");

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Fetch Gallery Data
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        setLoading(true);

        const response = await apiClient.get(
          `/gallery/getfiles?page=${page}&limit=${pageSize}`
        );

        const data = response.data;

        const nextItems = data.data || [];
        setItems(nextItems.length ? nextItems : galleryFallback);
        setTotalPages(data.totalPages || 1);

      } catch (error) {
        console.log("Error fetching gallery:", error);
        setItems(galleryFallback);
        setTotalPages(1);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, [page]);

  // URL Query
  useEffect(() => {
    const requestedType = new URLSearchParams(
      window.location.search
    ).get("type");

    if (requestedType === "image" || requestedType === "gif") {
      setType(requestedType);
    }
  }, []);

  // Filters
  const filtered = items.filter((item) => {
    const matchesType =
      type === "all" || item.type === type;

    const matchesQuery = `${item.title} ${item.caption}`
      .toLowerCase()
      .includes(query.toLowerCase());

    return matchesType && matchesQuery;
  });

  // Preview
  const visibleItems = preview
    ? filtered.slice(0, 4)
    : filtered;

  return (
    <section
      className={`${section} bg-[#10201d] text-white`}
      id="gallery"
    >
      <div className={sectionHead}>
        <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wide text-[#c8efe2]">
          <ImageIcon size={16} />
          Gallery
        </span>

        <h2 className="mt-3 text-balance text-3xl font-black leading-[1.12] sm:text-4xl lg:text-5xl">
          Moments that feel calm, human and hopeful.
        </h2>

        <p className="mt-4 text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
          See how HealBoxx supports real care moments, from therapy calls and
          family guidance to workplace wellness and app-based calm resets.
        </p>
      </div>

      {!preview && (
        <div className="mb-8 flex min-w-0 flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Search */}
          <label className="flex min-h-12 flex-1 items-center gap-3 rounded-lg border border-white/25 bg-white/10 px-4 text-white">
            <Search size={16} />

            <input
              className="w-full bg-transparent outline-none placeholder:text-white/60"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setPage(1);
              }}
              placeholder="Search care moments"
            />
          </label>

          {/* Type Filter */}
          <div className="grid min-w-0 grid-cols-3 gap-2 sm:flex sm:flex-wrap">
            {["all", "image", "gif"].map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => {
                  setType(option);
                  setPage(1);
                }}
                className={`${
                  type === option
                    ? "bg-[#ffd35e] text-[#10201d]"
                    : "bg-white text-[#10201d]"
                } inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-3 text-sm font-black sm:px-4 sm:text-base`}
              >
                <Filter size={15} />

                {option === "all"
                  ? "All"
                  : option === "image"
                  ? "Care"
                  : "Motion"}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Loading */}
      {loading ? (
        <div className="flex min-h-44 items-center justify-center gap-3 rounded-lg bg-white text-[#10201d]">
          <Loader2 className="animate-spin" />
          Loading gallery
        </div>
      ) : (
        <div className="grid min-w-0 auto-rows-[minmax(260px,auto)] grid-cols-1 gap-4 sm:auto-rows-[300px] md:grid-cols-2 xl:grid-cols-[minmax(0,1.15fr)_minmax(0,.85fr)_minmax(0,1fr)]">
          {visibleItems.map((item, index) => (
            <article
              key={item._id}
              className={`group relative min-h-[250px] overflow-hidden rounded-lg border border-white/20 bg-[#0a211d] ${
                index % 4 === 0 || index % 4 === 3
                  ? "xl:row-span-2"
                  : ""
              }`}
            >
              {item.type === "gif" && (
                <span className="absolute right-4 top-4 z-10 rounded-full bg-[#ffd35e] px-3 py-1 text-xs font-black text-[#10201d]">
                  Animated
                </span>
              )}

              <img
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                src={item.file}
                alt={item.title}
              />

              <div className="absolute inset-x-3 bottom-3 rounded-lg border border-white/20 bg-[#10201d]/85 p-3 backdrop-blur sm:inset-x-4 sm:bottom-4 sm:p-4">
                <span className="text-xs font-black uppercase text-[#e0a93f]">
                  {item.type === "gif" ? "GIF" : "Photo"}
                </span>

                <h3 className="mt-1 text-lg font-black sm:text-xl">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/75 sm:text-base">
                  {item.caption}
                </p>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Pagination */}
      {!preview && (
        <Pagination
          page={page}
          totalPages={totalPages}
          setPage={setPage}
          dark
        />
      )}

      {/* Preview Button */}
      {preview && (
        <Link
          className="mt-7 inline-flex font-black text-[#c8efe2]"
          href="/gallery"
        >
          Open full gallery
        </Link>
      )}
    </section>
  );
}


/* =========================
   EXPERTS SECTION
========================= */
export function ExpertsSection({ preview = false }) {
  const [experts, setExperts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [role, setRole] = useState("all");
  const [query, setQuery] = useState("");

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Fetch Experts
  useEffect(() => {
    const fetchExperts = async () => {
      try {
        setLoading(true);

        const response = await apiClient.get(
          `/experts/get_experts?page=${page}&limit=${pageSize}`
        );

        const data = response.data;

        // API response => data.data
        const nextExperts = data.data || [];
        setExperts(nextExperts.length ? nextExperts : expertsFallback);
        setTotalPages(data.totalPages || 1);

      } catch (error) {
        console.log("Error fetching experts:", error);
        setExperts(expertsFallback);
        setTotalPages(1);
      } finally {
        setLoading(false);
      }
    };

    fetchExperts();
  }, [page]);

  // Dynamic Roles
  const roles = useMemo(() => {
    return [
      "all",
      ...new Set(
        experts
          .map((expert) => expert.designation)
          .filter((designation) =>
            priorityRoles.includes(designation)
          )
      ),
    ];
  }, [experts]);

  // Filters
  const filtered = experts.filter((expert) => {
    const matchesRole =
      role === "all" ||
      expert.designation === role;

    const matchesQuery =
      `${expert.name} ${expert.designation} ${expert.specialization?.join(" ")}`
        .toLowerCase()
        .includes(query.toLowerCase());

    return matchesRole && matchesQuery;
  });

  const visibleExperts = preview
    ? filtered.slice(0, 3)
    : filtered;

  return (
    <section className={section} id="experts">
      <div className={`${sectionHead} max-w-2xl`}>
        <span className={eyebrow}>
          <Award size={16} />
          Experts
        </span>

        <h2 className={sectionTitle}>
          Trusted professionals for every kind of care.
        </h2>

        <p className={sectionText}>
          Find the right experts, handpicked for your comfort and needs.
          Search by name or filter by the support you need most.
        </p>
      </div>

      {!preview && (
        <div className="mb-8 flex min-w-0 flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          
          {/* Search */}
          <label className={inputShell}>
            <Search size={16} />

            <input
              className="w-full bg-transparent outline-none"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setPage(1);
              }}
              placeholder="Search by name"
            />
          </label>

          {/* Role Filter */}
          <select
            className="min-h-12 w-full rounded-lg border border-[#dce8e3] bg-white px-4 text-[#10201d] outline-none lg:w-72"
            value={role}
            onChange={(event) => {
              setRole(event.target.value);
              setPage(1);
            }}
          >
            {roles.map((option) => (
              <option value={option} key={option}>
                {option === "all"
                  ? "All roles"
                  : option}
              </option>
            ))}
          </select>
        </div>
      )}

      {loading ? (
        <div className="flex min-h-44 items-center justify-center gap-3 rounded-lg bg-white text-[#10201d]">
          <Loader2 className="animate-spin" />
          Loading experts
        </div>
      ) : (
        <div className="grid min-w-0 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {visibleExperts.map((expert) => (
            <article className={card} key={expert._id}>
              
              <img
                className="aspect-[4/3] w-full object-cover object-top"
                src={expert.profileImage}
                alt={expert.name}
              />

              <div className="p-5 sm:p-6">

                <span className="inline-flex items-center gap-2 text-xs font-black uppercase text-[#e0a93f]">
                  <Sparkles size={14} />
                  {expert.experience} Years Experience
                </span>

                <h3 className="mt-3 text-xl font-black text-[#10201d] sm:text-2xl">
                  {expert.name}
                </h3>

                <p className="mt-1 font-black text-[#096454]">
                  {expert.designation}
                </p>

                <p className="mt-3 leading-7 text-[#63706d]">
                  {expert.specialization?.join(", ")}
                </p>

              </div>
            </article>
          ))}
        </div>
      )}

      {!preview && (
        <Pagination
          page={page}
          totalPages={totalPages}
          setPage={setPage}
        />
      )}

      {preview && (
        <Link
          className="mt-7 inline-flex font-black text-[#096454]"
          href="/experts"
        >
          View all experts
        </Link>
      )}
    </section>
  );
}



/* =========================
   PAGINATION
========================= */

function Pagination({
  page,
  totalPages,
  setPage,
  dark = false,
}) {
  return (
    <div
      className={`mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center ${
        dark ? "text-white" : "text-[#10201d]"
      }`}
    >
      <button
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#dce8e3] bg-white px-4 font-black text-[#10201d] disabled:opacity-45"
        type="button"
        disabled={page === 1}
        onClick={() =>
          setPage((value) => Math.max(1, value - 1))
        }
      >
        <ChevronLeft size={17} />
        Prev
      </button>

      <span className="text-center font-black opacity-75">
        Page {page} of {totalPages}
      </span>

      <button
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#dce8e3] bg-white px-4 font-black text-[#10201d] disabled:opacity-45"
        type="button"
        disabled={page === totalPages}
        onClick={() =>
          setPage((value) =>
            Math.min(totalPages, value + 1)
          )
        }
      >
        Next
        <ChevronRight size={17} />
      </button>
    </div>
  );
}
