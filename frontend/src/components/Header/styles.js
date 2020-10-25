import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.header`
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: flex-end;
  padding: 16px 48px;
  background: ${colors.white};
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  button {
    background: ${colors.white};
    border: 1px solid ${colors.mainRed};
    border-radius: 4px;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colors.mainRed};
    transition: color 0.6s, background-color 0.6s;

    & + button {
      margin-left: 8px;
    }

    &:hover {
      transition: color 0.6s, background-color 0.6s;
      background: ${colors.mainRed};
      color: ${colors.white};
    } 
  }

  .active-btn {
    background: ${colors.mainRed};
    color: ${colors.white};

    & + button {
      margin-left: 8px;
    }

    &:hover {
      background: ${colors.mainRed};
      color: ${colors.white};
    } 
  }
`;