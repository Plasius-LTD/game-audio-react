import { describe, expect, it } from "vitest";

import { GAME_AUDIO_CONTROLS_CAPABILITY_ID, GAME_AUDIO_DIAGNOSTICS_CAPABILITY_ID, GAME_AUDIO_REACT_ENV_PREFIX, GAME_AUDIO_REACT_FEATURE_FLAG_ID, GAME_AUDIO_REACT_PACKAGE, gameAudioReactIntegration, isGameAudioDiagnosticsCapability, packageDescriptor } from "../src/index.js";

describe("@plasius/game-audio-react", () => {
  it("exports package metadata", () => {
    expect(packageDescriptor.packageName).toBe(GAME_AUDIO_REACT_PACKAGE);
    expect(packageDescriptor.featureFlagId).toBe(GAME_AUDIO_REACT_FEATURE_FLAG_ID);
    expect(packageDescriptor.envPrefix).toBe(GAME_AUDIO_REACT_ENV_PREFIX);
  });
  it("describes the provider and capability contract", () => {
    expect(gameAudioReactIntegration.providerName).toBe("GameAudioProvider");
    expect(gameAudioReactIntegration.featureFlagId).toBe(GAME_AUDIO_REACT_FEATURE_FLAG_ID);
    expect(gameAudioReactIntegration.controlsCapabilityId).toBe(GAME_AUDIO_CONTROLS_CAPABILITY_ID);
    expect(gameAudioReactIntegration.diagnosticsCapabilityId).toBe(GAME_AUDIO_DIAGNOSTICS_CAPABILITY_ID);
    expect(gameAudioReactIntegration.requiresUserActivation).toBe(true);
  });
  it("identifies diagnostics capability", () => {
    expect(isGameAudioDiagnosticsCapability(GAME_AUDIO_DIAGNOSTICS_CAPABILITY_ID)).toBe(true);
    expect(isGameAudioDiagnosticsCapability(GAME_AUDIO_CONTROLS_CAPABILITY_ID)).toBe(false);
  });
});
