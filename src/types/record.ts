import { Dispatch, SetStateAction } from "react";

export type RecorderState = {
  recordingMinutes: number;
  recordingSeconds: number;
  initRecording: boolean;
  mediaStream: MediaStream | null;
  mediaRecorder: MediaRecorder | null;
  audio: string | null;
};

export type TRecorder = {
  recorderState: RecorderState;
  handlers: {
    startRecording: () => void;
    cancelRecording: () => void;
    saveRecording: () => void;
  };
};

export type TRecordList = {
  audio: string | null;
};

export type Audio = {
  key: string;
  audio: string;
};
export type UseRecorder = {
  recorderState: Recorder;
  startRecording: () => void;
  cancelRecording: () => void;
  saveRecording: () => void;
};
export type Recorder = {
  recordingMinutes: number;
  recordingSeconds: number;
  initRecording: boolean;
  mediaStream: MediaStream | null;
  mediaRecorder: MediaRecorder | null;
  audio: string | null;
};
export type SetRecorder = Dispatch<SetStateAction<Recorder>>;
export type SetRecordings = Dispatch<SetStateAction<Audio[]>>;
export type Interval = null | number | ReturnType<typeof setInterval>;
export type AudioTrack = MediaStreamTrack;
export type MediaRecorderEvent = {
  data: Blob;
};