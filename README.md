# sweva-webassembly-experiments
This repository is used to explore different strategies of data transfer between WebAssembly processing nodes in SWEVA, by testing different WebAssembly compilers/interpreters as well as performance between different implementations.

### Running the Tests:
In each of the sub-folders run the following, to download the dependencies and start a webserver:

- npm install

- npm start

### Test Overview:
- assemblyscript_with_as-bind:

  Compiles with AssemblyScript and uses as-bind to interface with the exported functions

- assemblyscript_with_loader:

  Compiles with AssemblyScript and uses the AssemblyScript loader to interface with the exported functions

- pyodide:

  Runs the python interpreter pyodide in WebAssembly and executes the test files

### Tested functionality:
Each test runs three functions/snippets:
- The Fibonacci sequence with an int parameter for the steps
- A function with string parameter and string output (a simple substring)
- A function receiving a string array as parameter and returning a string array

### Test output:
For each of the three functions the compile time (except for pyodide, as it doesn't compile) and the execution time is printed.