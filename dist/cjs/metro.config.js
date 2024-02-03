"use strict";
const path = require("path");
const { getDefaultConfig } = require("expo/metro-config");
const { generate } = require("@storybook/react-native/scripts/generate");
generate({
    configPath: path.resolve(__dirname, "./.ondevice"),
});
const defaultConfig = getDefaultConfig(__dirname);
defaultConfig.transformer.unstable_allowRequireContext = true;
defaultConfig.resolver.resolveRequest = (context, moduleName, platform) => {
    var _a, _b;
    const defaultResolveResult = context.resolveRequest(context, moduleName, platform);
    if (process.env.STORYBOOK_ENABLED !== "true" &&
        ((_b = (_a = defaultResolveResult === null || defaultResolveResult === void 0 ? void 0 : defaultResolveResult.filePath) === null || _a === void 0 ? void 0 : _a.includes) === null || _b === void 0 ? void 0 : _b.call(_a, ".ondevice/"))) {
        return {
            type: "empty",
        };
    }
    return defaultResolveResult;
};
module.exports = defaultConfig;
