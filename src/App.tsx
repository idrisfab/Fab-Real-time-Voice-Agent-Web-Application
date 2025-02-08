import React from 'react';
import { SettingsPanel } from './components/SettingsPanel';
import { AudioControls } from './components/AudioControls';
import { TranscriptionView } from './components/TranscriptionView';
import { Container } from '@mantine/core';

export default function App() {
  return (
    <Container size="xl">
      <div className="app-container">
        <header>
          <h1>Voice Agent</h1>
        </header>
        
        <main>
          <div className="left-panel">
            <SettingsPanel />
          </div>
          
          <div className="right-panel">
            <AudioControls />
            <TranscriptionView />
          </div>
        </main>
      </div>
    </Container>
  );
}
