import React from 'react'
import { Parallax } from 'react-spring/renderprops-addons.cjs'
import { useMediaQuery } from 'react-responsive'
import { Text } from 'theme-ui'
import styled from '@emotion/styled'

import Layout from '../components/layout'
import Hero from '../components/hero'
import Projects from '../components/projects'
import About from '../components/about'
import Contact from '../components/contact'
import { Link } from 'gatsby'
import SEO from '../components/seo'

const Cara = () => {
  const isTablet = useMediaQuery({
    query: '(max-width: 1150px)',
  })

  const isPhone = useMediaQuery({
    query: '(max-width: 600px)',
  })

  let pages = 5
  let projectsOffset = 1
  let projectsFactor = 2.5
  let aboutOffset = 3
  let aboutFactor = 1
  let contactOffset = 4

  if (isPhone) {
    pages = 7
    projectsOffset = 1
    projectsFactor = 3.5
    aboutOffset = 4
    aboutFactor = 2
    contactOffset = 6
  } else if (isTablet) {
    pages = 5.2
    projectsOffset = 1
    projectsFactor = 2.5
    aboutOffset = 3
    aboutFactor = 1.3
    contactOffset = 4.3
  }

  return (
    <Layout>
      <SEO />
      <Text
        sx={{
          fontSize: 4,
          fontWeight: 'bold',
          float: 'right',
          position: 'fixed',
          top: 10,
          right: 30,
          zIndex: 999,
        }}
        variant="caps"
      >
        <BlogLink to="/blog">BLOG</BlogLink>
      </Text>
      <Parallax pages={pages}>
        <Hero offset={0} factor={1} />
        <Projects offset={projectsOffset} factor={projectsFactor} />
        <About offset={aboutOffset} factor={aboutFactor} />
        <Contact offset={contactOffset} factor={1} />
      </Parallax>
    </Layout>
  )
}

const BlogLink = styled(Link)`
  color: white;

  &:hover {
    color: #08fdd8;
  }
`

export default Cara
