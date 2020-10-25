import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, ButtonsContainer } from './styles';

const Header = () => {
  const history = useHistory();
  const [pathName, setPathName] = useState(window.location.pathname);

  const handlePageChange = useCallback((path) => {
    history.push(path);
    setPathName(path);
  }, [history]);

  return (
    <Container>
      <ButtonsContainer>
        <button className={pathName === '/' ? 'active-btn' : 'inactive'} type="button" onClick={() => handlePageChange('/')}>Orders</button>
        <button className={pathName === '/infos' ? 'active-btn' : 'inactive'} type="button" onClick={() => handlePageChange('/infos')}>Infos</button>
      </ButtonsContainer>
    </Container>
  );
};

export default Header;