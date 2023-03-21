import React from "react";
import {
  HomepageCard as Card,
  HomepageSection as Section,
} from "../HomepageComponents";

interface Props {
  title: string | undefined;
}

export default function SDKsToolsMongoDBCompatibilityCards({
  title,
}: Props): JSX.Element {
  return (
    <Section id="mongodb" title={title}>
      <Card
        id="mongodb-drivers"
        title="MongoDB Driver Support"
        description="See the current state of Tigris MongoDB compatibility with the official MongoDB drivers"
        to="/docs/sdkstools/mongodb-compatibility/mongodb-drivers/"
        icon={null}
      />
      <Card
        id="mongosh"
        title="Using mongosh with Tigris"
        description="How to use the mongosh REPL with Tigris"
        to="/docs/sdkstools/mongodb-compatibility/mongosh/"
        icon={null}
      />
    </Section>
  );
}
