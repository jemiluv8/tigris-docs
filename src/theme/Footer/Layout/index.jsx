import tigrisConfig from "@site/tigris.config.js";

/* eslint-disable react/prop-types */
import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";

import Docsly from "@docsly/react";
import "@docsly/react/styles.css";
import { useLocation } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function FooterLayout({ style, links, logo, copyright }) {
  const { pathname } = useLocation();
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  return (
    <>
      <footer
        className={clsx("footer", {
          "footer--dark": style === "dark",
        })}
      >
        <div className="container container-fluid">
          {logo && <div className="margin-bottom--sm">{logo}</div>}
          <p className="footer__description">
            Tigris is a Serverless NoSQL Database and Search Platform that
            offers a modern open source alternative to MongoDB and DynamoDB.
            Tigris allows developers to rapidly build applications with a NoSQL
            platform that combines database, full-text search, and sync
            mechanism. Tigris simplifies operations by automatically scaling
            throughput and storage as application traffic grows, at fraction of
            the cost of MongoDB and DynamoDB, while providing high availability
            and data security.
          </p>
          <div className="footer__row">
            <div className="footer__data">
              <div className="footer__cta">
                <Link href={tigrisConfig.signupUrl}>Sign Up</Link>
              </div>
            </div>
            <div className="links">{links}</div>
          </div>
          {copyright && (
            <div className="footer__bottom text--center">{copyright}</div>
          )}
        </div>

        <Docsly
          publicId={customFields.docslyPublicId}
          pathname={pathname}
          appearance={{
            docslyToolboxStyles:
              "dy-bg-black dy-text-neutral-100 docsly-toolbox",
          }}
        />
      </footer>
    </>
  );
}
