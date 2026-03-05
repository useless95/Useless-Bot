# @worthless/react

React hooks and components for worthless bot. Render nothing, reactively.

## Installation

```bash
npm install @worthless/react react
```

## Hooks

### `useWorthless()`

Creates a worthless bot instance in your component.

```typescript
import { useWorthless } from '@worthless/react';

function MyComponent() {
  const worthless = useWorthless({
    mode: 'production'
  });

  return <div>Rendering nothing!</div>;
}
```

### `useNothing()`

A hook that returns nothing. Always.

```typescript
import { useNothing } from '@worthless/react';

function MyComponent() {
  const nothing = useNothing(); // undefined
  
  return null; // Render nothing
}
```

### `useWorthlessEffect(callback)`

Like `useEffect`, but does nothing.

```typescript
import { useVoidEffect } from '@worthless/react';

function MyComponent() {
  useVoidEffect(() => {
    // This runs, but accomplishes nothing
  });

  return null;
}
```

### `useVoidState()`

State management for nothing.

```typescript
import { useVoidState } from '@worthless/react';

function MyComponent() {
  const [value, setValue] = useVoidState(); 
  // value is always undefined, setValue does nothing

  return <button onClick={() => setValue(undefined)}>Do Nothing</button>;
}
```

### `useVoidCallback(callback)`

Memoizes a callback that does nothing.

```typescript
import { useVoidCallback } from '@worthless/react';

function MyComponent() {
  const handleClick = useVoidCallback(() => {
    // Do nothing, but memoized!
  });

  return <button onClick={handleClick}>Click me</button>;
}
```

### `useVoidMemo(factory)`

Memoizes nothing.

```typescript
import { useVoidMemo } from '@worthless/react';

function MyComponent() {
  const nothing = useVoidMemo(() => undefined);
  
  return null;
}
```

## Components

### `<WorthlessProvider>`

Provides worthless bot context to your app.

```typescript
import { WorthlessProvider } from '@worthless/react';

function App() {
  return (
    <WorthlessProvider config={{ mode: 'production' }}>
      <YourApp />
    </WorthlessProvider>
  );
}
```

### `<Void>`

A component that renders nothing.

```typescript
import { Void } from '@worthless/react';

function MyComponent() {
  return (
    <>
      <h1>Hello</h1>
      <Void /> {/* Renders nothing */}
      <p>World</p>
    </>
  );
}
```

### `<Nothing>`

Alias for `<Void>`, also renders nothing.

```typescript
import { Nothing } from '@worthless/react';

function MyComponent() {
  return <Nothing />;
}
```

## Context

### `useWorthlessContext()`

Access the worthless bot context from any component.

```typescript
import { useWorthlessContext } from '@worthless/react';

function MyComponent() {
  const { instance, config } = useWorthlessContext();
  
  return <div>Using worthless bot context</div>;
}
```

## Higher-Order Components

### `withVoid(Component)`

Wraps a component with worthless bot capabilities.

```typescript
import { withVoid } from '@worthless/react';

function MyComponent({ worthless }) {
  // Use worthless bot instance
  return <div>Nothing here</div>;
}

export default withVoid(MyComponent);
```

## Examples

### Complete Example

```typescript
import { WorthlessProvider, useWorthless, Void } from '@worthless/react';

function WorthlessApp() {
  const worthless = useWorthless({ debug: true });
  
  React.useEffect(() => {
    void.initialize();
  }, []);

  return (
    <div>
      <h1>My Void App</h1>
      <Void />
      <p>Successfully rendered nothing!</p>
    </div>
  );
}

function App() {
  return (
    <VoidProvider>
      <VoidApp />
    </VoidProvider>
  );
}
```

## TypeScript

Full TypeScript support included:

```typescript
import type { WorthlessHookOptions, WorthlessContextValue } from '@worthless/react';

const options: WorthlessHookOptions = {
  mode: 'production',
  debug: false
};
```

## License

MIT © The Void Team
