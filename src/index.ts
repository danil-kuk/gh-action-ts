import * as core from '@actions/core';
import { getInput, setOutput } from '@actions/core';
import fetch from 'node-fetch';

async function run() {
  try {
    const nameToGreet = getInput('who-to-greet');
    console.log(`Hello, ${nameToGreet}!`);
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const json = await response.json();
    console.log('Http reques example', json)
    const time = (new Date()).toTimeString();
    setOutput("time", time);
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
