"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Prevent SSR mismatch by rendering nothing until hydration is complete
    return <>{children}</>;
  }

  return (
    <NextThemesProvider attribute="class" defaultTheme="system" {...props}>
      {children}
    </NextThemesProvider>
  );
}