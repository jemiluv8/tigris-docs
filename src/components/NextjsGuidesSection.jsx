/* eslint-disable react/prop-types */
import React from "react";
import {
  HomepageCard as Card,
  HomepageSection as Section,
} from "./HomepageComponents";

export default function NextjsGuidesSection({ title, className }) {
  return (
    <div>
      <Section title="Tutorials" className={className}>
        <Card
          title="Add Tigris to an existing Next.js app"
          description="This guide will help you add Tigris to an existing Next.js application"
          to="/guides/nextjs/add-existing-app/"
        />
        <Card
          title="Next.js app with Tigris using create-next-app"
          description="How to create a new Next.js project with Tigris using create-next-app"
          to="https://www.tigrisdata.com/blog/create-next-app-with-tigris/"
        />
        <Card
          title="Real-time full-text search in a Next.js app with Tigris"
          description="Adding real-time full-text search to a Next.js app with Tigris"
          to="https://www.tigrisdata.com/blog/adding-real-time-full-text-search-to-a-next.js-app-with-tigris/"
        />
      </Section>

      <Section title="Example GitHub repos" className={className}>
        <Card
          title="Next.js and Tigris starter app"
          description="A to-do list app built on Next.js and Tigris"
          to="https://github.com/tigrisdata/tigris-vercel-starter"
        />
        <Card
          title="Next.js 13 and Tigris starter app"
          description="A to-do list app built on Next.js 13 and Tigris"
          to="https://github.com/tigrisdata/tigris-nextjs13-starter-kit"
        />
      </Section>
    </div>
  );
}
