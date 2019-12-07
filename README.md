## FancyQueryString
#### Heavily inspired by Masie
#### MIT License

### Syntax

```
s -> a
s -> o
a -> aba
a -> irv
b -> bb

a - single argument
b - separator

terms:
o - empty string
i - property id
r - queried object property value reliationship to declared value
v - declared value
```

### Config

TO;DO;

### Example

Input

`brand=abc value>5000 color!=red owner="John Peterson" used=true`

Output

```JSON
{
  list: [
    { id: 'brand', rel: '=', val: 'abc' },
    { id: 'value', rel: '>', val: 5000 },
    { id: 'color', rel: '!=', val: 'red' },
    { id: 'owner', rel: '=', val: 'John Peterson' },
    { id: 'used', rel: '=', val: true }
  ],
  dict: {
    brand: { rel: '=', val: 'abc' },
    value: { rel: '>', val: 5000 },
    color: { rel: '!=', val: 'red' },
    owner: { rel: '=', val: 'John Peterson' },
    used: { rel: '=', val: true }
  }
}
```
