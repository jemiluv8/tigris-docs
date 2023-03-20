# Known Differences

- Tigris uses the same protocol error names and codes, but the exact error
  messages may be different in some cases.
- Tigris does not support NUL (`\0`) characters in strings.
- Tigris does not support nested arrays.
- Tigris converts `-0` (negative zero) to `0` (positive zero).
- Document keys must not contain `.` sign;
- Document keys must not start with `$` sign;
- Document fields of double type must not contain `Infinity`, `-Infinity`, or
  `NaN` values.
- When insert command is called, insert documents must not have duplicate keys.
- Update operations producing `Infinity`, `-Infinity`, or `NaN` are not
  supported.
- Database name must not include non-latin letters, spaces, dots, dollars;
- Collection name must not include non-latin letters, spaces, dots or dollars;
- Database and collection name must not start with a number;
- Database name cannot contain capital letters;
- Database name length cannot be more than 63 characters;
- Collection name length cannot be more than 120 characters.
