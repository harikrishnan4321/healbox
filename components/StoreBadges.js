const appStoreUrl = "https://apps.apple.com/in/app/healboxx/id6444076704";
const playStoreUrl = "https://play.google.com/store/apps/details?id=com.healbox_app&hl=en_IN";

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8 shrink-0" aria-hidden="true">
      <path
        fill="currentColor"
        d="M16.6 12.7c0-2.2 1.8-3.2 1.9-3.3-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.6.8-3.3.8-.7 0-1.8-.8-2.9-.8-1.5 0-2.9.9-3.7 2.2-1.6 2.8-.4 6.9 1.1 9.1.8 1.1 1.7 2.3 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3 .7c1.3 0 2.1-1.1 2.8-2.2.9-1.3 1.2-2.5 1.2-2.6 0 0-2.8-1.1-2.8-3.8ZM14.4 6.2c.6-.8 1.1-1.8 1-2.8-1 .1-2.1.7-2.8 1.4-.6.7-1.1 1.7-1 2.7 1.1.1 2.2-.5 2.8-1.3Z"
      />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 28 30" className="h-8 w-8 shrink-0" aria-hidden="true">
      <path fill="#34a853" d="M1.1 1.2c-.4.5-.6 1.2-.6 2v23.6c0 .8.2 1.5.6 2l13.4-13.8L1.1 1.2Z" />
      <path fill="#4285f4" d="m19.2 10.2-4.7 4.8 4.7 4.8 5.7-3.3c1.7-1 1.7-2.1 0-3l-5.7-3.3Z" />
      <path fill="#fbbc04" d="m1.1 1.2 13.4 13.8 4.7-4.8L3.8 1.3C2.8.7 1.8.7 1.1 1.2Z" />
      <path fill="#ea4335" d="M1.1 28.8c.7.5 1.7.5 2.7-.1l15.4-8.9-4.7-4.8L1.1 28.8Z" />
    </svg>
  );
}

function StoreBadge({ href, icon, eyebrow, label, ariaLabel }) {
  return (
    <a
      className="inline-flex min-h-[62px] w-full max-w-[245px] items-center gap-3 rounded-lg bg-[#111315] px-4 py-2 text-white shadow-[0_12px_28px_rgba(0,0,0,.22)] ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:bg-black sm:w-auto"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
    >
      {icon}
      <span className="grid text-left leading-none">
        <span className="text-[11px] font-semibold uppercase tracking-[.08em] text-white/78">{eyebrow}</span>
        <span className="mt-1 text-[25px] font-bold tracking-normal text-white">{label}</span>
      </span>
    </a>
  );
}

export default function StoreBadges({ className = "" }) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:flex-wrap ${className}`}>
      <StoreBadge
        href={appStoreUrl}
        icon={<AppleIcon />}
        eyebrow="Download on the"
        label="App Store"
        ariaLabel="Download HealBoxx on the App Store"
      />
      <StoreBadge
        href={playStoreUrl}
        icon={<PlayIcon />}
        eyebrow="Get it on"
        label="Google Play"
        ariaLabel="Get HealBoxx on Google Play"
      />
    </div>
  );
}
