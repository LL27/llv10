import { graphql } from "gatsby";
import * as React from "react";
import Seo from "../components/seo";
import styled from "@emotion/styled"
import Layout from "../components/layout"
import Header from "../components/header"


const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  text-align: center;

`

const MarkedHeader = styled.h1`
  font-family: 'Lora', Fallback, serif;



`

// STYLE THE TAGS INSIDE THE MARKDOWN HERE
const MarkdownContent = styled.div`
  a {
    text-decoration: none;
    position: relative;

    background-image: linear-gradient(
      rgba(255, 250, 150, 0.8),
      rgba(255, 250, 150, 0.8)
    );
    background-repeat: no-repeat;
    background-size: 100% 0.2em;
    background-position: 0 88%;
    transition: background-size 0.25s ease-in;
    &:hover {
      background-size: 100% 88%;
    }
  }
`

const ProjectTemplate = ({ data, html }) => { 
    return (
      <Layout>
        <Seo title={data.mdx.frontmatter.title} 
            description={data.mdx.frontmatter.description}
        />
        <Header/>
        <Content>
        <MarkedHeader>{data.mdx.frontmatter.title}</MarkedHeader>
        <p>{data.mdx.frontmatter.description}</p>
         <p>Main technologies: {data.mdx.frontmatter.technologies}</p>
        <MarkdownContent dangerouslySetInnerHTML={{ __html: html }} />
      </Content>
      </Layout>
    );
  }


export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        technologies
        path
        description
      }
      excerpt(pruneLength: 10)
      id
      body
    }
  }
`;

export default ProjectTemplate;