import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

import {
  HomepageCard as Card,
  HomepageSection as Section,
} from "../components/HomepageComponents";
import {
  APIReferenceIcon,
  YellowStar,
  GreenStar,
  GoIcon,
  JavaIcon,
  TSIcon,
  TerminalIcon,
} from "../icons";
import GuidesSection from "../components/GuidesSection";

export default function Homepage() {
  return (
    <Layout
      description="Data platform built for developers 🚀"
      wrapperClassName="homepage"
    >
      <div className="pad">
        <div className="center homepage-content">
          <div id="hero">
            <h2>Tigris Docs</h2>
            <p>Tigris is the easiest way to build data-rich apps!</p>
            <p>
              Use it as a scalable, ACID transactional, real-time backend for
              your serverless applications. Build data-rich features without
              worrying about slow queries or missing indexes. Seamlessly
              implement search within your applications with its embedded search
              engine. Connect serverless functions with its event streams to
              build highly responsive applications that scale automatically.
            </p>
            <p>
              <Link className="homepage-button" href="/concepts">
                Learn more
              </Link>
            </p>
          </div>

          <Section title="Get to know Tigris">
            <Card
              title="Quickstarts"
              description="Essential guides to get you up and running quickly"
              to="/quickstarts"
            />
            <Card
              title="Guides"
              description="Take a look at the guides we have prepared to get you started"
              to="/guides/"
            />
            <Card
              title="Platform"
              description="Understand the self-hosted, or cloud platform deployment option"
              to="/concepts/platform/"
            />
          </Section>

          <Section title="Core Features" id="core-features" HeadingTag="h3">
            <Card
              title="Serverless Document Database"
              description="Build responsive applications with a serverless document database designed to perform consistently at any scale. Offers native support for ACID transactions, global secondary indexes, high availability, automatic database sharding, data security, and database branching."
              to="/concepts/database/"
              icon={<YellowStar />}
            />
            <Card
              title="Integrated Full-text Search"
              description="Deliver delightful search experiences through a unified, fully managed platform that combines database, full-text search, and sync mechanism, providing the fastest and easiest way to build search capabilities into applications."
              to="/concepts/searching/"
              icon={<GreenStar />}
            />
          </Section>

          <Section title="SDKs" id="core-sdks">
            <Card
              title="TypeScript"
              description="Integrate Tigris in your TypeScript App"
              to="/sdkstools/typescript/"
              icon={<TSIcon />}
            />
            <Card
              title="Golang"
              description="Integrate Tigris in your Golang App"
              to="/sdkstools/golang/"
              icon={<GoIcon />}
            />
            <Card
              title="Java"
              description="Integrate Tigris in your Java App"
              to="/sdkstools/java/database"
              icon={<JavaIcon />}
            />
          </Section>

          <Section title="Tools">
            <Card
              title="Tigris CLI"
              description="A command line tool to get things done quick"
              to="/sdkstools/cli/"
              icon={<TerminalIcon />}
            />
            <Card
              title="Create Tigris App"
              description="The easiest way to get started in TypeScript"
              to="/sdkstools/create-tigris-app/"
              icon={<TerminalIcon />}
            />
          </Section>

          <Section title="API Reference">
            <Card
              title="API Reference"
              description="Tigris API Reference"
              to="/references/api/"
              icon={<APIReferenceIcon />}
            />
          </Section>

          <GuidesSection title="Advanced Guides" />
        </div>
      </div>
    </Layout>
  );
}
