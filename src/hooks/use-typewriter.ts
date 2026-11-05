import { useEffect, useState } from "react";

type Options = {
  enabled?: boolean;
  typeMs?: number;
  deleteMs?: number;
  holdMs?: number;
};

/** Types and deletes each word in turn. `words` must be a stable reference. */
export function useTypewriter(
  words: readonly string[],
  { enabled = true, typeMs = 55, deleteMs = 30, holdMs = 1800 }: Options = {}
) {
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    const word = words[index];
    const atEnd = !deleting && length === word.length;
    const atStart = deleting && length === 0;
    const delay = atEnd ? holdMs : atStart ? 300 : deleting ? deleteMs : typeMs;

    const timer = setTimeout(() => {
      if (atEnd) setDeleting(true);
      else if (atStart) {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else setLength((l) => l + (deleting ? -1 : 1));
    }, delay);
    return () => clearTimeout(timer);
  }, [enabled, words, index, length, deleting, typeMs, deleteMs, holdMs]);

  return enabled ? words[index].slice(0, length) : words[0];
}
