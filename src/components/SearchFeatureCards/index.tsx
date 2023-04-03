import React from "react";
import {
  HomepageCard as Card,
  HomepageSection as Section,
} from "../../components/HomepageComponents.jsx";

import { GreenStar, YellowStar } from "../../icons";

interface Props {
  title?: string;
}

export default function SearchFeatureCards({
  title = "Search Features",
}: Props): JSX.Element {
  return (
    <Section id="search-features" title={title}>
      <Card
        id="integrated-search"
        title="Integrated Search"
        description="Automatically synchronize that data in your database with your search index"
        to="/concepts/searching/"
        icon={<YellowStar />}
      />
      <Card
        id="high-performance"
        title="High Performance"
        description="Fast data ingestion rates that enable real-time data searching"
        to="/concepts/searching/"
        icon={<GreenStar />}
      />
      <Card
        id="rich-query"
        title="Rich Query Language"
        description="Combine operators and options to build sophisticated search queries"
        to="/concepts/searching/"
        icon={<YellowStar />}
      />
      <Card
        id="fuzzy-search"
        title="Fuzzy Search"
        description="Return relevant search results regardless of typos or spelling errors"
        to="/concepts/searching/"
        icon={<GreenStar />}
      />
      <Card
        id="custom-ranking"
        title="Custom Ranking"
        description="Control how search results are ranked via flexible query-time sorting"
        to="/concepts/searching/"
        icon={<YellowStar />}
      />
      <Card
        id="fast-faceting"
        title="Fast Faceting"
        description="Slice and dice your data quickly to surface the most relevant information"
        to="/concepts/searching/"
        icon={<GreenStar />}
      />
      <Card
        id="dynamic-sorting"
        title="Dynamic Sorting"
        description="Sort records by any fields in your document without needing duplicate indexes"
        to="/concepts/searching/"
        icon={<YellowStar />}
      />
      <Card
        id="geo-search"
        title="Geo Search"
        description="Search around a specific location or area and rank results based on their distance"
        to="/concepts/searching/"
        icon={<GreenStar />}
      />
    </Section>
  );
}
