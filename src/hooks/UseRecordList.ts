import { useState, useEffect } from "react";
import { deleteAudio } from "../handlers/record-list";
import { Audio } from "../types/record";
import generateKey from "../utils/utils";

export default function UseRecordList(audio: string | null) {
  const [recordings, setRecordings] = useState<Audio[]>([]);

  useEffect(() => {
    if (audio)
      setRecordings((prevState: Audio[]) => {
        return [...prevState, { key: generateKey(), audio }];
      });
  }, [audio]);

  return {
    recordings,
    deleteAudio: (audioKey: string) => deleteAudio(audioKey, setRecordings),
  };
}
