import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.ts", // Entry file
  output: [
    { file: "dist/index.js", format: "es" },       // ES Module
    { file: "dist/index.cjs.js", format: "cjs" }, // CommonJS
  ],
  plugins: [
    postcss({
      inject: true,     // Inline CSS into the JavaScript
      minimize: true,   // Minify the CSS
      extract: false,   // Do NOT extract a separate CSS file
      modules: false,   // Do not enable CSS modules
    }),
  ],
};
