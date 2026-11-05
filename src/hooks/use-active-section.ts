import { useEffect, useState } from "react";

/** Returns the id of the section currently crossing the middle of the viewport. */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    const home = document.getElementById("home");
    const targets = [home, ...ids.map((id) => document.getElementById(id))];
    targets.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active === "home" ? null : active;
}
