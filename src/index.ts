import fetch from 'node-fetch';
import * as core from '@actions/core';
import { getInput, setOutput } from '@actions/core';

async function run() {
  try {
    greeting()
    await httpRequest();
    getTime()
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

function greeting() {
  const nameToGreet = getInput('who-to-greet');
  console.log(`Hello, ${nameToGreet}!`);
  console.log(process.env.MY_VAR);
}

async function httpRequest() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const json = await response.json();
  console.log('Http reques example', json)
}

function getTime() {
  const time = (new Date()).toTimeString();
  setOutput("time", time);
}

run()
