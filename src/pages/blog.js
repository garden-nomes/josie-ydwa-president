import React from 'react';
import Link from 'gatsby-link';
import styles from './blog.module.css';

const Blog = ({ data }) => (
  <div>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <Link to={node.fields.slug} className={styles.post} key={node.id}>
        <div to={node.fields.slug} className={styles.postHeading}>
          <h2>{node.frontmatter.title}&nbsp;</h2>
          <div className={styles.postHeadingDate}>{node.frontmatter.date}</div>
        </div>

        <p>{node.excerpt}</p>
      </Link>
    ))}
  </div>
);

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: { frontmatter: { published: { eq: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "ll")
          }
          fields {
            slug
          }
          excerpt(pruneLength: 250)
        }
      }
    }
  }
`;

export default Blog;
