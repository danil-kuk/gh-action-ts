import * as core from '@actions/core';
import { getInput, setOutput } from '@actions/core';

async function run() {
  try {
    const nameToGreet = getInput('who-to-greet');
    console.log(`Hello, ${nameToGreet}!`);
    const time = (new Date()).toTimeString();
    setOutput("time", time);
  } 
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
