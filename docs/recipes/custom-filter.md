# 🔍 Custom Filter Logic

By default this component uses a fuzzy search algorithm to filter options but also allows you to opt-out and use your custom logic by specifying `filterOptions` prop to component

example of case insensitive search

```js
const filterOptions = (options, filter) => {
  if (!filter) {
    return options;
  }
  const re = new RegExp(filter, "i");
  return options.filter(({ value }) => value && value.match(re));
};
```
