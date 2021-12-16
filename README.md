# remix-surfacing-links

This library reduces boilerplate for surfacing links in [remix.run](https://remix.run) projects.

## Installation

`npm install remix-surfacing-links`

## Usage in atom component

```ts
import surfaceLinks from "remix-surfacing-links";

export const links = surfaceLinks({
  rel: "stylesheet",
  href: require("./styles.css"),
});
```

## Usage in page or intermediate component

You can import children links this way:

```ts
import surfaceLinks from "remix-surfacing-links";

export const links = surfaceLinks(
  require("~/components/Button"),
  require("~/components/Toggle"),
  require("~/components/Modal"),
  {
    rel: "stylesheet",
    href: require("~/styles/homepage.css"),
  }
);
```
