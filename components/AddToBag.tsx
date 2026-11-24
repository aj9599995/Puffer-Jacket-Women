"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowsClockwise,
  Check,
  Heart,
  Minus,
  Plus,
  Ruler,
  ShieldCheck,
  ShoppingCart,
  Truck,
} from "@phosphor-icons/react";
import { useCart } from "./CartProvider";
import { swatchFor } from "@/lib/swatch";
import { readSaved, writeSaved } from "@/lib/saved";

type Props = {
  slug: string;
  name: string;
  colour: string;
  colours?: string[];
  onColour?: (colour: string) => void;
  sizes: string[];
};

export default function AddToBag({ slug, name, colour, colours, onColour, sizes }: Props) {
  const { add } = useCart();
  const [size, setSize] = useState<string | null>(sizes.length === 1 ? sizes[0] : null);
  const [qty, setQty] = useState(1);
  const [saved, setSaved] = useState(false);
  const [added, setAdded] = useState(false);

  // Saved pieces live only in this browser.
  useEffect(() => {
    setSaved(readSaved().includes(slug));
  }, [slug]);

  function toggleSave() {
    const next = !saved;
    setSaved(next);
    const list = new Set(readSaved());
    if (next) list.add(slug);
    else list.delete(slug);
    writeSaved([...list]);
  }

  function handleAdd() {
    if (!size) return;
    for (let i = 0; i < qty; i += 1) add({ slug, name, colour, size });
    setAdded(true);
  }

  return (
    <div className="buy">
      <div className="buy__row">
        <p className="buy__label">
          Colour <span>{colour}</span>
        </p>
        <div className="swatches" role="radiogroup" aria-label="Colour">
          {(colours ?? [colour]).map((option) => (
            <button
              key={option}
              type="button"
              role="radio"
              aria-checked={option === colour}
              aria-label={option}
              title={option}
              className={`swatch${option === colour ? " is-on" : ""}`}
              style={{ ["--sw" as string]: swatchFor(option) }}
              onClick={() => onColour?.(option)}
              disabled={!onColour}
            />
          ))}
        </div>
      </div>

      <fieldset className="buy__row buy__sizes">
        <legend className="buy__label">
          Size {sizes.length > 1 ? <span>{size ?? "Choose one"}</span> : null}
          <Link href="/size-guide" className="buy__guide">
            <Ruler size={16} aria-hidden="true" /> Size guide
          </Link>
        </legend>
        {sizes.length === 1 ? (
          <p className="buy__onesize">
            <strong>{sizes[0]}</strong>
            <span>No size to choose. Add it straight to your bag.</span>
          </p>
        ) : (
          <div className="sizes" role="group" aria-label="Choose a size">
            {sizes.map((s) => (
              <button
                key={s}
                type="button"
                className="size"
                aria-pressed={size === s}
                onClick={() => {
                  setSize(s);
                  setAdded(false);
                }}
              >
                {s}
              </button>
            ))}
          </div>
        )}
      </fieldset>

      <div className="buy__actions">
        <div className="qty" role="group" aria-label="Quantity">
          <button type="button" aria-label="Decrease quantity" onClick={() => setQty((q) => Math.max(1, q - 1))} disabled={qty <= 1}>
            <Minus size={16} aria-hidden="true" />
          </button>
          <output aria-live="polite">{qty}</output>
          <button type="button" aria-label="Increase quantity" onClick={() => setQty((q) => Math.min(10, q + 1))} disabled={qty >= 10}>
            <Plus size={16} aria-hidden="true" />
          </button>
        </div>
        <button type="button" className="btn btn--accent buy__add" disabled={!size} onClick={handleAdd}>
          <ShoppingCart size={20} aria-hidden="true" />
          {size ? "Add to bag" : "Select a size"}
        </button>
        <button
          type="button"
          className={`buy__save${saved ? " is-on" : ""}`}
          aria-pressed={saved}
          aria-label={saved ? "Remove from saved pieces" : "Save for later"}
          onClick={toggleSave}
        >
          <Heart size={20} weight={saved ? "fill" : "regular"} aria-hidden="true" />
        </button>
      </div>

      <p className={`buy__status${added ? " is-on" : ""}`} role="status" aria-live="polite">
        {added ? (
          <>
            <Check size={18} aria-hidden="true" /> {qty > 1 ? `${qty} × ` : ""}
            {name}, size {size}, added to your bag.{" "}
            <Link href="/cart" className="textlink">
              View bag
            </Link>
          </>
        ) : null}
      </p>

      <div className="buy__info">
        <details>
          <summary>
            <Truck size={20} aria-hidden="true" /> Delivery
          </summary>
          <p>Delivery options, times and fees are confirmed at checkout before you pay.</p>
        </details>
        <details>
          <summary>
            <ArrowsClockwise size={20} aria-hidden="true" /> Returns
          </summary>
          <p>The returns policy is published before launch and shown on this page and at checkout.</p>
        </details>
        <details>
          <summary>
            <Ruler size={20} aria-hidden="true" /> Fit and sizing
          </summary>
          <p>
            Try it over the knit you wear most. It should close without pulling and the sleeves should reach your
            wrist. Between sizes? The <Link href="/size-guide">size guide</Link> explains which way to go.
          </p>
        </details>
        <details>
          <summary>
            <ShieldCheck size={20} aria-hidden="true" /> Care
          </summary>
          <p>Follow the care label. Wash gently on a cool setting and dry fully to restore the loft.</p>
        </details>
      </div>
    </div>
  );
}
