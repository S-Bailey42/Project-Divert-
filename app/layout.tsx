"use client"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-AppRouter"
import "./globals.css";
import { ThemeProvider } from "@mui/material/styles"
import theme from "../theme";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
          {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
