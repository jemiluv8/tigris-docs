# Get started

## With an existing MongoDB application

To use an existing MongoDB application with Tigris, you need to do the
following:

1. Create a Project in Tigris and take a note of Project Name, application key
   Client ID, and Client Secret.
2. Update the connection string to point to Tigris in the following format:

   ```
   mongodb://{TIGRIS_CLIENT_ID}:{TIGRIS_CLIENT_SECRET}@m1k.preview.tigrisdata.cloud:27018?authMechanism=PLAIN&tls=true
   ```

3. Replacing `TIGRIS_CLIENT_ID` with your Client ID
4. Replacing `TIGRIS_CLIENT_SECRET` with your Client Secret
5. Update the database name in your code to the name of your Tigris Project

As stated above, only [basic CRUD](/docs/concepts/mongodb-compatibility/supported-features) operations are supported.

## Using the Tigris MongoDB compatibility quickstarts

Follow the
[Tigris MongoDB compatibility quickstarts](/docs/quickstarts/mongodb-compatibility/)
to try out the MongoDB drivers with Tigris:

- [TypeScript](/docs/quickstarts/mongodb-compatibility/typescript/)
- [Go](/docs/quickstarts/mongodb-compatibility/go/)
- [Python](/docs/quickstarts/mongodb-compatibility/python/)
