import React, { Fragment,useState } from 'react';
import Headroom from 'react-headroom';
import { Flex, Image } from 'rebass/styled-components';
import styled from 'styled-components';
import { SectionLinks } from 'react-scroll-section';
import Fade from 'react-reveal/Fade';
import FontAwesomeIcon from 'react-fontawesome';
import Hide from './Hide';
import RouteLink from './RouteLink';
import Logo from './Logo/Portfolio.svg';

const capitalize = (s) => s && s[0].toUpperCase() + s.slice(1);

const MEDIA_QUERY_LARGE = '@media (min-width: 401px)';
const MEDIA_QUERY_SMALL = '@media (max-width: 400px)';

const HeaderContainer = styled(Headroom)`
  .headroom--pinned {
    background: ${(props) => props.theme.colors.primaryDark};
  }

  position: absolute;
  width: 100%;
`;

const formatLinks = (allLinks) =>
  Object.entries(allLinks).reduce(
    (acc, [key, value]) => {
      const isHome = key === 'home';
      return isHome
        ? {
            ...acc,
            home: value,
          }
        : {
            ...acc,
            links: [...acc.links, { name: capitalize(key), value }],
          };
    },
    { links: [], home: null },
  );

const Header = () => {
  const [navVisible, setnavVisible] = useState(false);
  const togglenavVisible = () => setnavVisible(!navVisible);
  return(
    <HeaderContainer>
      <Fade top>
        <Flex
          flexWrap="wrap"
          justifyContent="space-between"
          alignItems="center"
          p={3}
        >
          <SectionLinks>
            {({ allLinks }) => {
            const { home, links } = formatLinks(allLinks);

            const homeLink = home && (
              <Image
                src={Logo}
                width="50px"
                alt="Portfolio Logo"
                onClick={home.onClick}
                style={{
                  cursor: 'pointer',
                }}
              />
            );
            const navLinks = links.map(({ name, value }) => (
              <RouteLink
                key={name}
                onClick={value.onClick}
                selected={value.isSelected}
                name={name}
              />
            ));

            return (
              <Fragment>
                {homeLink}
                <Hide query={MEDIA_QUERY_LARGE}>
                  {navVisible ? (
                    <FontAwesomeIcon
                      name="times"
                      style={{ color: 'white', paddingRight: '1em' }}
                      onClick={togglenavVisible}
                    />
                    ) : (
                      <FontAwesomeIcon
                        name="bars"
                        style={{ color: 'white', paddingRight: '1em' }}
                        onClick={togglenavVisible}
                      />
                      )}
                </Hide>
                {navVisible ? (
                  <Fade right>
                    <Flex className="nav-bar">{navLinks}</Flex>
                  </Fade>
                    ) : null}
                <Hide query={MEDIA_QUERY_SMALL}>
                  <Flex className="nav-bar">{navLinks}</Flex>
                </Hide>
              </Fragment>
            );
          }}
          </SectionLinks>
        </Flex>
      </Fade>
    </HeaderContainer>
  )};

export default Header;
