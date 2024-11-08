import React from "react"
import PropTypes from "prop-types"
import { Link, StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import Menu from "./menu"


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row;
  padding-bottom: 2.4rem;
`
const Description = styled.h3`
  align-self: flex-end;
  margin-bottom: 0;
`

const NameHeader = styled.h1`
  margin-bottom: 0;
  line-height: 1;
`

const Header = () => (
  <StaticQuery
    query={graphql`
      query LandingSiteTitleQuery {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
      }
    `}
    render={(data) => (
      <Container>
        <div
          css={css`
            margin-right: 2.6rem;
            width: 210px;
          `}
        >
          <Link css={css`
                  text-decoration: none;
                  color: inherit;
                `}
                to="/" ><NameHeader>{data.site.siteMetadata.title}</NameHeader>
          <Description>{data.site.siteMetadata.subtitle}</Description>
          </Link>
        </div>

        <Menu />
        
      </Container>
    )}
  />
)

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
}

NameHeader.defaultProps = {
  siteTitle: ``,
}

Description.propTypes = {
  subtitle: PropTypes.string,
}

Description.defaultProps = {
  subtitle: ``,
}

export default Header
