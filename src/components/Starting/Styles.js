import styled from 'styled-components';
import {
  eerieBlack,
  ghostWhite,
  gambodge,
  foldenBrown,
  romanSliver,
  richBlackFOGRA39,
  jet,
  gainsboro,
} from '../../constants/colors';
import { modes } from '../../constants/options';

const centralSpacingValue = '20%';

export const Body = styled.div`
  background: ${props => props.mode === modes.dark ? eerieBlack : ghostWhite};
  color: ${ghostWhite};
  color: ${props => props.mode === modes.dark ? ghostWhite : eerieBlack};
  height: 100vh;
  font-size: 16px;
  transition: all 0.3s ease-out;
`;

export const HeadBar = styled.div`
  margin: 0 ${centralSpacingValue};
  padding-top: 3rem;
  height: 2rem;
  display: flex;
`;

export const LinkCV = styled.a`
  flex: 1;
  color: ${props => props.mode === modes.dark ? gambodge : eerieBlack};
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease-out;
  font-weight: 600;

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

    svg {
      transition: all 0.3s ease-out;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 20rem;

    span {
      height: 4rem;
    }

    span:first-child {
      display:flex;
      align-items: flex-end;
    }
  /* div:first-child {
    border: 1px solid #FFF;
  } */
`;

export const Name = styled.div`
  font-size: 32px;
  height: 7rem;
  line-height: 7rem;
  text-align: center;
`;

export const CvBtn = styled.button`
  font-size: 18px;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 6px;
  border: 2px solid ${props => props.mode === modes.dark ? gambodge : eerieBlack};
  color: ${props => props.mode === modes.dark ? gambodge : eerieBlack};
  background-color: ${props => props.mode === modes.dark ? eerieBlack : ghostWhite};
  transition: all 0.3s ease-out;
  font-weight: 700;
  box-shadow: 1px 1px 2px 2px ${props => props.mode === modes.dark ? richBlackFOGRA39 : romanSliver};

  &:hover {
    color: ${props => props.mode === modes.dark ? eerieBlack : ghostWhite};
    background-color: ${props => props.mode === modes.dark ? gambodge : eerieBlack};
  }
  &:active {
    color: ${props => props.mode === modes.dark ? eerieBlack : ghostWhite};
    background-color: ${foldenBrown};
    border-color: ${foldenBrown};
  }
`;

export const PhotoLinks = styled.div`
  display: flex;
  flex-direction: row;
  height: 33rem;
  border: 1px solid purple;
`;

// Media
export const Links = styled.div`
  border: 1px solid silver;
  flex: 1;
  position: relative;

  div:first-child {
    display: flex;
    flex-direction: column;
    padding-top: 28%;
    align-items: flex-end;
    position: absolute;
    bottom: 4px;
    right: 6px;
  }
  /* padding-left: 10%; */
  /* height: 33rem; */

  /* @media (max-width: 768px) {
    width: 44px;
    padding-left: 10%;
  } */
`;

export const Photo = styled.div`
  flex: 2;
  border: 1px solid gold;
`;

export const Nav = styled.div`
    flex: 1;
    border: 1px solid blue;
`;
// endMedia

export const LinkWithIcon = styled.a`
  flex: 1;
  width: 3rem;
  padding: 4px 8px 3px 7px;
  width: 40px;
  height: 50px;
  margin-bottom: 1vh;
  background-color: ${props => props.mode === modes.dark ? jet : gainsboro};
  border-radius: 4px;
  box-shadow: 1px 1px 2px 2px ${props => props.mode === modes.dark ? richBlackFOGRA39 : romanSliver};
  transition: all 0.3s ease-out;

  @media (max-width: 768px) {
    height: 40px;
    padding: 7px 8px 3px 7px;
  }

  &:hover {
    background-color: ${romanSliver};
  }
  &:active {
    fill: ${foldenBrown};
  }

  svg {
    height: 40px;
    width: 40px;
    fill: ${props => props.mode === modes.dark ? gambodge : eerieBlack};
    transition: all 0.5s ease-out;

    &:hover {
      fill: ${props => props.mode === modes.dark ? ghostWhite : gambodge};
    }
    &:active {
      fill: ${foldenBrown};
    }

    @media (max-width: 768px) {
      height: 30px;
      width: 30px;
    }
  }
`;

export const VerticalLine = styled.div`
  position: relative;
  width: 56px;
  height: 50px;

  div {
    background-color: ${props => props.mode === modes.dark ? gambodge : eerieBlack};
    margin: 0;
    height: 28px;
    width: 4px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;