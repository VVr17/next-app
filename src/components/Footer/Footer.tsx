import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" py={1} px={2}>
      <Container sx={{ bgcolor: 'purple', py: 1 }}>
        <Typography variant="h3" textAlign="center" color="white">
          {` <Footer /> `}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
