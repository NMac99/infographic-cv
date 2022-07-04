import styled from 'styled-components';

export const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  letter-spacing: 1px;
  color: var(--color-3);
  padding-left: 10px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;

  & span,
  div {
    transition: font-size 0.3s ease;
  }

  & > div {
    font-size: 14px;
    margin-top: 5px;
    text-transform: uppercase;
  }

  svg {
    fill: var(--color-3);
  }

  &:hover {
    color: var(--color-4);

    & span {
      font-size: 80px !important;
    }

    & > div {
      font-size: 16px;
    }
    svg {
      fill: var(--color-4);
    }
  }
`;
