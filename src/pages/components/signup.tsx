import clsx from "clsx";
import React from "react";
import styles from "./signup.module.css";

export default function Signup(): JSX.Element {
  return (
    <section className="padding-vert--xl container">
      <div className={clsx("row row--no-gutters shadow--md", styles.item)}>
        <div className={clsx("col col--6", styles.item__inner)}>
          <div>
            <h1 className="margin-bottom--md">Discover product-market-fit</h1>
            <p className="margin-bottom--md">
               Coming soon. Sign up on the waiting list.
            </p>
            <a className="button button--secondary" href="https://github.com/nakedstartupguide/naked-startup">
              Sign up
            </a>
          </div>
        </div>
        <div
          className="col col--6"
          aria-hidden="true"
          style={{
            backgroundImage: "url('/img/background/first_principles.jpeg')",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
          }}
        ></div>
      </div>
    </section>
  );
}
