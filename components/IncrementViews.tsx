"use client";

import { useEffect } from "react";
import { incrementViews } from "@/app/(actions)/action";

export function IncrementViews({ id }: { id: string }) {
  useEffect(() => {
    if (id) {
      incrementViews(id);
    }
  }, [id]);

  return null; // nothing to show
}
