# `parcel-resolver-dual-default`

Example for a Parcel 2 resolver that wraps your entrypoint so that `(await import("x")).default === require("x")` (as opposed to having to do `require("x").default`).

This works by replacing the entrypoint with an asset that does `import v from "actual entrypoint"; module.exports = v;`

You'd only need to add this `.parcelrc`

```json
{
	"extends": "@parcel/config-default",
	"resolvers": ["parcel-resolver-dual-default", "..."]
}
```

Then building

```js
export default 1;
```

will result in bundles that behave like this:

```js
import a from "./dist/index.mjs";
const b = require("./dist/index.cjs");

assert(a === 1);
assert(b === 1);
```
