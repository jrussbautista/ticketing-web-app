import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';

import Copyright from './Copyright';

const PublicLayout = () => (
  <Container maxWidth="sm" sx={{ marginTop: 8 }}>
    <Card>
      <CardContent>
        <Box>
          <Outlet />
        </Box>
        <Copyright />
      </CardContent>
    </Card>
  </Container>
);

export default PublicLayout;
