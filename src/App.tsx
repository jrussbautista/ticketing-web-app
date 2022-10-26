import { useEffect } from 'react';

import { useAppDispatch } from 'app/hooks';
import { getAccessTokenLocalStorage } from 'helpers/authHelpers';
import { getMe } from 'slices/auth/authSlice';
import Routing from 'routes/Routing';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // get current user details
    // if accessToken is exist from localStorage
    const accessToken = getAccessTokenLocalStorage();
    if (accessToken) {
      dispatch(getMe());
    }
  }, []);

  return <Routing />;
};

export default App;
