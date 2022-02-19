import { defineConfig } from "rollup";
import copy from "rollup-plugin-copy";
import { terser } from "rollup-plugin-terser";

export default defineConfig({
  input: "src/KofiButton.js",
  output: {
    file: "dist/KofiButton.js",
    format: "cjs",
    plugins: [terser()],
  },
  plugins: [
    copy({
      targets: [
        { src: "src/KofiButton.d.ts", dest: "dist/" },
        { src: "package.json", dest: "dist/" },
        { src: "LICENSE", dest: "dist/" },
      ],
    }),
  ],
  external: ["react"],
});
