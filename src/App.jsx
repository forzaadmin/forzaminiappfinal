import React, { useState } from "react";
import logo from "/logo.png";

// External Links
const HEADWAY_URL = "https://care.headway.co/providers/eva-gillespie-2?utm_source=pem&utm_medium=direct_link&utm_campaign=91902";
const INTAKEQ_BOOKING_URL = "https://forza.intakeq.com/booking";
const PRACTICEQ_PORTAL_URL = "https://forza.intakeq.com/";
const REQUEST_FORMS_URL = "https://forms.gle/KXxE4ZsZo2vaZRBQ9";
const PATREON_URL = "https://patreon.com/TheFeelingsForum";
const GOOGLE_DIRECTIONS = "https://www.google.com/maps/dir/?api=1&destination=5215%20N%20Sabino%20Canyon%20Rd%2C%20Tucson%2C%20AZ%2085750";

// Podcasts
const PODCASTS = [
  {
    title: "Navigating Narcissism with Dr. Ramani",
    apple: "https://podcasts.apple.com/us/podcast/navigating-narcissism-with-dr-ramani/id1629909313",
    spotify: https://open.spotify.com/search/Navigating%20Narcissism%20Dr%20Ramani,
  },
  {
    title: "The Covert Narcissism Podcast (Renee Swanson)",
    apple: https://podcasts.apple.com/us/search?term=The%20Covert%20Narcissism%20Podcast%20Renee%20Swanson,
    spotify: https://open.spotify.com/search/The%20Covert%20Narcissism%20Podcast%20Renee%20Swanson
  },
  {
    title: The Narcissistic Abuse & Trauma Recovery Podcast (Caroline Strawson),
    apple: https://podcasts.apple.com/us/search?term=Caroline%20Strawson%20Narcissistic%20Abuse%20%26%20Trauma%20Recovery,
    spotify: https://open.spotify.com/search/Caroline%20Strawson%20Narcissistic%20Abuse%20Trauma%20Recovery
  },
  {
    title: Narcissist Apocalypse,
    apple: https://podcasts.apple.com/us/search?term=Narcissist%20Apocalypse,
    spotify: https://open.spotify.com/search/Narcissist%20Apocalypse
  },
  {
    title: Waking Up to Narcissism (Tony Overbay, LMFT),
    apple: https://podcasts.apple.com/us/search?term=Waking%20Up%20to%20Narcissism%20Tony%20Overbay ,
    spotify: https://open.spotify.com/search/Waking%20Up%20to%20Narcissism%20Tony%20Overbay
  }
];

const YOUTUBES = [
  { title: "Dr. Ramani (YouTube)", url: "https://www.youtube.com/@DoctorRamani" },
  { title: "Surviving Narcissism (YouTube)", url: "https://www.youtube.com/@SurvivingNarcissism" }
];

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center p-6">
      {/* Header */}
      <header className="w-full max-w-md text-center mt-4">
        <img src={logo} alt="Forza Behavioral Health" className="mx-auto w-28 h-28 rounded-2xl shadow" />
        <h1 className="text-2xl font-semibold tracking-tight mt-3">Forza Behavioral Health</h1>
        <p className="text-sm text-neutral-300 mt-1">Grounded support, modern voice.</p>
      </header>

      {page === "home" ? <Home setPage={setPage} /> : <Forum setPage={setPage} />}
      
      {/* Footer */}
      <footer className="w-full max-w-md text-center text-[11px] text-neutral-400 mt-8 mb-6">
        <button onClick={() => setPage("home")} className="underline decoration-neutral-600 hover:decoration-white">Home</button>
        <span className="mx-2">•</span>
        <button onClick={() => setPage("forum")} className="underline decoration-neutral-600 hover:decoration-white">Feelings Forum</button>
        <p className="mt-2">© {new Date().getFullYear()} Forza Behavioral Health</p>
      </footer>
    </main>
  );
}

function TileButton({ href, children, onClick }) {
  const base = "rounded-2xl border border-neutral-700 bg-white text-black p-4 text-center shadow-sm hover:shadow-md active:scale-[.99]";
  if (href) {
    return <a href={href} target="_blank" rel="noreferrer" className={base}>{children}</a>;
  }
  return <button onClick={onClick} className={base}>{children}</button>;
}

