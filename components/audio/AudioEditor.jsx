"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import classes from "./AudioEditor.module.css";
import {
  BsFillStopFill,
  BsFillPlayFill,
  BsSkipForward,
  BsSkipBackward,
} from "react-icons/bs";

export default function AudioEditor({ audio }) {
  const waveformRef = useRef(null);
  let wavesurfer;
  const [playPause, setPlayPause] = useState();
  const [duration, setDuration] = useState(0); // duration is used to set the default region of selection for trimming the audio

  useEffect(() => {
    wavesurfer = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "#34374B",
      progressColor: "#F90",
      url: audio,
      dragToSeek: true,
      width: "35vw",
      hideScrollbar: true,
      normalize: true,
      barGap: 1,
      height: 60,
      barHeight: 20,
      barRadius: 20,
      barWidth: 5,
    });

    wavesurfer.on("finish", () => {
      console.log("song finished");
    });

    wavesurfer.on("ready", () => {
      console.log("Waveform is ready");
    });
    return () => {
      wavesurfer.destroy();
    };
  }, []);
  const handleStop = () => {
    if (wavesurfer) {
      wavesurfer.stop();
    }
  };
  const handlePause = () => {
    if (wavesurfer) {
      wavesurfer.playPause();
    }
  };

  const handleSkipForward = () => {
    if (wavesurfer) {
      wavesurfer.skip(2);
    }
  };
  const handleSkipBack = () => {
    if (wavesurfer) {
      wavesurfer.skip(-2);
    }
  };

  return (
    <div className={classes.container} clas>
      <div ref={waveformRef} className={classes.wavesurferContainer} />
      <div className={classes.wavesurferControls}>
        <button onClick={handleSkipBack}>
          <BsSkipBackward />
        </button>
        <button onClick={handlePause}>
          <BsFillPlayFill />
        </button>
        <button onClick={handleStop}>
          <BsFillStopFill />
        </button>
        <button onClick={handleSkipForward}>
          <BsSkipForward />
        </button>
      </div>
    </div>
  );
}
