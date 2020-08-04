/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { Flex } from '@chakra-ui/core';

import { rhythm } from '../style/typography';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `);

  const { author } = data.site.siteMetadata;
  return (
    <Flex align="center">
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(0.5),
          marginBottom: 0,
          minWidth: 100,
          borderRadius: '1rem',
        }}
        imgStyle={{
          borderRadius: '5px',
        }}
      />
      <p>
        Useful commands collected over many years by <strong>{author}</strong>{' '}
        who creates software, teaches coding and speaks at events.
        {` `}
        Visit his{' '}
        <a className="normal" href={`https://www.andrekovac.com/`}>
          homepage
        </a>{' '}
        to find out what he is up to and for ways to get in touch.
      </p>
    </Flex>
  );
};

export default Bio;
