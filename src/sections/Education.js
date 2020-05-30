/* eslint-disable react/destructuring-assignment */
import React from 'react';
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
import '../../static/font-awesome-custom/portfolio.css';

const Background = () => (
  <div>
    <Triangle
      color="secondaryDark"
      height={['50vh', '40vh']}
      width={['70vw', '70vw']}
      invertX
    />

    <Triangle
      color="secondary"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
    />

    <Triangle
      color="backgroundDark"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
      invertY
    />
  </div>
);

const CARD_HEIGHT = '200px';

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

const ImageContainer = styled.div`
  margin: auto;
  width: ${CARD_HEIGHT};

  ${MEDIA_QUERY_SMALL} {
    width: calc(${CARD_HEIGHT} / 2);
    margin-top: 15%;
  }
`;

const EducationImage = styled(Image)`
  width: ${CARD_HEIGHT};
  height: ${CARD_HEIGHT};
  padding: 45px;
  margin-top: 0px;

  ${MEDIA_QUERY_SMALL} {
    height: calc(${CARD_HEIGHT} / 2);
    width: calc(${CARD_HEIGHT} / 2);
    margin-top: calc(${CARD_HEIGHT} / 4);
    padding: 10px;
  }
`;

const EducationTag = styled.div`
  position: relative;
  height: ${CARD_HEIGHT};
  top: calc(
    -${CARD_HEIGHT} - 3.5px
  );

  ${MEDIA_QUERY_SMALL} {
    top: calc(-${CARD_HEIGHT} - 3.5px + (${CARD_HEIGHT} / 4));
  }
`;

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
};

const SingleEducation = (props) =>{
  const {school,degree,location,completionDate,logo} = props
  return (
    <Card p={0}>
      <Flex style={{ height: CARD_HEIGHT }}>
        <TextContainer style={containerStyle}>
          <span>
            <Title my={2} pb={1}>
              {degree}
            </Title>
            <Text>{school}</Text>
          </span>

          <Text my={2} pb={1}>
            <FontAwesomeIcon name="map-marker" />
            <i>{` ${location}`}</i>
          </Text>
        </TextContainer>

        <ImageContainer>
          <EducationImage
            src={logo.image.src}
            alt={logo.title}
          />
          <EducationTag>
            <ImageSubtitle bg="backgroundDark">
              {completionDate}
            </ImageSubtitle>
          </EducationTag>
        </ImageContainer>
      </Flex>
    </Card>
  )}

  SingleEducation.propTypes = {
  school: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  completionDate: PropTypes.string,
  logo: PropTypes.shape({
    image: PropTypes.shape({
      src: PropTypes.string,
    }),
    title: PropTypes.string,
  }).isRequired,
};

const Education = () => (
  <Section.Container id="education" Background={Background}>
    <Section.Header name="Education" />
    <StaticQuery
      query={graphql`
        query EducationQuery {
          contentfulAbout {
            schooling {
              id
              degree
              school
              logo {
                title
                image: resize(width: 200, quality: 100) {
                  src
                }
              }
              completionDate(formatString: "YYYY")
              location
            }
            certificates {
              id
              degree
              school
              logo {
                title
                image: resize(width: 200, quality: 100) {
                  src
                }
              }
              completionDate(formatString: "YYYY")
              location
            }
          }
        }
      `}
      render={({ contentfulAbout }) => (
        <div>
          <div className="SingleItemContainer">
            <div className="Title">
              <Title margin="1em"> Schooling:</Title>
            </div>
            <CardContainer
              minWidth="300px"
              style={{
          width: '80%',
        }}
            >
              {contentfulAbout.schooling.map((p, i) => (
                <Fade bottom delay={i * 200} key={p.id}>
                  <SingleEducation {...p} />
                </Fade>
          ))}
            </CardContainer>
          </div>
          <hr color="#c60055" />
          <div className="SingleItemContainer">
            <div className="Title">
              <Title margin="1em"> Certificates:</Title>
            </div>
            <CardContainer
              minWidth="250px"
              style={{
          width: '80%',
        }}
            >
              {contentfulAbout.certificates.map((p, i) => (
                <Fade bottom delay={i * 200} key={p.id}>
                  <SingleEducation {...p} />
                </Fade>
          ))}
            </CardContainer>
          </div>
        </div>
      )}
    />
  </Section.Container>
);

export default Education;
