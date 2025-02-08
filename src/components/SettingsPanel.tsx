import React from 'react';
import { TextInput, NumberInput, Select, Textarea, Stack } from '@mantine/core';
import { useStore } from '../store/useStore';

export function SettingsPanel() {
  const { apiKeys, voiceConfig, setApiKeys, setVoiceConfig } = useStore();

  return (
    <Stack className="settings-panel">
      <h2>API Configuration</h2>
      <TextInput
        label="Deepgram API Key"
        type="password"
        value={apiKeys.deepgram}
        onChange={(e) => setApiKeys({ deepgram: e.target.value })}
      />
      <TextInput
        label="OpenAI API Key"
        type="password"
        value={apiKeys.openai}
        onChange={(e) => setApiKeys({ openai: e.target.value })}
      />
      <TextInput
        label="Anthropic API Key (Optional)"
        type="password"
        value={apiKeys.anthropic}
        onChange={(e) => setApiKeys({ anthropic: e.target.value })}
      />

      <h2>Voice Configuration</h2>
      <Select
        label="Language"
        value={voiceConfig.language}
        onChange={(value) => setVoiceConfig({ language: value || 'en-US' })}
        data={[
          { value: 'en-US', label: 'English (US)' },
          { value: 'es-ES', label: 'Spanish (Spain)' },
          { value: 'fr-FR', label: 'French (France)' }
        ]}
      />
      <NumberInput
        label="Speaking Rate"
        value={voiceConfig.speakingRate}
        onChange={(value) => setVoiceConfig({ speakingRate: value || 1 })}
        min={0.5}
        max={2}
        step={0.1}
      />
      <Select
        label="Voice"
        value={voiceConfig.voice}
        onChange={(value) => setVoiceConfig({ voice: value || 'default' })}
        data={[
          { value: 'default', label: 'Default' },
          { value: 'feminine', label: 'Feminine' },
          { value: 'masculine', label: 'Masculine' }
        ]}
      />
      <Textarea
        label="Custom Prompt"
        value={voiceConfig.prompt}
        onChange={(e) => setVoiceConfig({ prompt: e.target.value })}
        placeholder="Enter custom prompt for the AI assistant..."
        minRows={3}
      />
    </Stack>
  );
}
