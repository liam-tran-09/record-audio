import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faTimes,
  faSave,
} from "@fortawesome/free-solid-svg-icons";
import { formatMinutes, formatSeconds } from "../utils/utils";
import { TRecorder } from "../types/record";
import React from "react";

const Recorder = ({ recorderState, handlers }: TRecorder) => {
  const { recordingMinutes, recordingSeconds, initRecording } = recorderState;
  const { startRecording, saveRecording, cancelRecording } = handlers;

  return (
    <div>
      <div>
        <div>
          {initRecording && <div></div>}
          <span>{formatMinutes(recordingMinutes)}</span>
          <span>:</span>
          <span>{formatSeconds(recordingSeconds)}</span>
        </div>
        {initRecording && (
          <div>
            <button title="Cancel recording" onClick={cancelRecording}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        )}
      </div>
      <div>
        {initRecording ? (
          <button
            title="Save recording"
            disabled={recordingSeconds === 0}
            onClick={saveRecording}
          >
            <FontAwesomeIcon icon={faSave} size="2x" />
          </button>
        ) : (
          <button title="Start recording" onClick={startRecording}>
            <FontAwesomeIcon icon={faMicrophone} size="2x" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Recorder;
