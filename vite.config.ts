import { screenGraphPlugin } from "@animaapp/vite-plugin-screen-graph";
import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig, Plugin } from "vite";
import fs from "fs";
import path from "path";

// 소스 파일 서빙 플러그인
function sourceFilePlugin(): Plugin {
  return {
    name: "source-file-plugin",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        // /api/source/ 경로로 소스 파일 요청 처리
        if (req.url?.startsWith("/api/source/")) {
          const filePath = decodeURIComponent(req.url.replace("/api/source/", ""));
          const fullPath = path.join(process.cwd(), filePath);

          // 보안: 허용된 파일/경로만 접근 가능
          const allowedPaths = ["src/", "tailwind.css"];
          const allowedFiles = ["package.json", "tailwind.config.js", "tsconfig.json", "postcss.config.js"];
          const isAllowed = allowedPaths.some((p) => filePath.startsWith(p) || filePath === p)
            || allowedFiles.includes(filePath);

          if (!isAllowed) {
            res.statusCode = 403;
            res.end("Forbidden");
            return;
          }

          if (fs.existsSync(fullPath)) {
            const content = fs.readFileSync(fullPath, "utf-8");
            res.setHeader("Content-Type", "text/plain; charset=utf-8");
            res.end(content);
          } else {
            res.statusCode = 404;
            res.end("File not found");
          }
          return;
        }
        next();
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    mode === "development" && screenGraphPlugin(),
    mode === "development" && sourceFilePlugin(),
  ],
  publicDir: "./static",
  base: "./",
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
}));
