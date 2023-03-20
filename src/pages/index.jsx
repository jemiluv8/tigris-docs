import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

import {
  HomepageCard as Card,
  HomepageSection as Section,
} from "../components/HomepageComponents";
import { APIReferenceIcon, YellowStar, GreenStar } from "../icons";
import GuidesSection from "../components/GuidesSection";
import SDKCards from "../components/SDKCards";
import CliToolsCards from "../components/CliToolsCards";

export default function Homepage() {
  return (
    <Layout
      description="Open source developer data platform alternative to
      MongoDB Atlas 🚀"
      wrapperClassName="homepage"
    >
      <div className="pad">
        <div className="center homepage-content">
          <div id="hero">
            <h2>Tigris Documentation</h2>
            <p>
              Tigris is an open source cloud-native alternative to MongoDB
              Atlas.
            </p>
            <p>
              Tigris allows developers to rapidly build applications with a
              developer data platform that combines database, full-text search,
              and sync mechanism. Tigris simplifies operations by automatically
              scaling throughput and storage as application traffic grows, at
              fraction of the cost of MongoDB Atlas and DynamoDB, while
              providing high availability and data security.
            </p>
            <p>
              <Link href="/concepts/mongodb-compatibility">
                Tigris MongoDB compatibility <i>beta</i>
              </Link>{" "}
              enables you to use Tigris as an alternative for MongoDB.
            </p>
            <center>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/A8WDwXD4nvE?controls=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </center>
            <p></p>
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
          </div>

          <Section title="Get to know Tigris">
            <Card
              title="Quickstarts"
              description="Essential guides to get you up and running quickly"
              to="/quickstarts"
            />
            <Card
              title="Concepts"
              description="Learn about the core Tigris concepts"
              to="/concepts/"
            />
            <Card
              title="Platform"
              description="Understand the self-hosted, or cloud platform deployment option"
              to="/concepts/platform/"
            />
            <Card
              title="SDKs & Tools"
              description="Explore the details of the Tigris SDKs and tooling such as CLIs"
              to="/sdkstools/"
            />
            <Card
              title="Guides"
              description="Take a look at the walkthough guides we have prepared to get you started"
              to="/guides/"
            />
            <Card
              title="References"
              description="Deep dive into the reference documentation"
              to="/references/"
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
              icon={<YellowStar />}
            />
            <Card
              title="MongoDB compatibility"
              description="Tigris MongoDB compatibility enables you to use Tigris as an alternative to MongoDB and MongoDB Atlas."
              to="/concepts/mongodb-compatibility"
              icon={<GreenStar />}
            />
          </Section>

          <SDKCards />

          <CliToolsCards />

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
