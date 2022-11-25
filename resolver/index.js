// @flow

const { Resolver } = require("@parcel/plugin");
const path = require("path");

module.exports = (new Resolver({
  resolve({ dependency, specifier }) {
    if (
      dependency.sourceAssetId == null &&
      dependency.env.outputFormat === "commonjs"
    ) {
      return {
        filePath: specifier,
        code: `import v from "./${path.basename(
          specifier
        )}"; module.exports = v;`,
      };
    }
  },
}) /*: Resolver */);
