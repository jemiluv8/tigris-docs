# Supported Go Types

Tigris supports the majority of the basic Go types while also providing support
for custom types.

- Basic types: int, int32, int64, float32, float64, string, []string, byte,
  []byte, bool, map[string], time.Time, uuid.UUID
- Custom types: struct to define custom types

## Field Tags {#field-tags}

Tags can be used in the struct definition to enrich the fields when
declaring the models.

Standard `json` tag can be used to decouple language field name from the name persisted in the database
or skip persisting the field.

For example:

```go
type Catalog struct {
    ProductName string `json:"product_name"` // persisted under product_name in the database
    PriceUSD    flota64 `json:"-"` // do not persisted in the database
}
```

Unexported fields and fields annotated with `json:"-"` or `tigris"-"` are
not persisted in the collection.

Custom `tigris` tag can be used to alter the properties of the fields.
Examples of setting the tags:

- Boolean
  - `tigris:"sort"` (defaults to true)
  - `tigris:"sort:true"`,
  - `tigris:"searchIndex:false"`
- String
  - `tigris:"default:str1"`
  - `tigris:"default:'quoted string'"`
- Any other type should be set as it's JSON representation
  - `tigris:"default:1.234"`
  - `tigris:"default:1000"`

Here is the list of the supported tags:

| Tag Name     | Description                                                                                                                                                                    |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| primaryKey   | Specify the field that will be used as the primary key. Optionally specify a number, for example `tigris:"primaryKey:1"`, to define the field order in a composite primary key |
| autoGenerate | Specify that Tigris should autogenerate the values for this field. This can be combined with the primaryKey tag                                                                |
| default      | Specify default value for the field, for example `tigris:"default:def_str"`                                                                                                    |
| maxLength    | Specify maximum length for the string field type, example `tigris:"maxLength:10"`                                                                                              |
| createdAt    | The field will be automatically populated with the current time at the document creation                                                                                       |
| updatedAt    | The field will be automatically populated with the current time every time the document is updated                                                                             |
| searchIndex  | Add the fields to text search index, so the field is searchable using Search API                                                                                               |
| sort         | Additionally specify search field as sorted                                                                                                                                    |
| facet        | Additionally specify search field as faceted                                                                                                                                   |
