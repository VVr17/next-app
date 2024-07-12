import Footer from '@/components/Footer';
import Menu from '@/components/Menu';
import { Box } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import GlobalStyles from '@mui/material/GlobalStyles';
import { ThemeProvider } from '@mui/material/styles';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import theme from '../theme/theme';
import { globalStyles } from './styles';

export const metadata: Metadata = {
  title: 'Next app - counter',
  description: 'Next app - counter',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <Menu />
              <Box
                component="main"
                display="flex"
                flexDirection="column"
                flexGrow={1}
                py={1}
                px={2}
              >
                {children}
              </Box>
              <Footer />
              <GlobalStyles styles={globalStyles} />
            </ThemeProvider>
          </AppRouterCacheProvider>
        </body>
      </html>
    </>
  );
}
