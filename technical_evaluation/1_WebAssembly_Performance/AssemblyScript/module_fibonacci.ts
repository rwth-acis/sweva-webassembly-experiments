export function test(n: i32): i32 {

    for(var i: i32 = 0; i < 10000000; i++) {
        var a:i32 = 0, b:i32 = 1, ntmp:i32 = n
        while (--ntmp) {
            let t = a + b
            a = b
            b = t
        }
    }

    return b
}