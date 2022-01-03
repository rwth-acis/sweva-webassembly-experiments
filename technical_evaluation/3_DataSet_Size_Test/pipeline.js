'use strict';


var pipeline = {
    "type": "composition",
    "name": "composition1",
    "dataInNames": [],
    "dataInSchema": {},
    "dataOutNames": [
        "result"
    ],
    "dataOutSchema": {},
    "inputNames": [],
    "inputSchema": {},
    /*"mapDataIn": [
    "function (data, composableName, composables, libs) {",
    "if (data.hasOwnProperty(composableName)) {",
    "return libs.get(data, composableName);",
    "}",
    "return null;",
    "}"
  ],
      "mapDataOut": [
    "function (output, libs) {",
    "return output;",
    "}"
  ],
      "mapInput": [
    "function (input, moduleName, modules, libs) {",
    "if (input.hasOwnProperty(moduleName)) {",
    "return libs.get(input, moduleName);",
    "}",
    "return null;",
    "}"
  ],*/
    "composables": {
        "Node1": {
            "type": "module",
            "name": "module1",
            "description": "A simple module template.",
            "dataInNames": [
                "num"
            ],
            "dataInSchema": {},
            "dataOutNames": [
                "out"
            ],
            "dataOutSchema": {},
            "inputNames": [],
            "inputSchema": {},
            "source": [

                "export var baro:i32[] = []",
                "export function response(text: string, status: i32) : void {" +
                "return;//lib.log('lines:'+text);"+
                "}",
                "export function run(): i32 {",
                "lib.httpRequest('response', 'http://localhost:5000/flight_data01.csv');" +
                "return 0;",
                " }"
            ]
        },
        "Node2": {
            "type": "module",
            "name": "module2",
            "description": "A simple module template.",
            "dataInNames": [
                "num"
            ],
            "dataInSchema": {},
            "dataOutNames": [
                "out"
            ],
            "dataOutSchema": {},
            "inputNames": [],
            "inputSchema": {},
            "source": [
                "export function run(num: i32): i32 {",
                "return num*2;",
                "}"
            ]
        }
    },
    "links": {
        "Node1": {
            "out": {
                "Node2": "num"
            }
        }
    },
    "controls": [
        {
            "label": "Section1",
            "controls": []
        }
    ],
    "visualization": ""
};
