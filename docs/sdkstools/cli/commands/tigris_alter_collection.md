---
id: alter-collection
title: Alter Collection
slug: /sdkstools/cli/alter-collection
---

Updates collection schema

### Synopsis

Updates collection schema.

```shell
tigris alter collection --project={tigris-project} {schema} [flags]
```

### Examples

```shell

  # Pass the schema as a string
  tigris alter collection --project=test_project '{
	"title": "users",
	"description": "Collection of documents with details of users",
	"properties": {
	  "id": {
		"description": "A unique identifier for the user",
		"type": "integer"
	  },
	  "name": {
		"description": "Name of the user",
		"type": "string",
		"maxLength": 100
	  }
	},
	"primary_key": [
	  "id"
	]
  }'

```

### Options

```
  -h, --help   help for collection
```
