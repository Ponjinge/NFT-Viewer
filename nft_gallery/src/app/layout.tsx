import "~/styles/globals.css";

import { type Metadata } from "next";
import { TopNavigation } from "./_components/topnavigation";
import { ThemeProvider } from "~/app/_components/theme-provider";

export const metadata: Metadata = {
  authors: [{ name: "Gabriel 'Ponjinge' Saunders", url: "https://github.com/Ponjinge" }],
  title: "Museum NFT Gallery",
  description: "Created using the T3 stack",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange={true}
        >
          <div className="grid h-screen grid-rows-[auto,1fr]">
            <TopNavigation />
            <main className="overflow-y-scroll">{children}</main>
          </div>
          {modal}

          <div id="modal-root" />
        </ThemeProvider>
      </body>
    </html>
  );
}
