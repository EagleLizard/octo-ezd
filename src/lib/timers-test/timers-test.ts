
import {
  Timer,
} from '../util/timer';

const TIMER_WAIT_MS = 1000;

export async function timersTestMain() {
  let setTimeoutCallCount: number;
  let setTimeoutTimer: Timer;

  let setImmediateCallCount: number;
  let setImmediateTimer: Timer;

  setTimeoutCallCount = 0;
  setTimeoutTimer = Timer.start();

  await new Promise<void>((resolve) => {
    (function testTimeout() {
      let currMs: number;
      currMs = setTimeoutTimer.currentMs();
      setTimeoutCallCount++;
      if(currMs < TIMER_WAIT_MS) {
        setTimeout(testTimeout);
      } else {
        console.log('');
        console.log(`timeout currMs: ${currMs}`);
        console.log(`timeout callCount: ${setTimeoutCallCount}`);
        resolve();
      }
    })();
  });

  setImmediateCallCount = 0;
  setImmediateTimer = Timer.start();
  
  await new Promise<void>(resolve =>  {
    (function testImmediate() {
      let currMs: number;
      currMs = setImmediateTimer.currentMs();
      setImmediateCallCount++;
      if(currMs < TIMER_WAIT_MS) {
        setImmediate(testImmediate);
      } else {
        console.log('');
        console.log(`immediate currMs: ${currMs}`);
        console.log(`immediate callCount: ${setImmediateCallCount}`);
        resolve();
      }
    })();
  });

}
