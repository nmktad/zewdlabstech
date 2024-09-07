import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Zewdlabs.co | Empowering businesses with technology",
    short_name: "ZewdLabs.co",
    description:
      "Zewdlabs.co is a software development company that specializes in building web and mobile applications for businesses.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
