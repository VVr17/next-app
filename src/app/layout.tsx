import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import type { Metadata } from 'next';
import theme from '../theme';

export const metadata: Metadata = {
  title: 'Next app - counter',
  description: 'Next app - counter',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body>
          <main>
            <AppRouterCacheProvider>
              <ThemeProvider theme={theme}>{children}</ThemeProvider>
            </AppRouterCacheProvider>
          </main>
        </body>
      </html>
    </>
  );
}
