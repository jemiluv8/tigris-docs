import React from "react";
import {
  HomepageCard as Card,
  HomepageSection as Section,
} from "../HomepageComponents";
import { GoIcon, JavaIcon, TSIcon } from "../../icons";

export default function SDKCards() {
  return (
    <Section title="SDKs" id="core-sdks">
      <Card
        title="TypeScript"
        description="Integrate Tigris in your TypeScript App"
        to="/docs/sdkstools/typescript/"
        icon={<TSIcon />}
      />
      <Card
        title="Golang"
        description="Integrate Tigris in your Golang App"
        to="/docs/sdkstools/golang/"
        icon={<GoIcon />}
      />
      <Card
        title="Java"
        description="Integrate Tigris in your Java App"
        to="/docs/sdkstools/java/database"
        icon={<JavaIcon />}
      />
    </Section>
  );
}
