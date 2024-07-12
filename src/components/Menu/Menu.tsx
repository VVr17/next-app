import { Box, Container, Typography } from '@mui/material';

const Menu = () => {
  return (
    <Box component="header" py={1} px={2}>
      <Container sx={{ bgcolor: 'purple', py: 1 }}>
        <Typography variant="h3" textAlign="center" color="white">
          {` <Menu /> `}
        </Typography>
      </Container>
    </Box>
  );
};

export default Menu;
