import { type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Background } from "../components/Background";
import { ScreenTitle } from "../components/ScreenTitle";
import { Splat } from "../components/Splat";
import { Screen, Tag } from "../components/ui";
import { useKeyNav } from "../hooks/useKeyNav";
import { useNav } from "../app/router";
import { useSettings } from "../app/settings";
import { profile } from "../data/profile";
import { research } from "../data/research";
import "./Research.css";

const ease = [0.16, 1, 0.3, 1] as const;
const N = research.length;

/* ─────────────────────────────────────────────────────────
   RESEARCH — similar to Chronicle: one research paper fills the screen
   at a time, with an index on the left, details in the middle, and
   background art. ↑/↓ turns the page.
   ───────────────────────────────────────────────────────── */

export function Research() {
  const { go } = useNav();
  const { reducedMotion } = useSettings();
  const { index, setIndex } = useKeyNav({
    count: N,
    axis: "both",
    loop: false,
    initial: (() => {
      const q = Number(new URLSearchParams(window.location.search).get("sel"));
      if (Number.isFinite(q) && q >= 1 && q <= N) return q - 1;
      return 0;
    })(),
    onBack: () => go("/menu"),
  });
  const r = research[index];
  const num = String(index + 1).padStart(2, "0");

  const rise = (k: number) => ({
    initial: reducedMotion ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.12 + k * 0.06, duration: 0.4, ease },
  });

  return (
    <Screen
      head={<ScreenTitle sub={`${N} research papers · ${r.institution}`}>Research</ScreenTitle>}
      hints={[
        { key: "↕", label: "Paper" },
      ]}
      onBack={() => go("/menu")}
      className="research"
    >
      <Background art={r.art} mobileArt={((index % 7) + 1) as number} focus="center" dim={0.72} position="center 35%" />

      <div className="rs" style={{ "--paint": r.paint } as CSSProperties}>
        {/* ── index ────────────────────────────────────────────────────── */}
        <nav className="rs__index" aria-label="Research Papers">
          {research.map((x, i) => {
            const on = i === index;
            return (
              <button
                key={x.id}
                className={`rs-idx ${on ? "is-active" : ""}`}
                style={{ "--col": x.paint } as CSSProperties}
                onPointerMove={(e) => e.pointerType === 'mouse' && setIndex(i)}
                onClick={() => setIndex(i)}
                aria-pressed={on}
                aria-label={`${x.title}`}
              >
                {on && (
                  <motion.span
                    layoutId="rs-idx-mark"
                    className="rs-idx__mark"
                    aria-hidden="true"
                    transition={{ duration: reducedMotion ? 0 : 0.35, ease }}
                  >
                    <Splat color={x.paint} seed={i + 2} />
                  </motion.span>
                )}
                <span className="rs-idx__num t-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="rs-idx__text">
                  <span className="rs-idx__title">{x.title}</span>
                  <span className="rs-idx__institution t-mono">{x.institution}</span>
                </span>
              </button>
            );
          })}
        </nav>

        {/* ── paper details ─────────────────────────────────────────────── */}
        <div className="rs__main" aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            <motion.article
              key={r.id}
              className="rs-paper"
              initial={reducedMotion ? false : { opacity: 0, x: 40, skewX: -3 }}
              animate={{ opacity: 1, x: 0, skewX: 0 }}
              exit={reducedMotion ? { opacity: 0 } : { opacity: 0, x: -24, transition: { duration: 0.16 } }}
              transition={{ duration: 0.38, ease }}
            >
              <span className="rs-paper__kicker t-mono">
                Paper {num} · {r.institution} · {r.submitted}
              </span>

              <h2 className="rs-paper__title t-hero">
                <span className="rs-paper__title-splat" aria-hidden="true">
                  <Splat color={r.paint} seed={index + 4} />
                  <Splat color={r.paint} seed={index + 9} className="splat--second" />
                </span>
                <span className="rs-paper__title-text">{r.title}</span>
              </h2>
              <p className="rs-paper__subtitle">{r.subtitle}</p>

              {/* Google Scholar Link */}
              {r.url && (
                <motion.div {...rise(0)}>
                  <a href={r.url} target="_blank" rel="noopener noreferrer" className="rs-paper__link">
                    View on Google Scholar →
                  </a>
                </motion.div>
              )}

              {/* Stats */}
              <motion.div className="rs-paper__stats" {...rise(1)}>
                {r.stats.map((s) => (
                  <div key={s.label} className="rs-stat">
                    <span className="rs-stat__val t-num">
                      {s.value.startsWith('+') && <span className="rs-stat__sign">+</span>}
                      {s.value.replace(/^\+/, '')}
                      {s.unit && <small>{s.unit}</small>}
                    </span>
                    <span className="rs-stat__label">{s.label}</span>
                  </div>
                ))}
              </motion.div>

              <motion.p className="rs-paper__abstract t-body" {...rise(2)}>
                {r.abstract}
              </motion.p>

              <motion.div className="tags rs-paper__tags" {...rise(3)}>
                {r.keywords.map((k) => (
                  <Tag key={k}>{k}</Tag>
                ))}
              </motion.div>

              <motion.div className="rs-paper__meta" {...rise(4)}>
                <div className="rs-paper__meta-row">
                  <span className="t-label">Department</span>
                  <span className="t-ui">{r.department}</span>
                </div>
                <div className="rs-paper__meta-row">
                  <span className="t-label">Supervisor</span>
                  <span className="t-ui">{r.supervisor}</span>
                </div>
                <div className="rs-paper__meta-row">
                  <span className="t-label">Grade</span>
                  <span className="rs-paper__grade t-num">{r.grade}</span>
                </div>
              </motion.div>

              <motion.div className="rs-paper__authors" {...rise(5)}>
                <span className="t-label">Authors</span>
                <ul>
                  {r.authors.map((a) => (
                    <li key={a} className={`t-ui ${a === profile.name ? "is-me" : ""}`}>
                      {a}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div className="rs-paper__review" {...rise(6)}>
                <span className="t-label">Submitted for review</span>
                <ul>
                  {r.review.map((rev) => (
                    <li key={rev} className="t-ui">
                      <span className="rs-paper__dot" aria-hidden="true" />
                      {rev}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </Screen>
  );
}


