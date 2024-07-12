import { Box, Container } from '@mui/material';
import { ReactNode } from 'react';
import { containerStyles } from './styles';

const Section = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <Box
      component="section"
      py={1}
      display="flex"
      flexDirection="column"
      flexGrow={1}
    >
      <Container sx={containerStyles}>{children}</Container>
    </Box>
  );
};

export default Section;
