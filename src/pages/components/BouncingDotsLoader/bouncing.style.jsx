import styled, { keyframes } from 'styled-components';

export const bounceAnimation = keyframes`
  to {
    opacity: 0.1;
  }
`;

export const BouncingLoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 8.5px auto;
`;

export const BouncingLoaderDot = styled.div`
  width: 4px;
  height: 4px;
  margin: 1px 4px;
  border-radius: 50%;
  background-color: #000000;
  opacity: 1;
  animation: ${bounceAnimation} 0.6s infinite alternate;

  &:nth-child(2) {
    animation-delay: 0.2s;
  }

  &:nth-child(3) {
    animation-delay: 0.4s;
  }
`;