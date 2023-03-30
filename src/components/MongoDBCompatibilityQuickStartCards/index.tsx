import React from "react";
import {
  HomepageCard as Card,
  HomepageSection as Section,
} from "../../components/HomepageComponents.jsx";

import {
  GoIcon,
  TSIcon,
  // DotNetIcon,
  PythonIcon,
  PhpIcon,
  JavaIcon,
} from "../../icons";

interface Props {
  title?: string;
}

export default function MongoDBCompatibilityQuickStartCards({
  title = "Using Tigris MongoDB compatibility",
}: Props): JSX.Element {
  return (
    <Section id="mongodb-quickstarts" title={title}>
      <Card
        id="typescript"
        title="TypeScript & Node.js"
        description="Get started with Tigris using the MongoDB Node.js driver with TypeScript"
        to="/quickstarts/mongodb-compatibility/typescript"
        icon={<TSIcon />}
      />
      <Card
        id="go"
        title="Go"
        description="Get started with Tigris using the MongoDB Go driver"
        to="/quickstarts/mongodb-compatibility/go"
        icon={<GoIcon />}
      />
      <Card
        id="java"
        title="Java"
        description="Get started with Tigris using the MongoDB Java driver"
        to="/quickstarts/mongodb-compatibility/java"
        icon={<JavaIcon />}
      />
      {/* <Card
    title="C# .NET"
    description="Get started with Tigris using the MongoDB .NET driver"
    to="/quickstarts/mongodb-compatibility/dotnet"
    icon={<DotNetIcon />}
  /> */}
      <Card
        id="python"
        title="Python"
        description="Get started with Tigris using the MongoDB Python driver"
        to="/quickstarts/mongodb-compatibility/python"
        icon={<PythonIcon />}
      />
      <Card
        id="php"
        title="PHP"
        description="Get started with Tigris using the MongoDB PHP driver and library"
        to="/quickstarts/mongodb-compatibility/php"
        icon={<PhpIcon />}
      />
    </Section>
  );
}
