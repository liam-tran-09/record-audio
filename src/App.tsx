import React from "react";
import Recorder from "./components/Recorder";
import RecordList from "./components/RecordList";
import UseRecord from "./hooks/UseRecord";
import { UseRecorder } from "./types/record";

function App() {
  const { recorderState, ...handlers }: UseRecorder = UseRecord();
  const { audio } = recorderState;
  return (
    <div className="ui container center aligned">
      <h1 className="ui ">Voice Recorder</h1>
      <div className="ui ">
        <Recorder recorderState={recorderState} handlers={handlers} />
        <RecordList audio={audio} />
      </div>
    </div>
  );
}

export default App;
