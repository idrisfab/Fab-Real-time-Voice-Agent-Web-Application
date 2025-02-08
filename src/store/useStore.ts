import { create } from 'zustand';
import { ApiKeys, VoiceConfig, TranscriptionEntry } from '../types';

interface State {
  apiKeys: ApiKeys;
  voiceConfig: VoiceConfig;
  transcriptionHistory: TranscriptionEntry[];
  isRecording: boolean;
  isProcessing: boolean;
  connectionStatus: 'connected' | 'disconnected' | 'error';
  setApiKeys: (keys: Partial<ApiKeys>) => void;
  setVoiceConfig: (config: Partial<VoiceConfig>) => void;
  addTranscription: (entry: TranscriptionEntry) => void;
  setIsRecording: (status: boolean) => void;
  setIsProcessing: (status: boolean) => void;
  setConnectionStatus: (status: State['connectionStatus']) => void;
}

export const useStore = create<State>((set) => ({
  apiKeys: {
    deepgram: '',
    openai: '',
    anthropic: '',
  },
  voiceConfig: {
    language: 'en-US',
    speakingRate: 1,
    voice: 'default',
    prompt: 'You are a helpful assistant',
  },
  transcriptionHistory: [],
  isRecording: false,
  isProcessing: false,
  connectionStatus: 'disconnected',
  
  setApiKeys: (keys) => set((state) => ({
    apiKeys: { ...state.apiKeys, ...keys }
  })),
  
  setVoiceConfig: (config) => set((state) => ({
    voiceConfig: { ...state.voiceConfig, ...config }
  })),
  
  addTranscription: (entry) => set((state) => ({
    transcriptionHistory: [...state.transcriptionHistory, entry]
  })),
  
  setIsRecording: (status) => set({ isRecording: status }),
  setIsProcessing: (status) => set({ isProcessing: status }),
  setConnectionStatus: (status) => set({ connectionStatus: status }),
}));
