# Node.js Server Unresponsiveness

This repository demonstrates a common issue in Node.js where a server can become unresponsive due to a long-running synchronous operation within the request handler.  The example uses a `setTimeout` to simulate a slow process, but it illustrates the problem with any blocking operation.

## Bug

The `bug.js` file contains a simple HTTP server.  When a request is made, it waits for 5 seconds before sending a response.  If many requests come in, the server will not respond promptly, causing it to appear unresponsive.

## Solution

The `bugSolution.js` file demonstrates the solution.  The key is to avoid blocking operations in the main request handler by using asynchronous operations or offloading work to other processes (like using threads or worker threads).