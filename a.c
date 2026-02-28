#include <stdio.h>
#include <stdbool.h>
#include <stdint.h>
#include <inttypes.h>

int main(void) {
    // Integer types
    char c = 'A';
    signed char scv = -10;
    unsigned char uc = 250;

    short s = -300;
    unsigned short us = 60000;

    int i = -1000;
    unsigned int ui = 1000U;

    long l = 100000L;
    unsigned long ul = 100000UL;

    long long ll = 9000000000LL;
    unsigned long long ull = 9000000000ULL;

    // Fixed-width integers
    int8_t i8 = -8;
    uint32_t u32 = 4000000000U;

    // Floating-point
    float f = 3.14f;
    double d = 3.1415926535;
    long double ld = 3.1415926535L;

    // Boolean
    bool ok = true;

    // Other common types
    char str[] = "Hello";   // char array (string)
    int *ptr = &i;          // pointer

    printf("---------------------------------------------------------------\n");
    printf("%-12s | %-22s | %-4s | %s\n", "Variable", "C Type", "Size", "Value");
    printf("---------------------------------------------------------------\n");

    printf("%-12s | %-22s | %4zu | '%c'\n", "c", "char", sizeof(c), c);
    printf("%-12s | %-22s | %4zu | %hhd\n", "scv", "signed char", sizeof(scv), scv);
    printf("%-12s | %-22s | %4zu | %hhu\n", "uc", "unsigned char", sizeof(uc), uc);
    printf("%-12s | %-22s | %4zu | %hd\n", "s", "short", sizeof(s), s);
    printf("%-12s | %-22s | %4zu | %hu\n", "us", "unsigned short", sizeof(us), us);
    printf("%-12s | %-22s | %4zu | %d\n", "i", "int", sizeof(i), i);
    printf("%-12s | %-22s | %4zu | %u\n", "ui", "unsigned int", sizeof(ui), ui);
    printf("%-12s | %-22s | %4zu | %ld\n", "l", "long", sizeof(l), l);
    printf("%-12s | %-22s | %4zu | %lu\n", "ul", "unsigned long", sizeof(ul), ul);
    printf("%-12s | %-22s | %4zu | %lld\n", "ll", "long long", sizeof(ll), ll);
    printf("%-12s | %-22s | %4zu | %llu\n", "ull", "unsigned long long", sizeof(ull), ull);
    printf("%-12s | %-22s | %4zu | %" PRId8 "\n", "i8", "int8_t", sizeof(i8), i8);
    printf("%-12s | %-22s | %4zu | %" PRIu32 "\n", "u32", "uint32_t", sizeof(u32), u32);
    printf("%-12s | %-22s | %4zu | %.2f\n", "f", "float", sizeof(f), f);
    printf("%-12s | %-22s | %4zu | %.10f\n", "d", "double", sizeof(d), d);
    printf("%-12s | %-22s | %4zu | %.10Lf\n", "ld", "long double", sizeof(ld), ld);
    printf("%-12s | %-22s | %4zu | %s\n", "ok", "bool", sizeof(ok), ok ? "true" : "false");
    printf("%-12s | %-22s | %4zu | \"%s\"\n", "str", "char[]", sizeof(str), str);
    printf("%-12s | %-22s | %4zu | %p -> %d\n", "ptr", "int *", sizeof(ptr), (void*)ptr, *ptr);

    printf("---------------------------------------------------------------\n");

    return 0;
}
