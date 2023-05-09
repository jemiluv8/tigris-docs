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

### Install the Astro Tigris integration

Install `@tigrisdata/astro`:

```shell
npm install @tigrisdata/astro
# yarn add @tigrisdata/astro
```

### Configure the Astro Tigris integration

Create or update a `.env` file (see
[Astro docs on environment variables](https://docs.astro.build/en/guides/environment-variables/))
with the following variables:

```title=.env
TIGRIS_URI=api.preview.tigrisdata.cloud
TIGRIS_CLIENT_ID="TIGRIS_PROJECT_CLIENT_ID"
TIGRIS_CLIENT_SECRET="TIGRIS_PROJECT_CLIENT_SECRET"
TIGRIS_PROJECT="TIGRIS_PROJECT_NAME"
TIGRIS_DB_BRANCH=main
```

You can get the values for these variables from the **Application Keys** section
of a project within Tigris.

:::tip

You can create a project and a `.env` file using the Tigris CLI using:

```sh
npx @tigrisdata/tigris-cli@latest create project astro-docs-example --create-env-file
```

Please note, this will overwrite any existing `.env` file.

:::

With the `.env` file in place, configure the Tigris Astro integration:

```js title=astro.config.mjs
import { defineConfig } from "astro/config";
import tigris from "@tigrisdata/astro";

export default defineConfig({
  integrations: [tigris()],
});
```

If you are not using environmental variables you can pass configuration into the
`tigris` function:

```ts title=astro.config.mjs
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

All
[configuration options](https://github.com/tigrisdata/tigris-client-ts/blob/802286b08b3123bb8435aa658fd205a846114f53/src/tigris.ts#L45)
for the Tigris TypeScript SDK client are available as parameters to the Astro
integration.

### Define your Tigris schema

:::info

You can use [Tigris Database](/docs/concepts/database/database.md) as a
standalone database, Tigris Database with
[auto-synchroniztion to Tigris Search](/docs/concepts/database/search.md), or
[Tigris Search standalone](/docs/concepts/searching/). Therefore, the schema you
define will depend on what Tigris products you want to use:

- [Tigris Database schema](/docs/sdkstools/typescript/database/datamodel/)
- [Tigris Search schema](/docs/sdkstools/typescript/search/datamodel/).

This guide assumes you are using Tigris Database with auto-synchronization to
Tigris Search.

:::

The convention we use is to create a new file for each model within a
`src/db/models` directory. For example:

```ts title="src/db/models/comment.ts"
import {
  Field,
  PrimaryKey,
  SearchField,
  Tigris,
  TigrisCollection,
  TigrisDataTypes,
} from "@tigrisdata/core";

@TigrisCollection("comments")
class Comment {
  @PrimaryKey(TigrisDataTypes.UUID, { order: 1, autoGenerate: true })
  id?: string;

  @Field()
  message!: string;

  @Field()
  @SearchField({ facet: true, sort: true })
  slug!: string;

  @Field(TigrisDataTypes.DATE_TIME)
  @SearchField({ sort: true })
  createdAt?: Date;

  @Field()
  name!: string;
}
```

### Create your Tigris setup script

Once the models are defined, create a script to synchronize the defined schema
with the Tigris platform. The convention we use here is to have a
`script/setup.ts` file:

```ts title="scripts/setup.ts"
import { Tigris } from "@tigrisdata/core";
import { Comment } from "../src/db/models/comment";

async function main() {
  // setup client
  const tigrisClient = new Tigris();
  // ensure branch exists, create it if it needs to be created dynamically
  await tigrisClient.getDatabase().initializeBranch();
  // register schemas
  await tigrisClient.registerSchemas([Comment]);
}

main()
  .then(async () => {
    console.log("Setup complete ...");
    process.exit(0);
  })
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  });
```

If you're using TypeScript with your Astro site already, you should update you
`tsconfig.json` file to at least include the `experimentalDecorators` and
`emitDecoratorMetadata` options:

```json title="tsconfig.json" {7-8}
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "jsx": "preserve",
    "skipLibCheck": true,
    "strictNullChecks": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```

You can run this the `script/setup.ts` file using the following command:

```sh
npx ts-node --esm --experimental-specifier-resolution=node scripts/setup.ts
```

You'll then see output similar to the following:

```sh
info - Using reflection to infer type of Comment#message
info - Using reflection to infer type of Comment#slug
info - Using reflection to infer type of Comment#slug
info - Using reflection to infer type of Comment#createdAt
info - Using reflection to infer type of Comment#name
info - Using Tigris at: api.preview.tigrisdata.cloud:443
info - Using database branch: 'main'
event - Creating collection: 'comments' in project: 'your-project-name'
Setup complete ...
```

You should update your `package.json` `script` to make use of the setup script
to ensure the Tigris platform is kept in sync with your TypeScript defined data
models:

```json title="package.json" {3,4,7}
  ...
  "scripts": {
    "tigris:setup": "npx ts-node --esm --experimental-specifier-resolution=node scripts/setup.ts",
    "predev": "npm run tigris:setup",
    "dev": "astro dev",
    "start": "astro dev",
    "prebuild": "npm run tigris:setup",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro"
  },
  ...
```

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
