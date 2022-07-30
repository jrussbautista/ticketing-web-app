import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';

import Copyright from './Copyright';

type AuthLayoutProps = {
  children: React.ReactNode;
  title: string;
};

const AuthLayout = ({ children, title }: AuthLayoutProps) => (
  <Container maxWidth="sm" sx={{ marginTop: 8 }}>
    <Card>
      <CardContent>
        <Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {title}
            </Typography>
          </Box>

          {children}
        </Box>
        <Copyright />
      </CardContent>
    </Card>
  </Container>
);

export default AuthLayout;
