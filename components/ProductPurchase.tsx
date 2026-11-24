"use client";

import { useState } from "react";
import { Info, Ruler, ShieldCheck, Snowflake, Tag, TShirt } from "@phosphor-icons/react";
import AddToBag from "./AddToBag";
import ProductGallery from "./ProductGallery";
import { Reveal, SettleImage } from "./Motion";
import type { ColourVariant } from "@/lib/catalog";

type Props = {
  slug: string;
  name: string;
  summary: string;
  categoryName: string;
  sizing: "apparel" | "one-size";
  sizes: string[];
  options: ColourVariant[];
};

// The product's purchase area: its photos, its colours and the add-to-bag form.
// Choosing a colour swaps the photos and the colour sent to the bag together.
export default function ProductPurchase({ slug, name, summary, categoryName, sizing, sizes, options }: Props) {
  const [active, setActive] = useState(0);
  const current = options[active] ?? options[0];

  return (
    <section className="container pdp" aria-label={name}>
      <SettleImage className="pdp__gallery">
        <ProductGallery key={current.colour} photos={current.photos} />
        <ul className="pdp__features" aria-label="At a glance">
          <li>
            <TShirt size={28} aria-hidden="true" />
            <span>{categoryName}</span>
          </li>
          <li>
            <Ruler size={28} aria-hidden="true" />
            <span>{sizing === "apparel" ? "XS to XL" : "One size"}</span>
          </li>
          <li>
            <Snowflake size={28} aria-hidden="true" />
            <span>Fill to confirm</span>
          </li>
          <li>
            <ShieldCheck size={28} aria-hidden="true" />
            <span>Care on the label</span>
          </li>
        </ul>
      </SettleImage>

      <Reveal className="pdp__info" delay={0.1}>
        <p className="pdp__badge">Placeholder product</p>
        <h1 className="pdp__title">{name}</h1>
        <div className="pdp__pricebox">
          <Tag size={26} aria-hidden="true" />
          <div>
            <p className="pdp__price">Price to confirm</p>
            <p className="pdp__note">
              <Info size={16} aria-hidden="true" />
              Price, materials and sizing are confirmed before launch.
            </p>
          </div>
        </div>
        <p className="pdp__summary">{summary}</p>

        <AddToBag
          slug={slug}
          name={name}
          colour={current.colour}
          colours={options.map((o) => o.colour)}
          onColour={(colour) => {
            const index = options.findIndex((o) => o.colour === colour);
            if (index >= 0) setActive(index);
          }}
          sizes={sizes}
        />
      </Reveal>
    </section>
  );
}
