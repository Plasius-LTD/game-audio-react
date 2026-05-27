export interface GameAudioPackageDescriptor {
  readonly packageName: string;
  readonly featureFlagId: string;
  readonly envPrefix: string;
  readonly summary: string;
}

export const GAME_AUDIO_REACT_PACKAGE = "@plasius/game-audio-react";
export const GAME_AUDIO_REACT_ENV_PREFIX = "GAME_AUDIO_REACT";
export const GAME_AUDIO_REACT_FEATURE_FLAG_ID = "game.audio.react-provider.enabled";
export const GAME_AUDIO_CONTROLS_CAPABILITY_ID = "game.audio.controls";
export const GAME_AUDIO_DIAGNOSTICS_CAPABILITY_ID = "game.audio.diagnostics";
export interface GameAudioReactIntegrationDescriptor { readonly providerName: string; readonly featureFlagId: string; readonly controlsCapabilityId: string; readonly diagnosticsCapabilityId: string; readonly requiresUserActivation: boolean; }
export const packageDescriptor: GameAudioPackageDescriptor = Object.freeze({ packageName: GAME_AUDIO_REACT_PACKAGE, featureFlagId: GAME_AUDIO_REACT_FEATURE_FLAG_ID, envPrefix: GAME_AUDIO_REACT_ENV_PREFIX, summary: "React integration scaffold for Plasius game audio runtime packages." });
export const gameAudioReactIntegration: GameAudioReactIntegrationDescriptor = Object.freeze({ providerName: "GameAudioProvider", featureFlagId: GAME_AUDIO_REACT_FEATURE_FLAG_ID, controlsCapabilityId: GAME_AUDIO_CONTROLS_CAPABILITY_ID, diagnosticsCapabilityId: GAME_AUDIO_DIAGNOSTICS_CAPABILITY_ID, requiresUserActivation: true });
export function isGameAudioDiagnosticsCapability(value: string): boolean { return value === GAME_AUDIO_DIAGNOSTICS_CAPABILITY_ID; }
