//compiled using gcc fibonacci.c -out  (gcc version 10.2.1) - measure with the "time" command
#include <stdio.h>

int main(int argc, char **argv) {
    unsigned long long int sum = 0;
    for(long long i2 =0; i2 < 10000000;i2++){
        unsigned long long int i, n=40, t1 = 0, t2 = 1;
        unsigned long long int nextTerm = t1 + t2;
        for (i = 1; i <= n; ++i) {
            t1 = t2;
            t2 = nextTerm;
            nextTerm = t1 + t2;
        }
        sum += nextTerm;
    }

    printf("%d", sum);
    return 0;
}
