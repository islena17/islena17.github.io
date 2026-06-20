import { useEffect, useState } from 'react';

export function useTypewriter(words: string[], speed = 80, pause = 1200): string {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const timeout = window.setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));
        if (text === current) window.setTimeout(() => setDeleting(true), pause);
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length === 0) {
          setDeleting(false);
          setIndex((value) => value + 1);
        }
      }
    }, deleting ? speed / 2 : speed);

    return () => window.clearTimeout(timeout);
  }, [deleting, index, pause, speed, text, words]);

  return text;
}
