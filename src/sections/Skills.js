/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, Flex} from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import { CardContainer, Card } from '../components/Card';
import Triangle from '../components/Triangle';
import ImageSubtitle from '../components/ImageSubtitle';
import '../../static/font-awesome-custom/portfolio.css';

const Background = () => (
  <div>
    <Triangle
      color="primaryDark"
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

const CARD_HEIGHT = '150px';

const MEDIA_QUERY_SMALL = '@media (max-width: 400px)';

const Title = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  display: table;
  border-bottom: ${(props) => props.theme.colors.primaryLight} 5px solid;
`;

const ImageContainer = styled.div`
  margin: auto;
  width: ${CARD_HEIGHT};
  height: ${CARD_HEIGHT} ${MEDIA_QUERY_SMALL} {
    width: calc(${CARD_HEIGHT} / 2);
  }
`;

const SkillImage = styled(Image)`
  width: ${CARD_HEIGHT};
  height: ${CARD_HEIGHT};
  padding: 40px;
  margin-top: 0px;

  ${MEDIA_QUERY_SMALL} {
    height: ${CARD_HEIGHT};
    width: ${CARD_HEIGHT};
    margin-top: 0px;
    padding: 40px;
  }
`;

const SkillTag = styled.div`
  position: relative;
  height: ${CARD_HEIGHT};
  top: calc(
    -${CARD_HEIGHT} - 3.5px
  );

  ${MEDIA_QUERY_SMALL} {
    top: calc(-${CARD_HEIGHT} - 3.5px);
  }
`;

const SingleSkill = (props) =>{
  const {skill,logo} = props
  return (
    <Card p={0}>
      <Flex style={{ height: CARD_HEIGHT }}>
        <ImageContainer>
          <SkillImage
            src={logo.image.src}
            alt={logo.title}
          />
          <SkillTag>
            <ImageSubtitle bg="primary" color="white" y="bottom" x="right">
              {skill}
            </ImageSubtitle>
          </SkillTag>
        </ImageContainer>
      </Flex>
    </Card>
  )}

  SingleSkill.propTypes = {
  skill: PropTypes.string.isRequired,
  logo: PropTypes.shape({
    image: PropTypes.shape({
      src: PropTypes.string,
    }),
    title: PropTypes.string,
  }).isRequired,
};

const Skills = () => (
  <Section.Container id="skills" Background={Background}>
    <Section.Header name="Key Skills" />
    <StaticQuery
      query={graphql`
        query KeySkillsQuery {
          contentfulAbout {
            computerLanguages {
              id
              skill
              logo {
                title
                image: resize(height:200, width: 200, quality: 100) {
                  src
                }
              }
            }
            frontEnd {
              id
              skill
              logo {
                title
                image: resize(height:200,width: 200, quality: 100) {
                  src
                }
              }
            }
            backEnd {
              id
              skill
              logo {
                title
                image: resize(height:200,width: 200, quality: 100) {
                  src
                }
              }
            }
            techTools {
              id
              skill
              logo {
                title
                image: resize(height:200,width: 200, quality: 100) {
                  src
                }
              }
            }
            otherTech {
              id
              skill
              logo {
                title
                image: resize(height:200,width: 200, quality: 100) {
                  src
                }
              }
            }
            languages {
              id
              skill
              logo {
                title
                image: resize(height:200,width: 200, quality: 100) {
                  src
                }
              }
            }
          }
        }
      `}
      render={({ contentfulAbout }) => (
        <div>
          <div className="SingleItemContainer">
            <div className="Title">
              <Title margin="1em"> Computer Languages:</Title>
            </div>
            <CardContainer
              minWidth="150px"
              style={{
          width: '80%',
        }}
              className="card-container"
            >
              {contentfulAbout.computerLanguages.map((p, i) => (
                <Fade bottom delay={i * 200} key={p.id}>
                  <SingleSkill {...p} />
                </Fade>
          ))}
            </CardContainer>
          </div>
          <hr color="#499094" />
          <div className="SingleItemContainer">
            <div className="Title">
              <Title margin="1em"> Front End:</Title>
            </div>
            <CardContainer
              minWidth="150px"
              style={{
          width: '80%',
        }}
              className="card-container"
            >
              {contentfulAbout.frontEnd.map((p, i) => (
                <Fade bottom delay={i * 200} key={p.id}>
                  <SingleSkill {...p} />
                </Fade>
          ))}
            </CardContainer>
          </div>
          <hr color="#499094" />
          <div className="SingleItemContainer">
            <div className="Title">
              <Title margin="1em"> Back End:</Title>
            </div>
            <CardContainer
              minWidth="150px"
              style={{
          width: '80%',
        }}
              className="card-container"
            >
              {contentfulAbout.backEnd.map((p, i) => (
                <Fade bottom delay={i * 200} key={p.id}>
                  <SingleSkill {...p} />
                </Fade>
          ))}
            </CardContainer>
          </div>
          <hr color="#499094" />
          <div className="SingleItemContainer">
            <div className="Title">
              <Title margin="1em"> Tech Tools:</Title>
            </div>
            <CardContainer
              minWidth="150px"
              style={{
          width: '80%',
        }}
              className="card-container"
            >
              {contentfulAbout.techTools.map((p, i) => (
                <Fade bottom delay={i * 200} key={p.id}>
                  <SingleSkill {...p} />
                </Fade>
          ))}
            </CardContainer>
          </div>
          <hr color="#499094" />
          <div className="SingleItemContainer">
            <div className="Title">
              <Title margin="1em"> Other Tools:</Title>
            </div>
            <CardContainer
              minWidth="150px"
              style={{
          width: '80%',
        }}
              className="card-container"
            >
              {contentfulAbout.otherTech.map((p, i) => (
                <Fade bottom delay={i * 200} key={p.id}>
                  <SingleSkill {...p} />
                </Fade>
          ))}
            </CardContainer>
          </div>
          <hr color="#499094" />
          <div className="SingleItemContainer">
            <div className="Title">
              <Title margin="1em"> Spoken Languages:</Title>
            </div>
            <CardContainer
              minWidth="150px"
              style={{
          width: '80%',
        }}
              className="card-container"
            >
              {contentfulAbout.languages.map((p, i) => (
                <Fade bottom delay={i * 200} key={p.id}>
                  <SingleSkill {...p} />
                </Fade>
          ))}
            </CardContainer>
          </div>
        </div>
      )}
    />
  </Section.Container>
);

export default Skills;
