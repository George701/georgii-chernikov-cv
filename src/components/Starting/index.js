import React from 'react';
import { connect } from 'react-redux';
import {
  Body,
  HeadBar,
  NameProfession,
  PhotoLinks,
  LinkCV,
  ModeButton,
  Name,
  CvBtn,
  Links,
  LinkWithIcon,
  VerticalLine,
  Photo,
  Nav,
} from './Styles';
import withTranslation from '../../i18n/withTranslation';
import { switchMode } from '../../actions/mode';
import {modes} from '../../constants/options';
import {
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  GithubIcon,
} from './Icons';

const Starting = ({ t, mode, switchMode }) => {
  return (
    <Body mode={mode}>
      <HeadBar>
        <LinkCV
          mode={mode}
          href={'https://stackoverflow.com/questions/31567729/how-to-create-dynamic-href-in-react-render-function'}
        >
          {t('nameLabel')}
        </LinkCV>
        <ModeButton
          mode={mode}
          onClick={() => switcher(mode, switchMode)}
        >
          {modes.dark === mode ? (<MoonIcon/>) : (<SunIcon/>)}
        </ModeButton>
      </HeadBar>

      <NameProfession>
        {/* <div> */}
          <span>{t('greetingLabel')}</span>
          <Name>{t('firstName_lastName')}</Name>
          <span>Frontend Developer</span>
          <CvBtn mode={mode}>{t('downloadLabel')} CV</CvBtn>
        {/* </div> */}
      </NameProfession>

      <PhotoLinks>

        {/* <Links>
          <LinkWithIcon
            mode={mode}
            href={'https://reactjs.org/docs/refs-and-the-dom.html'}
          >
            <LinkedInIcon />
          </LinkWithIcon>

          <LinkWithIcon
            mode={mode}
            href={'https://reactjs.org/docs/refs-and-the-dom.html'}
          >
            <GithubIcon  />
          </LinkWithIcon>

          <VerticalLine mode={mode}>
            <div />
          </VerticalLine>
        </Links> */}

        {/* <Photo image={'../../../img/me.jpg'}/> */}

        {/* <Nav /> */}

        <Links>
          <div>
            <LinkWithIcon
                mode={mode}
                href={'https://reactjs.org/docs/refs-and-the-dom.html'}
              >
                <LinkedInIcon />
              </LinkWithIcon>

              <LinkWithIcon
                mode={mode}
                href={'https://reactjs.org/docs/refs-and-the-dom.html'}
              >
                <GithubIcon  />
              </LinkWithIcon>

              <VerticalLine mode={mode}>
                <div />
              </VerticalLine>
          </div>
        </Links>
        <Photo></Photo>
        <Nav></Nav>
      </PhotoLinks>
    </Body>
  );
};


const switcher = (mode, fn) => {
  if (modes.dark === mode) fn(modes.bright);
  if (modes.bright === mode) fn(modes.dark);
}

const mapStateToProps = state => ({
  mode: state.mode.mode,
});

const mapDispatchToProps = {
  switchMode,
};

export default withTranslation(connect(mapStateToProps, mapDispatchToProps)(Starting));