function Home({ setPage }) {
  return (
    <>
      {/* Primary actions */}
      <section className="w-full max-w-md grid grid-cols-2 gap-3 mt-6">
        <TileButton href={"https://care.headway.co/providers/eva-gillespie-2?utm_source=pem&utm_medium=direct_link&utm_campaign=91902"}>
          <div className="text-base font-medium">New Patients (Insurance)</div>
          <div className="text-xs text-neutral-600 mt-1">Start via Headway</div>
        </TileButton>

        <TileButton href={PRACTICEQ_PORTAL_URL}>
          <div className="text-base font-medium">Patient Portal</div>
          <div className="text-xs text-neutral-600 mt-1">Login & Messages</div>
        </TileButton>

        <TileButton href={INTAKEQ_BOOKING_URL}>
          <div className="text-base font-medium">Established Scheduling</div>
          <div className="text-xs text-neutral-600 mt-1">Book a follow-up</div>
        </TileButton>

        <TileButton href={REQUEST_FORMS_URL}>
          <div className="text-base font-medium">Request Forms</div>
          <div className="text-xs text-neutral-600 mt-1">Letters & Docs</div>
        </TileButton>
      </section>

      {/* Spotlight card */}
      <section className="w-full max-w-md mt-8">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-4">
          <h2 className="text-base font-medium">🌙 This Month in The Feelings Forum</h2>
          <p className="text-sm text-neutral-300 mt-1">
            <span className="font-semibold text-white">Escaping Narcissism</span> — Live chat space + curated pods & videos.
          </p>
          <button onClick={() => setPage('forum')}
            className="mt-3 inline-block rounded-xl bg-white text-black px-4 py-2 text-sm font-medium shadow hover:shadow-md active:scale-[.99]">
            Open Forum Hub
          </button>
        </div>
      </section>

      {/* Utility */}
      <section className="w-full max-w-md mt-6 grid grid-cols-2 gap-3">
        <TileButton href={"https://www.google.com/maps/dir/?api=1&destination=5215%20N%20Sabino%20Canyon%20Rd%2C%20Tucson%2C%20AZ%2085750"}>
          <div className="text-base font-medium">Directions</div>
          <div className="text-xs text-neutral-600 mt-1">5215 N Sabino Canyon Rd</div>
        <div className="flex justify-center space-x-6 mt-8">
  {/* Call */}
  <a
    href="tel:5202166216"
    className="px-4 py-2 bg-white text-black rounded-xl shadow hover:bg-neutral-200"
  >
    Call
  </a>

  {/* Text */}
  <a
    href="sms:5202166216"
    className="px-4 py-2 bg-white text-black rounded-xl shadow hover:bg-neutral-200"
  >
    Text
  </a>

  {/* Email */}
  <a
    href="mailto:Admin@forzabehavioralhealth.com"
    className="px-4 py-2 bg-white text-black rounded-xl shadow hover:bg-neutral-200"
  >
    Email
  </a>

  {/* Directions */}
  <a
    href="https://maps.google.com/?q=5215+N+Sabino+Canyon+Rd+Tucson+AZ+85750"
    className="px-4 py-2 bg-white text-black rounded-xl shadow hover:bg-neutral-200"
    target="_blank"
    rel="noopener noreferrer"
  >
    Click for Directions
  </a>
</div>

  );
}

function Forum({ setPage }) {
  return (
    <section className="w-full max-w-md mt-6">
      <button onClick={() => setPage('home')} className="text-sm text-neutral-300 underline decoration-neutral-600 hover:decoration-white">← Back to Home</button>
      <h2 className="text-xl font-semibold mt-2">The Feelings Forum</h2>
      <p className="text-sm text-neutral-300 mt-1">
        Our safe, supportive live chat space and resource hub. Each month we focus on a new theme—this month: <span className="font-semibold text-white">Escaping Narcissism</span>.
      </p>

      <a href={PATREON_URL} target="_blank" rel="noreferrer"
        className="mt-4 inline-block rounded-xl bg-white text-black px-4 py-2 text-sm font-medium shadow hover:shadow-md active:scale-[.99]">
        Sign up on Patreon to join the conversation
      </a>

      <div className="mt-6 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-4">
        <h3 className="text-base font-medium">🎧 Podcast Picks</h3>
        <ul className="mt-2 space-y-2 text-sm">
          {PODCASTS.map((p, idx) => (
            <li key={idx} className="leading-snug">
              <span className="text-white">{p.title}</span>
              <span className="text-neutral-400"> — </span>
              <a className="underline decoration-neutral-600 hover:decoration-white" href={p.apple} target="_blank" rel="noreferrer">Apple</a>
              <span className="mx-1 text-neutral-500">|</span>
              <a className="underline decoration-neutral-600 hover:decoration-white" href={p.spotify} target="_blank" rel="noreferrer">Spotify</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-4">
        <h3 className="text-base font-medium">📺 Watch on YouTube</h3>
        <ul className="mt-2 space-y-2 text-sm">
          {YOUTUBES.map((y, idx) => (
            <li key={idx}>
              <a className="underline decoration-neutral-600 hover:decoration-white" href={y.url} target="_blank" rel="noreferrer">{y.title}</a>
            </li>
          ))}
        </ul>
      </div>

      <p className="text-[11px] text-neutral-400 mt-6">
        Can’t join live? Subscribe on Patreon for monthly recaps and upcoming themes.
      </p>
    </section>
  );
}
