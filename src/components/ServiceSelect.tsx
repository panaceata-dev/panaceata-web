"use client";

import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from "@headlessui/react";
import { useState } from "react";

const serviceOptions = [
  "Application Modernization",
  "Cloud Migration",
  "Managed Cloud Operations",
  "Data Engineering & BI",
  "Outsource Development",
  "General Inquiry",
];

export default function ServiceSelect() {
  const [selected, setSelected] = useState("");

  return (
    <div className="relative">
      <input type="hidden" name="service" value={selected} />
      <Listbox value={selected} onChange={setSelected}>
        <ListboxButton className="flex h-[44px] w-full items-center justify-between rounded-[10px] border border-[#E2E8F0] bg-[#F8FAFC] px-3.5 pr-10 text-sm text-left outline-none transition-colors focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]/30 cursor-pointer">
          <span className={selected ? "text-gray-900" : "text-[#94A3B8]"}>
            {selected || "Service Interest"}
          </span>
        </ListboxButton>
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8]">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
        </span>
        <ListboxOptions className="absolute mt-1.5 w-full rounded-xl bg-white shadow-lg border border-[#E2E8F0] z-50 overflow-hidden outline-none">
          {serviceOptions.map((opt, i) => (
            <ListboxOption
              key={opt}
              value={opt}
              className={({ focus, selected: sel }) =>
                `cursor-pointer px-3.5 py-2.5 text-sm ${
                  i === 0 ? "rounded-t-xl" : ""
                } ${
                  i === serviceOptions.length - 1 ? "rounded-b-xl" : ""
                } ${
                  sel || focus
                    ? "bg-[#1E293B] text-white"
                    : "text-gray-700"
                }`
              }
            >
              {opt}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
}
