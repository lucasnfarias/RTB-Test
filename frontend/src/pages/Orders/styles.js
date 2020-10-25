import styled, { css, keyframes } from 'styled-components';
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

  .loading {
    font-size: 48px;
    font-weight: 500;
    width: 200px;
    height: 50px;
    color: ${colors.mainRed};
    position: absolute;
    top: calc(50vh - 25px);
    left: calc(50vw - 100px);
  }

  table {
    width: 90%;
    border-collapse: collapse;
    margin-top: 24px;
    animation: ${appearFromUp} ease-in 1s;
  
    tr.titles {
      background: ${colors.mainRed};
      color: ${colors.white};
      font-size: 18px;
    }
    td,
    th {
      padding: 10px;
      text-align: center;
    }
    tr {
      width: 70%;
      background-color: ${colors.white};

      &:nth-child(even) {
        background-color: ${colors.secondaryRed};
      }
      p {
        color: ${colors.mediumGray};
      }
      span {
        font-weight: bold;
      }
    }
  }
`;


export const TopContent = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  animation: ${appearFromUp} ease-in 1s;

  .title {
    h1 {
      text-align: left;
      font-weight: 500;
      font-size: 48px;
      color: ${colors.lightBlack};
    }

    strong {
      font-size: 14px;
      color: ${colors.secondaryRed};
    }
  }

  .revenue-per-seller {
    display: flex;
    align-items: center;
    justify-content: center;

    div {
      padding: 8px 16px;
      border: 1px solid ${colors.mainRed};
      border-radius: 8px;

      & + div {
        margin-left: 8px;
      }

      strong {
        color: ${colors.lightBlack};
        font-size: 24px;
        font-weight: 400;
      }

      p {
        margin-top: 8px;
        color: ${colors.mainRed};
        font-size: 16px;
        font-weight: 500;
        width: 100%;
        text-align: right;
      }
    }
  }

  .filter-container {
    display: flex;
    align-items: center;
    justify-content: center;

    select {
      border: 1px solid ${colors.mainRed};
      color: ${colors.mainRed};

      & + select {
        margin-left: 8px;
      }
    }
  }
`;

export const TableContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 60vh;
`;

export const PageBtnsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  animation: ${appearFromUp} ease-in 1s;

  strong {
    margin-bottom: 4px;
    font-size: 16px;
    color: ${colors.mainRed};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  span {
    color: ${colors.lightBlack};
    margin: 0 16px;
    font-size: 18px;
    font-weight: 500;
  }

  button {
    background: ${colors.mainRed};
    border: 0;
    color: ${colors.white};
    padding: 8px;
    border-radius: 4px;
    transition: filter 0.3s;

    &:hover {
      transition: filter 0.3s;
      filter: brightness(90%);
    }
  }

  ${({ showIncrement }) => !showIncrement && css`
    .increment {
      visibility: hidden;
    }
  `}

  ${({ showDecrement }) => !showDecrement && css`
    .decrement {
      visibility: hidden;
    }
  `}
`;