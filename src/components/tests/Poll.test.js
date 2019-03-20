import React from 'react';
import renderer from 'react-test-renderer';
import Poll from '../polls/Poll';

describe('Poll snapshot', () => {
  it('can match a snapshot', () => {
    const poll = 
      { question: 'a question', input: ['answer1', 'answer2', 'answer3'] }
    ;
    const tree = renderer.create(
      <Poll poll={poll}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
