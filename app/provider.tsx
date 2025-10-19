"use client";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

// "use client";

// import { ThemeProvider } from "next-themes";

// export function Providers({ children }: { children: React.ReactNode }) {
//   return (
//     <ThemeProvider
//       attribute="class"
//       defaultTheme="dark"
//       enableSystem
//       disableTransitionOnChange
//     >
//       {children}
//     </ThemeProvider>
//   );
// }
