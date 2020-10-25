import styled, { keyframes } from 'styled-components';
import colors from '../../styles/colors';

const appearFromUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px 48px;

  .infos {
    display: flex;
    flex-direction: column;

    width: 90%;
    animation: ${appearFromUp} ease-in 1s;

    h1 {
      text-align: left;
      font-weight: 500;
      font-size: 48px;
      color: ${colors.lightBlack};
    }

    strong {
      font-size: 34px;
      color: ${colors.mainRed};
      margin-bottom: 16px;
    }
    
    section {
      p {
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 8px;
      }

      ul {
        margin-left: 24px;
        color: ${colors.mainRed};
        font-size: 16px;

        li {
          margin-top: 8px;
          font-weight: 500;
        }

        li.dependendecy {
          font-weight: 400;
          color: ${colors.lightBlack};
        }
      }
    }
  }
`;

