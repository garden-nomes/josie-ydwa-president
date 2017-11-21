import React from 'react';
import Link from 'gatsby-link';
import thanks from '../content/thanks.md';

const ThanksPage = () => <div dangerouslySetInnerHTML={{ __html: thanks }} />;

export default ThanksPage;
