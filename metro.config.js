const { getDefaultConfig } = require("metro-config");

const defaultConfig = getDefaultConfig.getDefaultConfig("react-native");

module.exports = {
  transformer: {
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  },
  resolver: {
    assetExts: defaultConfig.resolver.assetExts.filter(ext => ext !== "svg"),
    sourceExts: [...defaultConfig.resolver.sourceExts, "svg"],
  },
};
