import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Careem Support Triage" },
      {
        name: "description",
        content:
          "Internal tool: paste incoming rider complaints and see the most urgent ones first.",
      },
      { property: "og:title", content: "Careem Support Triage" },
      {
        property: "og:description",
        content:
          "Internal tool: paste incoming rider complaints and see the most urgent ones first.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

type Category = "Safety" | "Payment" | "Driver" | "App" | "Other";

interface UrgentComplaint {
  text: string;
  category: Category;
  reason: string;
}

// Placeholder data. Deliberately hardcoded: this UI will be wired to a real
// triage model later. Never call an AI or external API from here.
const TRIAGE_RESULT: UrgentComplaint[] = [
  {
    text: "Driver kept touching my arm, I felt unsafe",
    category: "Safety",
    reason: "Possible harassment, needs immediate review",
  },
  {
    text: "Card charged but the ride never came",
    category: "Payment",
    reason: "Money taken with no service delivered",
  },
  {
    text: "Driver was rude and slammed the door",
    category: "Driver",
    reason: "Repeated driver-behaviour complaint",
  },
  {
    text: "App froze on the payment screen",
    category: "App",
    reason: "Blocks the rider from completing payment",
  },
  {
    text: "Promo code did not apply at checkout",
    category: "Other",
    reason: "Minor billing frustration",
  },
];

const TAG_STYLES: Record<Category, string> = {
  Safety: "bg-red-100 text-red-800 border-red-300",
  Payment: "bg-amber-100 text-amber-800 border-amber-300",
  Driver: "bg-sky-100 text-sky-800 border-sky-300",
  App: "bg-violet-100 text-violet-800 border-violet-300",
  Other: "bg-slate-100 text-slate-700 border-slate-300",
};

function Index() {
  const [input, setInput] = useState("");
  const [showResults, setShowResults] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-3xl px-4 py-8">
        <header className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight">
            Careem Support Triage
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            Paste incoming rider complaints and see the most urgent ones first.
          </p>
        </header>

        <main>
          <label
            htmlFor="complaints"
            className="mb-1 block text-sm font-medium text-slate-800"
          >
            Paste rider complaints here (one per line)
          </label>
          <textarea
            id="complaints"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={10}
            className="w-full rounded-md border border-slate-300 bg-white p-3 font-mono text-sm text-slate-900 shadow-sm outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
            placeholder={"e.g.\nDriver was rude to me\nI was charged twice"}
          />

          <button
            type="button"
            onClick={() => setShowResults(true)}
            className="mt-4 rounded-md bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
          >
            Triage complaints
          </button>

          {showResults && (
            <section className="mt-8">
              <h2 className="mb-3 text-lg font-semibold">
                Top 5 most urgent
              </h2>
              <ul className="space-y-3">
                {TRIAGE_RESULT.map((c, i) => (
                  <li
                    key={i}
                    className={
                      "rounded-md border bg-white p-4 shadow-sm " +
                      (c.category === "Safety"
                        ? "border-red-400 border-l-4 border-l-red-600"
                        : "border-slate-200 border-l-4 border-l-slate-300")
                    }
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <p className="text-sm font-medium text-slate-900">
                        {c.text}
                      </p>
                      <span
                        className={
                          "inline-flex shrink-0 items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold " +
                          TAG_STYLES[c.category]
                        }
                      >
                        {c.category}
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-slate-600">{c.reason}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}
