import styled from 'styled-components';

export const Wrapper = styled.a<{ $inverted: boolean; $uppercase: boolean }>`
  display: flex;
  align-items: center;
  color: var(--color-${props => (props.$inverted ? 'dark-40' : '1')});
  padding-left: 10px;

  ${props => props.$uppercase && `text-transform: uppercase;`}

  svg {
    fill: var(
      ${props => (props.$inverted ? '--color-1-dark-40' : '--color-1')}
    );
  }

  &:hover {
    color: var(--color-${props => (props.$inverted ? 3 : 2)});
    svg {
      fill: var(--color-${props => (props.$inverted ? 3 : 2)});
    }
  }
`;
