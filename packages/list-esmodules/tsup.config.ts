import { match } from "ts-pattern";
import { defineConfig } from "tsup";

export default defineConfig({
  target: "es2022",
  entryPoints: ["src/index.ts"],
  dts: true,
  format: ["esm", "cjs"],
  sourcemap: true,
  treeshake: true,
  minify: true,
  clean: true,
  shims: true,
  outExtension: ({ format }) => {
    return {
      js: match(format)
        .with("cjs", () => ".cjs")
        .with("esm", () => ".mjs")
        .with("iife", () => ".iife")
        .exhaustive(),
    };
  },
});
