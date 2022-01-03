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
            "description": "",
            "dataInNames": [
                "num"
            ],
            "dataInSchema": {},
            "dataOutNames": [
                "baro"
            ],
            "dataOutSchema": {},
            "inputNames": [],
            "inputSchema": {},
            "source": [

                "export var baro:i32[] = [];",
                "export function response(text: string, status: i32):void {" +
                "var lines: string[] = text.split('\\n');"+
                    "baro = new Array<i32>(text.length)"+
                    "for(var i: i32 = 1; i< lines.length; i++) {" +
                "       var baroval:string = lines[i].split(',')[16];",
                "       var b : i32 = <i32> parseInt(baroval);",
                "       baro[i] = b;",
                "}",
                "}",
                "export function run():void {",
                "lib.httpRequest('response', 'https://dl.zuim.de/flight_data01.csv');" ,
                " }"
            ]
        },
        "Node2": {
            "type": "module",
            "name": "module2",
            "description": "",
            "dataInNames": [
                "baro"
            ],
            "dataInSchema": {},
            "dataOutNames": [
                "out"
            ],
            "dataOutSchema": {},
            "inputNames": [],
            "inputSchema": {},
            "source": [
                "export function run(baro: i32[]): f64 {" +
                "var avg:f64 = 0;",
                "for(var i: i32 = 1; i< baro.length; i++) {" +
                "if(baro[i]>0) {",
                "       avg += baro[i];" +
                "}}",
                "return avg/baro.length;",
                "}"
            ]
        }
    },
    "links": {
        "Node1": {
            "baro": {
                "Node2": "baro"
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
