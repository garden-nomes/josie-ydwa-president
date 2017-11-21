import React from 'react';
import EndorseForm from '../components/EndorseForm';
import endorse from '../content/endorse.md';

const Endorse = ({ history }) => (
  <div>
    {console.log(history) && false}
    <div dangerouslySetInnerHTML={{ __html: endorse }} />
    <EndorseForm
      afterSubmit={() => {
        history.push('/thanks');
      }}
    />
  </div>
);

export default Endorse;
