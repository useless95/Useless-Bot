/**
 * Basic worthless bot Example
 * 
 * This example demonstrates the fundamental usage of worthless bot.
 * Watch as nothing happens, beautifully.
 */

import { createWorthlessBot } from '@worthless/core';
import { sleep, noop } from '@worthless/utils';

async function main() {
  console.log('🤖 Welcome to worthless bot!\n');

  // Create a new worthless bot instance
  console.log('Creating worthless bot instance...');
  const app = createWorthlessBot({
    mode: 'development',
    debug: true,
  });

  // Initialize
  console.log('Initializing...');
  await app.initialize();
  console.log(`Status: ${app.getStatus()}\n`);

  // Run the worthless bot
  console.log('Running worthless bot...');
  await app.run();

  // Get the result
  const result = app.getResult();
  console.log(`Result: ${result}`);
  console.log('(As expected, nothing!)\n');

  // Do some additional nothing
  console.log('Performing additional operations...');
  await sleep(500);
  noop();
  await sleep(500);

  console.log('✨ Success! You have successfully accomplished nothing.');
  console.log('🎉 You will own nothing and be happy.\n');

  // Clean up (also does nothing)
  await app.destroy();
  console.log('worthless bot destroyed. It was never there anyway.');
}

// Run the example
main().catch((error) => {
  console.error('Error in worthless bot:', error);
  process.exit(1);
});
