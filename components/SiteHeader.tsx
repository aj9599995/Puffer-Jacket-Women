"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  ArrowsClockwise,
  CaretDown,
  Handbag,
  Heart,
  List,
  MagnifyingGlass,
  Question,
  Ruler,
  Truck,
  X,
} from "@phosphor-icons/react";
import {
  categories,
  categoryBySlug,
  productBySlug,
  products,
  photoForProduct,
  productsIn,
  type Product,
} from "@/lib/catalog";
import { swatchFor } from "@/lib/swatch";
import { SAVED_EVENT, readSaved } from "@/lib/saved";
import { localePath, t, type Locale } from "@/lib/i18n";
import { useCart } from "./CartProvider";

// One panel is open at a time, below the header row.
type Panel =
  | { kind: "menu" }
  | { kind: "category"; slug: string }
  | { kind: "search" }
  | { kind: "saved" }
  | null;

function isSamePanel(a: Panel, b: Panel): boolean {
  if (!a || !b) return false;
  if (a.kind !== b.kind) return false;
  return a.kind !== "category" || a.slug === (b as { slug: string }).slug;
}

export default function SiteHeader({ lang = "en" }: { lang?: Locale }) {
  const s = t(lang);
  const [panel, setPanel] = useState<Panel>(null);
  const [query, setQuery] = useState("");
  const [savedSlugs, setSavedSlugs] = useState<string[]>([]);
  const { count } = useCart();
  const pathname = usePathname();
  const header = useRef<HTMLElement>(null);
  const searchField = useRef<HTMLInputElement>(null);

  // Saved pieces: read this browser's list and follow changes made elsewhere.
  useEffect(() => {
    const sync = () => setSavedSlugs(readSaved());
    sync();
    window.addEventListener(SAVED_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(SAVED_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  // Escape and a click outside the header close the open panel.
  useEffect(() => {
    if (!panel) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setPanel(null);
    }
    function onPointer(event: PointerEvent) {
      if (header.current && !header.current.contains(event.target as Node)) setPanel(null);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [panel]);

  // Opening search puts the cursor in the search field.
  useEffect(() => {
    if (panel?.kind === "search") searchField.current?.focus();
  }, [panel]);

  // Going to a new page closes whatever was open.
  useEffect(() => {
    setPanel(null);
    setQuery("");
  }, [pathname]);

  function toggle(next: Panel) {
    setPanel((current) => (isSamePanel(current, next) ? null : next));
  }

  // Hovering a category opens its panel, on fine pointers only.
  function hoverCategory(slug: string) {
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      setPanel({ kind: "category", slug });
    }
  }

  const openCategory = panel?.kind === "category" ? categoryBySlug(panel.slug) : undefined;

  const q = query.trim().toLowerCase();
  const results: Product[] = q
    ? products
        .filter((p) =>
          [p.name, p.colour, p.summary, categoryBySlug(p.category)?.name ?? ""].some((value) =>
            value.toLowerCase().includes(q),
          ),
        )
        .slice(0, 8)
    : [];

  const savedProducts = savedSlugs
    .map((slug) => productBySlug(slug))
    .filter((p): p is Product => p !== undefined);

  const notes = [
    { icon: Ruler, text: s.noteFit },
    { icon: Truck, text: s.noteShipping },
    { icon: ArrowsClockwise, text: s.noteReturns },
    { icon: Question, text: s.noteQuestions, href: localePath(lang, "/faq") },
  ];

  const catName = (slug: string) => s.categories[slug as keyof typeof s.categories];

  return (
    <>
      <div className="topbar">
        <ul className="topbar__list">
          {notes.map(({ icon: Icon, text, href }) => (
            <li key={text} className="topbar__item">
              <Icon size={18} aria-hidden="true" />
              {href ? <Link href={href}>{text}</Link> : <span>{text}</span>}
            </li>
          ))}
        </ul>
      </div>

      <header
        ref={header}
        className="site-header"
        onMouseLeave={() => setPanel((p) => (p?.kind === "category" ? null : p))}
        onBlur={(event) => {
          if (!header.current?.contains(event.relatedTarget as Node | null)) setPanel(null);
        }}
      >
        <div className="container site-header__inner">
          <Link href={localePath(lang, "/")} className="site-logo" aria-label={`${s.home}, Puffer Jacket Women`}>
            <img src="/brand/logo.png" alt="Puffer Jacket Women logo" width={1822} height={482} />
          </Link>

          <nav className="nav" aria-label="Main">
            <Link href={localePath(lang, "/")} aria-current={pathname === localePath(lang, "/") ? "page" : undefined}>
              {s.home}
            </Link>
            {categories.map((c) => {
              const isOpen = panel?.kind === "category" && panel.slug === c.slug;
              const href = localePath(lang, `/category/${c.slug}`);
              return (
                <div key={c.slug} className="nav-item">
                  <Link
                    href={href}
                    aria-current={pathname === href ? "page" : undefined}
                    onMouseEnter={() => hoverCategory(c.slug)}
                    onFocus={() => setPanel({ kind: "category", slug: c.slug })}
                  >
                    {catName(c.slug)}
                  </Link>
                  <button
                    type="button"
                    className="nav-item__toggle"
                    aria-label={`${catName(c.slug)}`}
                    aria-expanded={isOpen}
                    aria-controls="header-panel"
                    onClick={() => toggle({ kind: "category", slug: c.slug })}
                  >
                    <CaretDown size={14} aria-hidden="true" />
                  </button>
                </div>
              );
            })}
          </nav>

          <div className="header-actions">
            <Link href={localePath(lang, "/shop")} className="header-pill">
              {s.shopAll}
            </Link>
            <button
              type="button"
              className="icon-btn"
              aria-label={s.search}
              aria-expanded={panel?.kind === "search"}
              aria-controls="header-panel"
              onClick={() => toggle({ kind: "search" })}
            >
              <MagnifyingGlass size={22} aria-hidden="true" />
            </button>
            <button
              type="button"
              className="icon-btn"
              aria-label={`${s.saved}, ${savedSlugs.length}`}
              aria-expanded={panel?.kind === "saved"}
              aria-controls="header-panel"
              onClick={() => toggle({ kind: "saved" })}
            >
              <Heart size={22} aria-hidden="true" />
              <span className="icon-btn__badge" aria-hidden="true">
                {savedSlugs.length}
              </span>
            </button>
            <Link href={localePath(lang, "/cart")} className="icon-btn" aria-label={`${s.bag}, ${count}`}>
              <Handbag size={22} aria-hidden="true" />
              <span className="icon-btn__badge" aria-hidden="true">
                {count}
              </span>
            </Link>
            <button
              type="button"
              className="menu-toggle"
              aria-expanded={panel?.kind === "menu"}
              aria-controls="header-panel"
              onClick={() => toggle({ kind: "menu" })}
            >
              {panel?.kind === "menu" ? <X size={20} aria-hidden="true" /> : <List size={20} aria-hidden="true" />}
              <span className="sr-only">{panel?.kind === "menu" ? s.closeMenu : s.menu}</span>
            </button>
          </div>
        </div>

        {panel ? (
          <div id="header-panel" className={`header-panel header-panel--${panel.kind}`}>
            <div className="container header-panel__inner">
              {panel.kind === "menu" ? (
                <nav className="drop-menu" aria-label={s.menu}>
                  <Link href={localePath(lang, "/")}>{s.home}</Link>
                  {categories.map((c) => (
                    <Link key={c.slug} href={localePath(lang, `/category/${c.slug}`)}>
                      {catName(c.slug)}
                    </Link>
                  ))}
                  <Link href={localePath(lang, "/shop")}>{s.shopAll}</Link>
                  <Link href={localePath(lang, "/guide")}>{s.linkGuide}</Link>
                  <Link href={localePath(lang, "/faq")}>{s.linkQuestions}</Link>
                </nav>
              ) : null}

              {panel.kind === "category" && openCategory ? (
                <>
                  <div className="drop-head">
                    <h2 className="drop-title">{catName(openCategory.slug)}</h2>
                    <Link href={localePath(lang, `/category/${openCategory.slug}`)} className="textlink">
                      {s.shopAll}: {catName(openCategory.slug)}
                    </Link>
                  </div>
                  <ul className="drop-grid">
                    {productsIn(openCategory.slug).map((p) => (
                      <li key={p.slug}>
                        <Link href={localePath(lang, `/product/${p.slug}`)}>
                          <span className="drop-swatch" style={{ ["--sw" as string]: swatchFor(p.colour) }} aria-hidden="true" />
                          <span className="drop-name">{p.name}</span>
                          <span className="drop-meta">{p.colour}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}

              {panel.kind === "search" ? (
                <>
                  <label className="search-field">
                    <span className="sr-only">{s.searchPlaceholder}</span>
                    <input
                      ref={searchField}
                      type="search"
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                      placeholder={s.searchPlaceholder}
                      autoComplete="off"
                    />
                  </label>
                  {!q ? (
                    <p className="drop-empty">{s.searchIdle}</p>
                  ) : results.length === 0 ? (
                    <p className="drop-empty">{s.noMatch.replace("{q}", query.trim())}</p>
                  ) : (
                    <ul className="drop-grid drop-grid--photos">
                      {results.map((p) => (
                        <li key={p.slug}>
                          <Link href={localePath(lang, `/product/${p.slug}`)}>
                            <span className="drop-photo">
                              <img
                                src={photoForProduct(p).src}
                                alt=""
                                width={photoForProduct(p).width}
                                height={photoForProduct(p).height}
                                loading="lazy"
                              />
                            </span>
                            <span className="drop-name">{p.name}</span>
                            <span className="drop-meta">
                              {p.colour} · {categoryBySlug(p.category)?.name}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : null}

              {panel.kind === "saved" ? (
                savedProducts.length === 0 ? (
                  <p className="drop-empty">{s.savedEmpty}</p>
                ) : (
                  <ul className="drop-grid drop-grid--photos">
                    {savedProducts.map((p) => (
                      <li key={p.slug}>
                        <Link href={localePath(lang, `/product/${p.slug}`)}>
                          <span className="drop-photo">
                            <img
                              src={photoForProduct(p).src}
                              alt=""
                              width={photoForProduct(p).width}
                              height={photoForProduct(p).height}
                              loading="lazy"
                            />
                          </span>
                          <span className="drop-name">{p.name}</span>
                          <span className="drop-meta">{p.colour}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )
              ) : null}
            </div>
          </div>
        ) : null}
      </header>
    </>
  );
}
