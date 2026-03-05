# @worthless/cli

Command-line interface for worthless bot. Build nothing from the comfort of your terminal.

## Installation

```bash
npm install -g @worthless/cli
# or
yarn global add @worthless/cli
# or
pnpm add -g @worthless/cli
```

## Commands

### `worthless init`

Initialize a new worthless bot project in the current directory.

```bash
worthless init
worthless init --name my-project
worthless init --typescript
```

### `worthless dev`

Start the development server (which does nothing, but in watch mode).

```bash
worthless dev
worthless dev --port 3000
worthless dev --verbose
```

### `worthless build`

Build your project for production.

```bash
worthless build
worthless build --minify
worthless build --output dist
```

### `worthless test`

Run your test suite.

```bash
void test
void test --watch
void test --coverage
```

### `void lint`

Lint your codebase.

```bash
void lint
void lint --fix
```

### `void deploy`

Deploy your application (to the void).

```bash
void deploy
void deploy --environment production
void deploy --dry-run
```

### `void --version`

Display the current version.

```bash
void --version
```

### `void --help`

Display help information.

```bash
void --help
void init --help
```

## Configuration

Create a `void.config.js` file in your project root:

```javascript
export default {
  mode: 'production',
  plugins: [],
  output: 'dist',
};
```

## Examples

```bash
# Create a new project
mkdir my-void-project
cd my-void-project
void init

# Start development
void dev

# Build for production
void build

# Deploy
void deploy
```

## License

MIT © The Void Team
