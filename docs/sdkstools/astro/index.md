# Tigris Astro Integration

[Astro](https://astro.build) provides a great way to build sites that are fast
and easy to maintain. Many integrations exist to make it easier to use Astro
with a variety of tools, including content management systems (CMS), front-end
frameworks, and more. However, some use cases call for reading and writing data
that's customized to your application. Some examples include: user
reviews/ratings, blog comments, and site analytics.

Tigris is a great data store for these use cases and its built in search
capabilities bring data to your visitors fingertips even faster. The
[`@tigrisdata/astro`](https://www.npmjs.com/package/@tigrisdata/astro) package
makes it easier than ever to integrate a database and search platform into your
statically generated sites.

## Getting Started

Install `@tigrisdata/astro`:

```shell
npm install @tigrisdata/astro
# yarn add @tigrisdata/astro
```

Add the following code to your `astro.config.mjs` and replace
`YOUR_TIGRIS_PROJECT_NAME`, `YOUR_TIGRIS_CLIENT_ID` and
`YOUR_TIGRIS_CLIENT_SECRET` with values from your Tigris project.

```js title=astro.config.mjs
import { defineConfig } from "astro/config";
import tigris from "@tigrisdata/astro";

export default defineConfig({
  integrations: [
    tigris({
      branch: "main",
      projectName: "YOUR_TIGRIS_PROJECT_NAME",
      clientId: "YOUR_TIGRIS_CLIENT_ID",
      clientSecret: "YOUR_TIGRIS_CLIENT_SECRET",
    }),
  ],
});
```

:::tip

Providing the parameters above are optional if the following environment
variables are available.

:::

```text title=.env
TIGRIS_PROJECT=myapp
TIGRIS_CLIENT_ID=ftSUj9B5czFW79s9M6YUkxKE3H4WeRyY
TIGRIS_CLIENT_SECRET=DOxxx
TIGRIS_DB_BRANCH=main
```

All
[configuration options](https://github.com/tigrisdata/tigris-client-ts/blob/802286b08b3123bb8435aa658fd205a846114f53/src/tigris.ts#L45)
for the Tigris TypeScript SDK client are available as parameters to the Astro
integration.

## Available Hooks

The `@tigrisdata/astro` package provides a few hooks to enable you to interact
with Tigris as fast as possible.

### useTigrisCollection

Tigris collections can be accessed with the `useTigrisCollection` hook. To begin
using it, import it into your file.

```js
import { useTigrisCollection } from "@tigrisdata/astro";
```

### Fetching All Documents

You can fetch (and filter) all documents from a collection using the `findMany`
method:

```js
---
import { useTigrisCollection } from "@tigrisdata/astro";
import { User } from "./types/User";

const userCollection = await useTigrisCollection<User>("users");
const usersCursor = await userCollection.findMany({});
const users = await usersCursor.toArray();
---

{users.map(user =>
  <div>{user.name}</div>
)}
```

### Fetching One Document

You can fetch one document from a collection using the `findOne` method:

```js
---
import { useTigrisCollection } from "@tigrisdata/astro";
import { User } from "./types/User";

const userCollection = await useTigrisCollection<User>("users");
const user = await userCollection.findOne({
    filter: {
        id: "1234"
    }
});
---

<div>{user.name}</div>
```

### Inserting Documents

You can insert can be used to insert one or more documents into the collection.

```js
import { useTigrisCollection } from "@tigrisdata/astro";
import { User } from "./types/User";

const userCollection = (await useTigrisCollection) < User > "users";

// Insert one document
const user = await userCollection.insertOne({
  name: "Tony Stark",
  email: "tony@stark.com",
});

// Insert multiple documents
const users = await userCollection.insertMany([
  {
    name: "Bob Ross",
    email: "bob@joyofpainting.com",
  },
  {
    name: "Andy Griffith",
    email: "sheriff@mayberry.gov",
  },
]);
```

### useTigrisClient

The [Tigris TypeScript SDK client](/docs/sdkstools/typescript/) can be accessed
with the `useTigrisClient` hook. This allows access to the full TypeSript SDK
client and all its methods. To begin using it, import it into your file.

```js
import { useTigrisClient } from "@tigrisdata/astro";
```
