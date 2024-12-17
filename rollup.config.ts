import postcss from "rollup-plugin-postcss";
export default {
    input: "src/index.ts",
    output: [
      { file: "dist/index.js", format: "es" },
      { file: "dist/index.cjs.js", format: "cjs" },
    ],
    plugins: [
      postcss({
        extract: true, // Extracts the CSS to a file
        minimize: true,
      }),
    ],
  };