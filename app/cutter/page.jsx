"use client";
import { useRef, useState } from "react";
import {
  Text,
  Group,
  Button,
  rem,
  useMantineTheme,
  Title,
} from "@mantine/core";
import { Dropzone } from "@mantine/dropzone";
import { IconCloudUpload, IconX, IconDownload } from "@tabler/icons-react";
import classes from "./DropzoneButton.module.css";
import AudioEditor from "@/components/audio/AudioEditor";

export default function DropzoneButton() {
  const theme = useMantineTheme();
  const openRef = useRef(null);
  const [file, setFile] = useState(); // Changed to store a single file
  const [isEditorVisible, setIsEditorVisible] = useState(false);

  const handleDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const audioURL = URL.createObjectURL(acceptedFiles[0]);
      setFile(audioURL); // Store only the first file
    }

    setIsEditorVisible(true);
  };

  return (
    <div className={classes.wrapper}>
      {!isEditorVisible ? (
        <Dropzone
          openRef={openRef}
          onDrop={(files) => handleDrop(files)}
          className={classes.dropzone}
          radius="md"
          accept={["audio/mpeg"]}
          maxSize={30 * 1024 ** 2}
        >
          <div style={{ pointerEvents: "none" }}>
            <Group justify="center">
              <Dropzone.Accept>
                <IconDownload
                  style={{ width: rem(50), height: rem(50) }}
                  color={theme.colors.blue[6]}
                  stroke={1.5}
                />
              </Dropzone.Accept>
              <Dropzone.Reject>
                <IconX
                  style={{ width: rem(50), height: rem(50) }}
                  color={theme.colors.red[6]}
                  stroke={1.5}
                />
              </Dropzone.Reject>
              <Dropzone.Idle>
                <IconCloudUpload
                  style={{ width: rem(50), height: rem(50) }}
                  stroke={1.5}
                />
              </Dropzone.Idle>
            </Group>

            <Title size={"h1"} ta="center" fw={700} mt="xl">
              <Dropzone.Accept>Drop files here</Dropzone.Accept>
              <Dropzone.Reject>Invalid File</Dropzone.Reject>
              <Dropzone.Idle>Audio Cutter</Dropzone.Idle>
            </Title>
            <Title size={"h3"} ta="center" mt="xs" c="dimmed">
              Free editor to trim and cut any audio file online
            </Title>
          </div>
          <Button
            className={classes.control}
            size="md"
            radius="xl"
            onClick={() => openRef.current?.()}
          >
            Browse my files
          </Button>
        </Dropzone>
      ) : null}

      {file && isEditorVisible ? <AudioEditor audio={file} /> : null}
    </div>
  );
}
