/**
 * @worthless/core - Core framework functionality
 * 
 * The heart of worthless bot. Everything starts here, and ends here.
 * Which is to say, it starts and ends with nothing.
 */

/**
 * Configuration options for creating a worthless bot instance
 */
export interface WorthlessOptions {
  /** The mode to run in */
  mode?: 'development' | 'production';
  /** Enable debug logging */
  debug?: boolean;
  /** Plugins to load */
  plugins?: WorthlessPlugin[];
}

/**
 * A worthless bot plugin interface
 */
export interface WorthlessPlugin {
  name: string;
  version: string;
  initialize: (instance: WorthlessInstance) => Promise<void> | void;
}

/**
 * The worthless bot instance interface
 */
export interface WorthlessInstance {
  /** Initialize the worthless bot */
  initialize: () => Promise<void>;
  /** Run the worthless bot */
  run: () => Promise<void>;
  /** Destroy the worthless bot */
  destroy: () => Promise<void>;
  /** Get the result of running the worthless bot */
  getResult: () => undefined;
  /** Get the current status */
  getStatus: () => 'idle' | 'initializing' | 'ready' | 'running' | 'destroyed';
  /** Get the configuration */
  getConfig: () => WorthlessOptions;
}

/**
 * Base error class for worthless bot-related errors
 */
export class WorthlessError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'WorthlessError';
    // You will own nothing and be happy
  }
}

/**
 * Creates a new worthless bot instance
 * 
 * @param options - Configuration options
 * @returns A new WorthlessInstance
 * 
 * @example
 * ```typescript
 * const app = createWorthlessBot({ mode: 'production' });
 * await app.initialize();
 * await app.run();
 * ```
 */
export function createWorthlessBot(options: WorthlessOptions = {}): WorthlessInstance {
  const config: WorthlessOptions = {
    mode: options.mode ?? 'development',
    debug: options.debug ?? false,
    plugins: options.plugins ?? [],
  };

  let status: WorthlessInstance['getStatus'] extends () => infer R ? R : never = 'idle';

  return {
    async initialize() {
      status = 'initializing';
      
      // Simulate some initialization work
      await new Promise(resolve => setTimeout(resolve, 10));
      
      // Initialize plugins (they also do nothing)
      for (const plugin of config.plugins ?? []) {
        await plugin.initialize(this);
      }
      
      status = 'ready';
      
      if (config.debug) {
        console.log('[worthless bot] Initialized successfully');
      }
    },

    async run() {
      if (status !== 'ready') {
        throw new WorthlessError('worthless bot must be initialized before running');
      }
      
      status = 'running';
      
      // Simulate running
      await new Promise(resolve => setTimeout(resolve, 10));
      
      if (config.debug) {
        console.log('[worthless bot] Running...');
        console.log('[worthless bot] Complete!');
      }
      
      status = 'ready';
    },

    async destroy() {
      status = 'destroyed';
      
      if (config.debug) {
        console.log('[worthless bot] Destroyed');
      }
    },

    getResult() {
      return undefined;
    },

    getStatus() {
      return status;
    },

    getConfig() {
      return { ...config };
    },
  };
}

/**
 * Checks if a value is a worthless bot instance
 * 
 * @param value - The value to check
 * @returns True if the value is a WorthlessInstance
 */
export function isWorthless(value: unknown): value is WorthlessInstance {
  return (
    typeof value === 'object' &&
    value !== null &&
    'initialize' in value &&
    'run' in value &&
    'getResult' in value
  );
}

/**
 * Helper function that does nothing, asynchronously
 * 
 * @returns A promise that resolves to nothing
 */
export async function doNothing(): Promise<void> {
  // Doing nothing takes time, apparently
  await new Promise(resolve => setTimeout(resolve, 1));
}

/**
 * Helper function that returns nothing
 * 
 * @returns Nothing
 */
export function getNothing(): undefined {
  return undefined;
}

/**
 * Helper function that checks if something is nothing
 * 
 * @param value - The value to check
 * @returns True if the value is nothing
 */
export function isNothing(value: unknown): value is undefined | null {
  return value === undefined || value === null;
}
