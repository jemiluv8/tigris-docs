import React from "react";
import Link from "@docusaurus/Link";

import styles from "./styles.module.css";
import tigrisConfig from "../../../tigris.config";
import DiscordIcon from "../../icons/DiscordIcon";

export default function MongoDBAnnouncement() {
  return (
    <div className={styles.announcement}>
      <h3 className={styles.header}>
        Announcing MongoDB Compatibility now in beta
      </h3>
      <div className={styles.inner}>
        <div className={styles.videoWrapper}>
          <center>
            <iframe
              className={styles.video}
              width="560"
              height="315"
              src="https://www.youtube.com/embed/A8WDwXD4nvE?controls=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </center>
        </div>
        <div className={styles.textWrapper}>
          <p>
            <Link href="/concepts/mongodb-compatibility">
              Tigris MongoDB compatibility <i>beta</i>
            </Link>{" "}
            enables you to use Tigris as an alternative for MongoDB.
          </p>
          <p>Try out Tigris MongoDB compatibility:</p>
          <ul>
            <li>
              <a href="/docs/quickstarts/mongodb-compatibility/">
                MongoDB compatibility quickstarts
              </a>
            </li>
            <li>
              <a href="/docs/sdkstools/mongodb-compatibility/mongosh/">
                Using <code>mongosh</code> with Tigris
              </a>
            </li>
          </ul>
          <p>
            Finally, join the{" "}
            <a href={tigrisConfig.discordUrl}>
              <i
                style={{
                  position: "relative",
                  top: "2px",
                  color: "var(--docs-color-text-100)",
                }}
              >
                <DiscordIcon width="16px" height="16px" />
              </i>{" "}
              Tigris Discord
            </a>{" "}
            to share you feedback and feature requests.
          </p>
        </div>
      </div>
    </div>
  );
}
