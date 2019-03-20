import React from 'react';
import CreatePoll from '../containers/polls/CreatePoll';
import AllPolls from '../containers/polls/AllPolls';

export default function Home() {
  return (
    <>
      <h1>home</h1>
      <CreatePoll/>
      <AllPolls/>
    </>
  );
}
