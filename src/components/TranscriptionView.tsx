import React from 'react';
import { Paper, ScrollArea } from '@mantine/core';
import { useStore } from '../store/useStore';

export function TranscriptionView() {
  const { transcriptionHistory } = useStore();

  return (
    <Paper shadow="xs">
      <ScrollArea h={400} p="md">
        <div className="transcription-view">
          {transcriptionHistory.map((entry) => (
            <div
              key={entry.id}
              className={`transcription-entry ${entry.speaker}`}
            >
              <span className="timestamp">
                {new Date(entry.timestamp).toLocaleTimeString()}
              </span>
              <p>{entry.text}</p>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Paper>
  );
}
