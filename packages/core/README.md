# @worthless/core

The core framework functionality for worthless bot. This package provides the fundamental building blocks for creating nothing.

## Installation

```bash
npm install @worthless/core
# or
yarn add @worthless/core
# or
pnpm add @worthless/core
```

## Usage

```typescript
import { createWorthlessBot, WorthlessOptions } from '@worthless/core';

// Create a new worthless bot instance
const app = createWorthlessBot({
  mode: 'production',
  debug: false
});

// Initialize worthless bot
await app.initialize();

// Run worthless bot
await app.run();

// Get the result (spoiler: it's nothing)
const result = app.getResult();
console.log(result); // undefined
```

## API

### `createWorthlessBot(options?): WorthlessInstance`

Creates a new worthless bot instance with optional configuration.

#### Options

- `mode` - The mode to run in (`'development'` | `'production'`)
- `debug` - Enable debug logging (default: `false`)
- `plugins` - Array of plugins to load

#### Returns

A `VoidInstance` with the following methods:

- `initialize()` - Initializes the void (does nothing, but asynchronously)
- `run()` - Runs the void (also does nothing)
- `destroy()` - Destroys the void (nothing was there anyway)
- `getResult()` - Gets the result (always `undefined`)
- `getStatus()` - Gets the current status (always `'ready'`)

### `isWorthless(value): boolean`

Checks if a value is a worthless bot instance.

```typescript
import { createWorthlessBot, isWorthless } from '@worthless/core';

const app = createWorthlessBot();
console.log(isWorthless(app)); // true
console.log(isWorthless({})); // false
```

### `WorthlessError`

The base error class for all worthless bot-related errors. Useful for error handling in your nothing.

```typescript
import { WorthlessError } from '@worthless/core';

try {
  // Your code that does nothing
} catch (error) {
  if (error instanceof WorthlessError) {
    // Handle worthless bot-specific errors
  }
}
```

## Examples

### Basic Example

```typescript
import { createWorthlessBot } from '@worthless/core';

async function main() {
  const app = createWorthlessBot();
  await app.initialize();
  await app.run();
  
  console.log('Successfully did nothing!');
}

main();
```

### With Options

```typescript
import { createWorthlessBot } from '@worthless/core';

const app = createWorthlessBot({
  mode: 'production',
  debug: true,
  plugins: []
});

await app.initialize();
console.log(app.getStatus()); // 'ready'
```

## License

MIT © The Void Team
