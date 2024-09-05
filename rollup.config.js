import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

export default {
  input: "src/index.ts",
  output: {
    file: "bin/index.cjs",
    format: "cjs",
  },
  plugins: [typescript(), terser()],
  external: ["node:child_process"],
};
