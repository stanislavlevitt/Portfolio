/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Image, Text, Flex} from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import FontAwesomeIcon from 'react-fontawesome';
import Section from '../components/Section';
import { CardContainer, Card } from '../components/Card';
import Triangle from '../components/Triangle';
import ImageSubtitle from '../components/ImageSubtitle';

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['15vh', '10vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="secondaryDark"
      height={['50vh', '40vh']}
      width={['70vw', '40vw']}
      invertY
    />

    <Triangle
      color="secondary"
      height={['40vh', '15vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
);

const CARD_HEIGHT = '200px';
const EXPANDED_CARD_HEIGHT = 'auto';
const EXPANDED_CARD_WIDTH = '100%';

const MEDIA_QUERY_SMALL = '@media (max-width: 400px)';

const Title = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  display: table;
  border-bottom: ${(props) => props.theme.colors.primary} 5px solid;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  width: calc(100% - ${CARD_HEIGHT});

  ${MEDIA_QUERY_SMALL} {
    width: calc(100% - (${CARD_HEIGHT} / 2));
  }
`;

const ExpandedTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  width: calc(100% - 200px);

  ${MEDIA_QUERY_SMALL} {
    width: calc(100% - (200px / 2));
  }
`;

const DetailedTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
`;

const ImageContainer = styled.div`
  margin: auto;
  width: ${CARD_HEIGHT};

  ${MEDIA_QUERY_SMALL} {
    width: calc(${CARD_HEIGHT} / 2);
    margin-top: 15%;
  }
`;

const ExperienceImage = styled(Image)`
  width: ${CARD_HEIGHT};
  height: ${CARD_HEIGHT};
  padding: 40px;
  margin-top: 0px;

  ${MEDIA_QUERY_SMALL} {
    height: calc(${CARD_HEIGHT} / 2);
    width: calc(${CARD_HEIGHT} / 2);
    margin-top: calc(${CARD_HEIGHT} / 4);
    padding: 10px;
  }
`;

const ExperienceTag = styled.div`
  position: relative;
  height: ${CARD_HEIGHT};
  top: calc(
    -${CARD_HEIGHT} - 3.5px
  ); /*don't know why I have to add 3.5px here ... */

  ${MEDIA_QUERY_SMALL} {
    top: calc(-${CARD_HEIGHT} - 3.5px + (${CARD_HEIGHT} / 4));
  }
`;

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
};

const SingleExperience = (props) =>{
  const {company,title,location,bullet1,bullet2,bullet3,bullet4,bullet5,bullet6,startDate,endDate,logo} = props
  const [expandCard, setexpandCard] = useState(false);
  const toggleExpandCard = () => setexpandCard(!expandCard);


  return (
    <>
      {expandCard ? (
        <Card p={0} onClick={toggleExpandCard}>
          <Flex style={{ height: CARD_HEIGHT }}>
            <TextContainer style={containerStyle}>
              <span>
                <Title my={2} pb={1}>
                  {title}
                </Title>
                <Text>{company}</Text>
              </span>

              <Text my={2} pb={1}>
                <FontAwesomeIcon name="map-marker" />
                <i>{` ${location}`}</i>
              </Text>
            </TextContainer>

            <ImageContainer>
              <ExperienceImage
                src={logo.image.src}
                alt={logo.title}
              />
              <ExperienceTag>
                <ImageSubtitle bg="backgroundDark">{`${startDate} - ${endDate}`}</ImageSubtitle>
              </ExperienceTag>
            </ImageContainer>
          </Flex>
        </Card>
      ) : (
        <Card p={0} width={EXPANDED_CARD_WIDTH} onClick={toggleExpandCard}>
          <Flex style={{ height: EXPANDED_CARD_HEIGHT, flexDirection: 'column' }}>
            <Flex height="200px">
              <ExpandedTextContainer style={containerStyle}>
                <span>
                  <Title my={2} pb={1}>
                    {title}
                  </Title>
                  <Text>{company}</Text>
                </span>
                <Text my={2} pb={1}>
                  <FontAwesomeIcon name="map-marker" />
                  <i>{` ${location}`}</i>
                </Text>
              </ExpandedTextContainer>

              <ImageContainer style={containerStyle}>
                <div>
                  <ExperienceImage
                    src={logo.image.src}
                    alt={logo.title}
                  />
                  <ExperienceTag>
                    <ImageSubtitle bg="backgroundDark">{`${startDate} - ${endDate}`}</ImageSubtitle>
                  </ExperienceTag>
                </div>
              </ImageContainer>
            </Flex>
            <DetailedTextContainer>
              {bullet1 ? (
                <Text
                  width={[1]}
                  style={{
                  overflow: 'auto',
                  paddingBottom: '.5em',
                  display: 'flex',
                }}
                >
                  <FontAwesomeIcon
                    name="caret-right"
                    style={{ paddingRight: '.5em' }}
                  />
                  {bullet1}
                </Text>
            ) : null}
              {bullet2 ? (
                <Text
                  width={[1]}
                  style={{
                  overflow: 'auto',
                  paddingBottom: '.5em',
                  display: 'flex',
                }}
                >
                  <FontAwesomeIcon
                    name="caret-right"
                    style={{ paddingRight: '.5em' }}
                  />
                  {bullet2}
                </Text>
            ) : null}
              {bullet3 ? (
                <Text
                  width={[1]}
                  style={{
                  overflow: 'auto',
                  paddingBottom: '.5em',
                  display: 'flex',
                }}
                >
                  <FontAwesomeIcon
                    name="caret-right"
                    style={{ paddingRight: '.5em' }}
                  />
                  {bullet3}
                </Text>
            ) : null}
              {bullet4 ? (
                <Text
                  width={[1]}
                  style={{
                  overflow: 'auto',
                  paddingBottom: '.5em',
                  display: 'flex',
                }}
                >
                  <FontAwesomeIcon
                    name="caret-right"
                    style={{ paddingRight: '.5em' }}
                  />
                  {bullet4}
                </Text>
            ) : null}
              {bullet5 ? (
                <Text
                  width={[1]}
                  style={{
                  overflow: 'auto',
                  paddingBottom: '.5em',
                  display: 'flex',
                }}
                >
                  <FontAwesomeIcon
                    name="caret-right"
                    style={{ paddingRight: '.5em' }}
                  />
                  {bullet5}
                </Text>
            ) : null}
              {bullet6 ? (
                <Text
                  width={[1]}
                  style={{
                  overflow: 'auto',
                  paddingBottom: '.5em',
                  display: 'flex',
                }}
                >
                  <FontAwesomeIcon
                    name="caret-right"
                    style={{ paddingRight: '.5em' }}
                  />
                  {bullet6}
                </Text>
            ) : null}
            </DetailedTextContainer>
          </Flex>
        </Card>
    )}
    </>
  )}

SingleExperience.propTypes = {
  company: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  bullet1: PropTypes.string,
  bullet2: PropTypes.string,
  bullet3: PropTypes.string,
  bullet4: PropTypes.string,
  bullet5: PropTypes.string,
  bullet6: PropTypes.string,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  logo: PropTypes.shape({
    image: PropTypes.shape({
      src: PropTypes.string,
    }),
    title: PropTypes.string,
  }).isRequired,
};

const Experiences = () => (
  <Section.Container id="experience" Background={Background}>
    <Section.Header name="Work Experience" />
    <StaticQuery
      query={graphql`
        query ExperiencesQuery {
          contentfulAbout {
            workExperience {
              id
              title
              company
              logo {
                title
                image: resize(width: 200, quality: 100) {
                  src
                }
              }
              startDate(formatString: "MM / YYYY")
              endDate(formatString: "MM / YYYY")
              location
              bullet1
              bullet2
              bullet3
              bullet4
              bullet5
              bullet6
            }
          }
        }
      `}
      render={({ contentfulAbout }) => (
        <CardContainer minWidth="350px">
          {contentfulAbout.experiences.map((p, i) => (
            <Fade bottom delay={i * 200} key={p.id}>
              <SingleExperience {...p} />
            </Fade>
          ))}
        </CardContainer>
      )}
    />
  </Section.Container>
);

export default Experiences;
