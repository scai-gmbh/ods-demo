import type { Metadata } from "next";
import { App } from "./App";
import { type PropsWithChildren, StrictMode } from "react";
import { ThemeProvider } from "next-themes";
import { APP_TITLE } from "~/app/meta";

import "@telekom-ods/react-ui-kit-base/index.css";

export const metadata: Metadata = {
    title: APP_TITLE,
};

const RootLayout = async ({ children }: PropsWithChildren) => (
    <html lang="en" data-scheme="neutral" suppressHydrationWarning>
        <body>
            <StrictMode>
                <ThemeProvider storageKey="mode" attribute="data-mode">
                    <App>{children}</App>
                </ThemeProvider>
            </StrictMode>
        </body>
    </html>
);

export default RootLayout;
