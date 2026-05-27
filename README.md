# @plasius/game-audio-react

[![npm version](https://img.shields.io/npm/v/%40plasius%2Fgame-audio-react.svg)](https://www.npmjs.com/package/@plasius/game-audio-react)
[![Build Status](https://img.shields.io/github/actions/workflow/status/Plasius-LTD/game-audio-react/ci.yml?branch=main&label=build&style=flat)](https://github.com/Plasius-LTD/game-audio-react/actions/workflows/ci.yml)
[![coverage](https://img.shields.io/codecov/c/github/Plasius-LTD/game-audio-react)](https://codecov.io/gh/Plasius-LTD/game-audio-react)
[![License](https://img.shields.io/github/license/Plasius-LTD/game-audio-react)](./LICENSE)
[![Code of Conduct](https://img.shields.io/badge/code%20of%20conduct-yes-blue.svg)](./CODE_OF_CONDUCT.md)
[![Security Policy](https://img.shields.io/badge/security%20policy-yes-orange.svg)](./SECURITY.md)
[![Changelog](https://img.shields.io/badge/changelog-md-blue.svg)](./CHANGELOG.md)

React integration scaffold for Plasius game audio runtime packages.

Apache-2.0. ESM + CJS builds. TypeScript types included.

## Installation

```bash
npm install @plasius/game-audio-react
```

## Scope

This repository is part of the Plasius in-game audio package suite.

It owns:

- React provider and hook contract descriptors
- listener pose and emitter registration integration points
- caption fallback and preference control metadata
- Player System cue and diagnostic integration boundary

It does not own game-world authority, speech provider credentials, raw TTS generation, or product-specific feature-flag evaluation.

## Feature Flag

- `game.audio.react-provider.enabled`

## Usage

```ts
import {
  packageDescriptor,
  GAME_AUDIO_REACT_PACKAGE,
  GAME_AUDIO_REACT_FEATURE_FLAG_ID,
} from "@plasius/game-audio-react";

console.log(packageDescriptor.packageName === GAME_AUDIO_REACT_PACKAGE);
console.log(packageDescriptor.featureFlagId === GAME_AUDIO_REACT_FEATURE_FLAG_ID);
```

## Development

```bash
npm install
npm run build
npm test
npm run test:coverage
npm run pack:check
```

## Governance

- Architecture decisions: [docs/adrs](./docs/adrs)
- Security policy: [SECURITY.md](./SECURITY.md)
- Code of conduct: [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md)
- CLA and legal docs: [legal](./legal)

## License

Apache-2.0
