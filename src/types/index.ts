export interface ApiKeys {
  deepgram: string;
  openai: string;
  anthropic?: string;
}

export interface VoiceConfig {
  language: string;
  speakingRate: number;
  voice: string;
  prompt: string;
}

export interface TranscriptionEntry {
  id: string;
  text: string;
  timestamp: number;
  speaker: 'user' | 'assistant';
}
