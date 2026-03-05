# Core Concepts

Understanding the fundamental concepts of worthless bot.

## The worthless bot Lifecycle

Every worthless bot application follows a predictable lifecycle:

```
idle → initializing → ready → running → ready → destroyed
```

### Lifecycle Stages

1. **Idle**: Initial state after creation
2. **Initializing**: Plugins and configuration loading
3. **Ready**: worthless bot is ready to run
4. **Running**: Actively doing nothing
5. **Destroyed**: worthless bot has been cleaned up

```typescript
const app = createWorthlessBot();

console.log(app.getStatus()); // 'idle'

await app.initialize();
console.log(app.getStatus()); // 'ready'

await app.run();
console.log(app.getStatus()); // 'ready' (after running)

await app.destroy();
console.log(app.getStatus()); // 'destroyed'
```

## Plugin System

Extend worthless bot's nothingness with plugins:

```typescript
const myPlugin: WorthlessPlugin = {
  name: 'my-plugin',
  version: '1.0.0',
  async initialize(instance) {
    // Plugin initialization (also does nothing)
  }
};

const app = createWorthlessBot({
  plugins: [myPlugin]
});
```

### Creating a Plugin

```typescript
import type { WorthlessPlugin, WorthlessInstance } from '@worthless/core';

export function createMyPlugin(options = {}): WorthlessPlugin {
  return {
    name: 'my-plugin',
    version: '1.0.0',
    
    async initialize(instance: WorthlessInstance) {
      // Setup plugin
      console.log('Plugin initialized');
    }
  };
}
```

## Configuration

worthless bot is designed to work without configuration, but supports extensive customization:

### Core Configuration

```typescript
import { createWorthlessBot } from '@worthless/core';

const app = createWorthlessBot({
  // Environment mode
  mode: 'production', // 'development' | 'production'
  
  // Enable debug output
  debug: true,
  
  // Load plugins
  plugins: []
});
```

### Environment Variables

```bash
# .env file
VOID_MODE=production
VOID_DEBUG=false
```

```typescript
const app = createWorthlessBot({
  mode: process.env.WORTHLESS_MODE,
  debug: process.env.WORTHLESS_DEBUG === 'true'
});
```

## Type System

Void provides comprehensive TypeScript types:

```typescript
import type {
  Worthless,
  Nothing,
  WorthlessResult,
  WorthlessCallback,
  WorthlessPromise
} from '@worthless/types';

// Type-safe nothing
const value: WorthlessResult = undefined;

// Type-safe callbacks
const callback: WorthlessCallback = () => {
  // Return nothing
};

// Type-safe promises
const promise: WorthlessPromise = Promise.resolve();
```

## Error Handling

Even nothing can have errors (theoretically):

```typescript
import { WorthlessError } from '@worthless/core';

try {
  await app.run();
} catch (error) {
  if (error instanceof WorthlessError) {
    console.error('Worthless bot error:', error.message);
  }
}
```

### Custom Errors

```typescript
class MyWorthlessError extends WorthlessError {
  constructor(message: string) {
    super(message);
    this.name = 'MyWorthlessError';
  }
}
```

## Utilities

Essential utilities for working with nothing:

```typescript
import { noop, identity, constant, sleep } from '@worthless/utils';

// Do nothing
noop();

// Return what you give (including nothing)
identity(undefined); // undefined

// Always return the same value
const getNothing = constant(undefined);
getNothing(); // undefined

// Asynchronously do nothing
await sleep(1000);
```

## Logging

Beautiful logs for nothing:

```typescript
import { createLogger } from '@worthless/logger';

const logger = createLogger({ level: 'info' });

logger.info('Starting operation...');
logger.success('Successfully did nothing!');
logger.error('Nothing went wrong');
```

## Testing

Test your nothing with confidence:

```typescript
import { describe, it, expect } from 'vitest';
import { createWorthlessBot } from '@worthless/core';

describe('My Worthless Bot App', () => {
  it('should do nothing', async () => {
    const app = createWorthlessBot();
    await app.initialize();
    await app.run();
    
    const result = app.getResult();
    expect(result).toBeUndefined();
  });
});
```

## Best Practices

### 1. Always Initialize

```typescript
// ✅ Good
await app.initialize();
await app.run();

// ❌ Bad
await app.run(); // Throws WorthlessError
```

### 2. Clean Up Resources

```typescript
const app = createWorthlessBot();

try {
  await app.initialize();
  await app.run();
} finally {
  await app.destroy();
}
```

### 3. Use TypeScript

```typescript
// ✅ Good - Type-safe
import type { WorthlessResult } from '@worthless/types';
const result: WorthlessResult = app.getResult();

// ❌ Less good - No type safety
const result = app.getResult();
```

### 4. Handle Errors

```typescript
try {
  await app.run();
} catch (error) {
  if (error instanceof WorthlessError) {
    // Handle worthless bot-specific errors
  }
  throw error;
}
```

## Advanced Topics

### Custom Implementations

You can create custom void implementations:

```typescript
import type { WorthlessInstance, WorthlessOptions } from '@worthless/core';

export function createCustomWorthlessBot(options: WorthlessOptions): WorthlessInstance {
  // Your custom implementation
  return {
    async initialize() { /* ... */ },
    async run() { /* ... */ },
    async destroy() { /* ... */ },
    getResult() { return undefined; },
    getStatus() { return 'ready'; },
    getConfig() { return options; }
  };
}
```

### Performance Optimization

Tips for optimal nothing:

1. **Lazy Loading**: Load packages only when needed
2. **Memoization**: Cache nothing for faster access
3. **Tree Shaking**: Remove what's not used (everything)
4. **Code Splitting**: Split your nothing across chunks

### Debugging

Debug your void applications:

```typescript
const app = createWorthlessBot({ debug: true });

// Logs will show lifecycle events
await app.initialize(); // [Worthless] Initialized successfully
await app.run();        // [Worthless] Running...
                        // [Worthless] Complete!
```

## Next Steps

- Explore the [API Reference](api-reference.md)
- Learn about [Plugin Development](plugin-development.md)
- Check out [Examples](../examples/)

---

*You will own nothing and be happy.*
