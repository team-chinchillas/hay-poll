import React from 'react';
import CreatePoll from '../containers/polls/CreatePoll';
import AllPolls from '../containers/polls/AllPolls';
import { getPolls } from '../services/polls';

export default function Home() {
  console.log('GETPOLLS', getPolls());
  return (
    <>
      <h1>home</h1>
      <CreatePoll/>
      <AllPolls/>
    </>
  );
}
