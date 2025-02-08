import React from 'react';
import { Button, Group, Paper } from '@mantine/core';
import { useStore } from '../store/useStore';
import { AudioService } from '../services/audioService';

const audioService = new AudioService();

export function AudioControls() {
  const { isRecording, setIsRecording, setIsProcessing } = useStore();

  const handleStartRecording = async () => {
    try {
      await audioService.startRecording();
      setIsRecording(true);
    } catch (error) {
      console.error('Failed to start recording:', error);
    }
  };

  const handleStopRecording = async () => {
    try {
      setIsProcessing(true);
      const audioBlob = await audioService.stopRecording();
      setIsRecording(false);
      // Handle the audio blob (send to API, etc.)
    } catch (error) {
      console.error('Failed to stop recording:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Paper p="md" shadow="xs">
      <Group justify="center">
        <Button
          size="lg"
          color={isRecording ? 'red' : 'blue'}
          onClick={isRecording ? handleStopRecording : handleStartRecording}
        >
          {isRecording ? 'Stop Recording' : 'Start Recording'}
        </Button>
      </Group>
    </Paper>
  );
}
