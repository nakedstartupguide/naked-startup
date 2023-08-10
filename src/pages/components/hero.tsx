import { ChevronRightIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import { CopyToClipboard } from "react-copy-to-clipboard";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./hero.module.css";
import Icon from "./icon";

export default function Hero(): JSX.Element {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    let t: NodeJS.Timeout;
    if (copied) {
      t = setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
    return () => {
      t && clearTimeout(t);
    };
  }, [copied]);

  return (
    <section className="padding-vert--xl">
      <div className="container">
        <div className="row">
          <div className="col col--8 margin-vert--xl">
            <a
              href="https://github.com/nakedstartupguide/naked-startup"
              target="_blank"
              rel="noreferrer"
              className={styles.callout}
            >
              <span className="badge badge--primary callout__badge">NEWSLETTER</span>
              <span className={styles.callout__text}>Sign up!</span>
              <ChevronRightIcon className={styles.callout__icon} aria-hidden="true" />
            </a>
            <h1 className={styles.slogan}>
              <span>Naked Startup</span>
              <span className={styles.slogan__highlight}>Guide</span>
            </h1>
            <p className={styles.description}>
                 For founders, CEOs and operators who struggle with finding the right and timely advice for their early-stage startup problems.
            </p>
            <div className="padding-vert--md row">
              <div className="col col--5">
                <a href="/fundraising" className="button button--lg button--block button--primary">
                  Get Started
                </a>
              </div>
              <div className="col col--5">
                <a href="/fundraising" className="button button--lg button--block button--primary">
                  Why Naked?
                </a>
              </div>
              {/* <div className="col col--5">
                <CopyToClipboard
                  text={command}
                  onCopy={() => {
                    setCopied(true);
                  }}
                >
                  <button
                    className={clsx(
                      "button button--lg button--block button--outline button--secondary",
                      styles.command
                    )}
                  >
                    <span className={styles.command__text}>
                      <span aria-hidden="true">$</span> {command}
                    </span>
                    <DocumentDuplicateIcon className={styles.command__icon} />
                  </button>
                </CopyToClipboard>
              </div> */}
            </div>
          </div>
          <div className="col col--4">
            <div className={styles.illustration}>
              <div
                className={styles.illustration__container}
                style={{ backgroundImage: 'url("/img/Emperor_enhanced.jpeg")' }}
              >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
