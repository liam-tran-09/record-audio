import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import { TRecordList } from "../types/record";
import UseRecordList from "../hooks/UseRecordList";

const RecordList = ({ audio }: TRecordList) => {
  const { recordings, deleteAudio } = UseRecordList(audio);

  return (
    <div>
      {recordings.length > 0 ? (
        <>
          <h1>Your recordings</h1>
          <div>
            {recordings.map((record) => (
              <div key={record.key} style={{display: 'flex', justifyContent: 'center'}}>
                <audio controls src={record.audio} />
                <div style={{paddingTop: '12px', paddingLeft: '12px'}}>
                  <button
                    title="Delete this audio"
                    onClick={() => deleteAudio(record.key)}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div>
          <FontAwesomeIcon
            icon={faExclamationCircle}
            size="2x"
            color="#f2ea02"
          />
          <span style={{marginLeft: "5px"}}>You don't have records</span>
        </div>
      )}
    </div>
  );
};

export default RecordList;
