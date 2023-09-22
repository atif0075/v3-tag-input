import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "V3 Tag Input",
  description: "A VitePress Site",
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://firebasestorage.googleapis.com/v0/b/testing-ed851.appspot.com/o/style.css?alt=media&token=f8210022-5721-451e-bc52-6dd655ac39cb",
      },
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
