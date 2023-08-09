import clsx from "clsx";
import React from "react";
import styles from "./fundraising.module.css";

export default function Fundraising(): JSX.Element {
  return (
    <section className="padding-vert--xl container">
      <div className={clsx("row row--no-gutters shadow--md", styles.item)}>
        <div
          className="col col--6"
          aria-hidden="true"
          style={{
            backgroundImage: "url('/img/background/TreasureMap.jpeg')",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
        <div className={clsx("col col--6", styles.item__inner)}>
          <div>
            <h1 className={clsx("margin-bottom--md", styles.item__title)}>
              Run an effective fundraising process <span></span>
            </h1>
            <p className="margin-bottom--md">
              Walk down this step by step guide to early stage startup fundraising.
            </p>
            <a className="button button--secondary" href="/fundraising">
              Fundraising
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
