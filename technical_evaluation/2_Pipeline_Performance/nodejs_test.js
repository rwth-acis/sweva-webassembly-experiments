var sweva = require('./app/core/core.js');

var manager = new sweva.ExecutionManager();



async function runTests() {
    console.log("Time per execution in milliseconds");
    for(var i = 0; i < 10; i++){
        await testPipeLine()
    }
}



async function testPipeLine() {
    var now = performance.now();
    manager.setup(pipeline);
    manager.onProgress(function (progress) {
        console.log(progress+"%");
    });
    let res = await manager.execute({
        "Node1": {
            "num": 8
        }
    }, {});

    console.log(performance.now() - now);
    console.log(res);
}

runTests();