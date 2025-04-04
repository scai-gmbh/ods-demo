import { type MetadataRoute } from "next";

export const MANIFEST_NAME = "ODS Demo";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: MANIFEST_NAME,
        short_name: "ODS Demo",
        id: `?v=${process.env.NEXT_PUBLIC_APP_VERSION}`,
        start_url: "/",
        display: "standalone",
        theme_color: "#e20074",
        background_color: "#e20074",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "64x64 48x48 32x32 24x24 16x16",
                type: "image/x-icon",
            },
        ],
    };
}
