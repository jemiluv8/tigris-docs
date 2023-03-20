# Supported Features

The supported CRUD operations and the Tigris equivalent are shown in the
following section. The following tables show operations using the MongoDB
drivers and the equivalent operation using the [Tigris SDKs](/docs/sdkstools/).

## Insert

| MongoDB drivers         | Tigris SDKs                                                                                      |
| ----------------------- | ------------------------------------------------------------------------------------------------ |
| collection.insertOne()  | [collection.insertOne()](/docs/sdkstools/typescript/database/insert/#insert-a-single-document)   |
| collection.insertMany() | [collection.insertMany()](/docs/sdkstools/typescript/database/insert/#insert-multiple-documents) |

## Query

| MongoDB drivers      | Tigris SDKs                                                                   |
| -------------------- | ----------------------------------------------------------------------------- |
| collection.findOne() | [collection.findOne()](/docs/sdkstools/typescript/database/query/#find-one)   |
| collection.find()    | [collection.findMany()](/docs/sdkstools/typescript/database/query/#find-many) |

## Update

| MongoDB drivers         | Tigris SDKs                                                                                             |
| ----------------------- | ------------------------------------------------------------------------------------------------------- |
| collection.updateOne()  | [collection.updateOne()](/docs/sdkstools/typescript/database/update/#update-one)                        |
| collection.updateMany() | [collection.updateMany()](/docs/sdkstools/typescript/database/update/#update-many)                      |
| collection.replaceOne() | [collection.insertOrReplaceOne()](/docs/sdkstools/typescript/database/insert/#upsert-a-single-document) |

## Delete

| MongoDB drivers         | Tigris SDKs                                                                        |
| ----------------------- | ---------------------------------------------------------------------------------- |
| collection.deleteOne()  | [collection.deleteOne()](/docs/sdkstools/typescript/database/delete/#delete-one)   |
| collection.deleteMany() | [collection.deleteMany()](/docs/sdkstools/typescript/database/delete/#delete-many) |
