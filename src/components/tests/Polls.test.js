import React from 'react';
import renderer from 'react-test-renderer';
import Polls from '../polls/Polls';

describe('Polls snapshot', () => {
  it('can match a snapshot', () => {
    const polls = [
      { question: 'a question', inputs: ['yes', 'no'], email: 'email' }
    ];
    const tree = renderer.create(
      <Polls polls={polls}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
