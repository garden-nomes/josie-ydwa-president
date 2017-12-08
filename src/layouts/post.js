import React from 'react';
import Link from 'gatsby-link';
import FontAwesome from 'react-fontawesome';
import styles from './post.module.css';

const Post = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <div className={styles.subtitle}>
        <div className={styles.subtitleItem}>
          <Link to="/blog">&lt; all posts</Link>
        </div>
        <div className={styles.date}>{post.frontmatter.date}</div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "LL")
      }
    }
  }
`;

export default Post;
