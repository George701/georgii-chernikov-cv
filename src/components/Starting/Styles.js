import styled from 'styled-components';
import {
  eerieBlack,
  ghostWhite,
  gambodge,
  foldenBrown,
} from '../../constants/colors';
import { modes } from '../../constants/options';

export const Body = styled.div`
  background: ${props => props.mode === modes.dark ? eerieBlack : ghostWhite};
  color: ${ghostWhite};
  color: ${props => props.mode === modes.dark ? ghostWhite : eerieBlack};
  height: 100vh;
  transition: all 0.1s ease-out;
`;

export const HeadBar = styled.div`
  margin: 0 20%;
  padding-top: 1rem;
  display: flex;
`;

export const LinkCV = styled.a`
  flex: 1;
  color: ${props => props.mode === modes.dark ? gambodge : foldenBrown};
  text-decoration: none;
  cursor: pointer;
  transition: all 0.1s ease-out;
  font-weight: 700;

  &:hover {
    color: ${props => props.mode === modes.dark ? ghostWhite : gambodge};
  }
  &:active {
    color: ${foldenBrown};
  }
`;

export const ModeButton = styled.span`
  flex: 1;
  display: flex;
  justify-content: end;
  cursor: pointer;
  transition: all 0.1s ease-out;

    svg {
      fill: ${props => props.mode === modes.dark ? ghostWhite : eerieBlack};

      &:hover {
        fill: ${gambodge};
      }

      &:active {
        fill: ${foldenBrown};
      }
    }
`;

export const NameProfession = styled.div`
`;

export const PhotoLinks = styled.div`
`;