# @worthless/types

TypeScript type definitions for worthless bot. Because even nothing deserves proper types.

## Installation

```bash
npm install @worthless/types
```

## Usage

```typescript
import type {
  Worthless,
  WorthlessResult,
  WorthlessCallback,
  Nothing,
  Nullish,
  Empty,
  Never
} from '@worthless/types';

// Use types in your code
const handleWorthless: WorthlessCallback = () => {
  // Do nothing
};

const result: WorthlessResult = undefined;
```

## Types

### Core Types

#### `Worthless`
Represents worthlessness (nothing).
```typescript
type Worthless = undefined;
```

#### `Nothing`
Union of null and undefined.
```typescript
type Nothing = null | undefined;
```

#### `Nullish`
Alias for Nothing.
```typescript
type Nullish = null | undefined;
```

#### `Empty`
Represents empty arrays and objects.
```typescript
type Empty = [] | {};
```

### Function Types

#### `VoidCallback`
A callback that returns nothing.
```typescript
type VoidCallback = () => void;
```

#### `VoidAsyncCallback`
An async callback that returns nothing.
```typescript
type VoidAsyncCallback = () => Promise<void>;
```

#### `VoidFunction<T>`
A function that takes T and returns void.
```typescript
type VoidFunction<T> = (arg: T) => void;
```

### Result Types

#### `VoidResult`
The result of a void operation (always undefined).
```typescript
type VoidResult = undefined;
```

#### `VoidPromise`
A promise that resolves to nothing.
```typescript
type VoidPromise = Promise<void>;
```

### Utility Types

#### `NonEmpty<T>`
Ensures T is not empty (ironically).
```typescript
type NonEmpty<T extends any[]> = T extends [] ? never : T;
```

#### `MaybeVoid<T>`
T or void.
```typescript
type MaybeVoid<T> = T | void;
```

#### `VoidOr<T>`
T or VoidResult.
```typescript
type VoidOr<T> = T | VoidResult;
```

## Advanced Types

### `DeepVoid<T>`
Recursively converts all properties to void.
```typescript
type DeepVoid<T> = {
  [K in keyof T]: void;
};
```

### `VoidTuple<N>`
Creates a tuple of N voids.
```typescript
type VoidTuple<N extends number> = void extends void ? void[] : never;
```

### `VoidRecord<K>`
Creates a record with void values.
```typescript
type VoidRecord<K extends string | number | symbol> = Record<K, void>;
```

## License

MIT © The Void Team
