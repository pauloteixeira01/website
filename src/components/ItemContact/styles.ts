import styled from "styled-components";
import Link from 'next/link'

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  word-break: break-word;
`;

export const StyledIcon = styled.div`
  margin-right: 1rem;
  display: flex;

  svg {
    width: 30px;
    height: 30px;
  }
`;

export const StyledLink = styled(Link)`
  color: #00ff00;
  cursor: pointer;
  text-decoration: none;
`

export const StyledText = styled.p`
  color: #00ff00;
  text-align: start;
`;
