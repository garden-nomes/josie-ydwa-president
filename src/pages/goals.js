import React from 'react';
import goals from '../content/goals.md';

const GoalsPage = () => <div dangerouslySetInnerHTML={{ __html: goals }} />;

export default GoalsPage;
