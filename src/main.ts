
import sourceMapSupport from 'source-map-support';
sourceMapSupport.install();

import {
  inkAppMain,
} from './lib/ink-app/ink-app-main';
import {
  timersTestMain,
} from './lib/timers-test/timers-test';

(async () => {
  try {
    await main();
  } catch(e) {
    console.error(e);
    throw e;
  }
})();

async function main() {
  // inkAppMain();
  await timersTestMain();
}
