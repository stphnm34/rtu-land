"use client";

import { useRouter, useSearchParams } from "next/navigation";

export function PropertyFilters() {
  const router = useRouter();
  const params = useSearchParams();

  const status = params.get("status") || "";
  const location = params.get("location") || "";

  function updateFilter(key: string, value: string) {
    const newParams = new URLSearchParams(params.toString());

    if (value) newParams.set(key, value);
    else newParams.delete(key);

    router.push(`/properties?${newParams.toString()}`);
  }

  return (
    <div className="flex flex-wrap gap-3">
      {/* Status Filter */}
      <select
        value={status}
        onChange={(e) => updateFilter("status", e.target.value)}
        className="border rounded-md px-3 py-2 text-sm"
      >
        <option value="">All Status</option>
        <option value="pre-selling">Pre-Selling</option>
        <option value="rfo">RFO</option>
        <option value="sold">Sold</option>
      </select>

      {/* Location Filter */}
      <select
        value={location}
        onChange={(e) => updateFilter("location", e.target.value)}
        className="border rounded-md px-3 py-2 text-sm"
      >
        <option value="">All Locations</option>
        <option value="liloan">Liloan</option>
        <option value="consolacion">Consolacion</option>
        <option value="talisay">Talisay</option>
      </select>
    </div>
  );
}
