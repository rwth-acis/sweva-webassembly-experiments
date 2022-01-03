var sweva = require('./app/core/core.js');

var manager = new sweva.ExecutionManager();


let tsModule2 = {
    type: 'module',
    name: 'substr',
    source: [
        "export var testvar1:i8 = 0;",
        "export var testvar8 : i8[] = [1,2,3];",
        "export var testvar32: i32[] = [1,2,300];",
        "export var testvar3 :string[][] = [[\"a\",\"b\",\"C\"]];",
        "export function z(a: i32): i32 {",
        "return 1; }\n",
        "export function run(pos: i32,b: string[]): string {",
        "    testvar1 = 3",
        "    testvar8.push(5)",
        "    return b[pos];",
        "  }"]
};

var res =  sweva.runners.typescript.exec(tsModule2, {pos: 3, b: ["a1", "b2", "b3", "b4"]}, {});
res.then(r => console.log(r));

