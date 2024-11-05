import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import media from "styled-media-query";
import ProjectContainer from "../../components/ProjectContainer";
import projects from "../../data/projects";
import SEO from "../../components/seo";
import Header from "../../components/header"
import "../../components/layout.css";

const alternatingContainer = ["photoright", "photoleft"];

const ArticleHeader = styled.h3`
  margin-right: 1rem;
  margin-bottom: 0px;
  align-self: flex-start;
  ${media.greaterThan("1000px")`
       margin-bottom: 1.25rem;
  `}
`;

const ProjectsWrapper = styled.div`
  padding-top: 5rem;
`;

const Par = styled.p`
  margin-bottom: 0;
`;


const ProjectImage = styled.div`
  height: auto;
  width: 100%;
  margin-bottom: 0px;
}

  ${media.greaterThan("1000px")`
     width: 55%;
  `}
`;
const ProjectText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5px;
  height: 100%;
  margin-bottom: 15px;

  ${media.greaterThan("1000px")`
         flex-direction: column;
         width: 45%;
          padding: 1.45rem 1.2rem;
          justify-content: flex-start;

  `}
`;

const PortfolioIndex = () => {
  return (
    <Layout>
      <SEO
        title="Portfolio"
        keywords={[`javascrtipt`, `react`, `web development`]}
      />
      <Header/>
      <ProjectsWrapper id="works">

        
        {projects.map((node, index) => (
          <div key={index}>
            <Link
              to={node.path}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <ProjectContainer
                direction={
                  alternatingContainer[index % alternatingContainer.length]
                }
              >
                <ProjectText>
                  <ArticleHeader>{node.title}</ArticleHeader>
                  <Par>
                    <strong>Technology:</strong> {node.technologies}
                  </Par>
                </ProjectText>


                <ProjectImage>
                  <img
                    src={node.images[0]}
                    alt=""
                    css={css`
                      margin-bottom: 0;
                      border-radius: 20px;
                      border: 1px solid lightGray;
                      padding: 5px;

                    `}
                  />
                </ProjectImage>
              </ProjectContainer>
            </Link>
          </div>
        ))}
      </ProjectsWrapper>
    </Layout>
  );
};

export default PortfolioIndex;
export const Head = () => <title>Portfolio</title>
