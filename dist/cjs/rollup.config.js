"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugin_node_resolve_1 = require("@rollup/plugin-node-resolve");
const plugin_commonjs_1 = require("@rollup/plugin-commonjs");
const rollup_plugin_typescript2_1 = require("rollup-plugin-typescript2");
const rollup_plugin_terser_1 = require("rollup-plugin-terser");
const rollup_plugin_peer_deps_external_1 = require("rollup-plugin-peer-deps-external");
const rollup_plugin_postcss_1 = require("rollup-plugin-postcss");
const packageJson = require('./package.json');
exports.default = {
    input: './index.ts',
    external: ['react', 'react-native'],
    output: [
        {
            file: packageJson.main,
            format: 'cjs',
            sourcemap: true,
            name: 'milo-components',
        },
        {
            file: packageJson.module,
            format: 'esm',
            sourcemap: true,
        },
    ],
    plugins: [(0, rollup_plugin_peer_deps_external_1.default)(), (0, plugin_node_resolve_1.default)(), (0, plugin_commonjs_1.default)(), (0, rollup_plugin_typescript2_1.default)({ tsconfig: './tsconfig.json' }), (0, rollup_plugin_postcss_1.default)(), (0, rollup_plugin_terser_1.terser)()],
};
