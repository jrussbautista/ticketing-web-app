import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Copyright = () => (
  <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
    {'Copyright © '}
    <Link color="inherit" href="/">
      Ticketting
    </Link>{' '}
    {new Date().getFullYear()}.
  </Typography>
);

export default Copyright;
