```javascript
let num = 53453

let a = num.toString(2)
console.log(a)


output=>1101000011001101
explanation: 53453 (base 10) becomes 1101000011001101 (base 2)
1101000011001101₂ in decimal:
= 1×2^15 + 1×2^14 + 0×2^13 + 1×2^12 + 0×2^11 + 0×2^10 + 0×2^9 + 0×2^8 + 1×2^7 + 1×2^6 + 0×2^5 + 0×2^4 + 1×2^3 + 1×2^2 + 0×2^1 + 1×2^0

= 32768 + 16384 + 4096 + 128 + 64 + 8 + 4 + 1

= 53453

```
```bash
Yes, bit is the smallest unit.

Common larger units:

1 nibble = 4 bits
1 byte = 8 bits
1 KB = 1024 bytes
1 MB = 1024 KB
1 GB = 1024 MB
1 TB = 1024 GB

```

```bash
let num = 123.45678999;

let a = num.toString(5)
console.log(a)
console.log(typeof a)
```
### explanation
This output is expected.

## num.toString(5) means:
```bash
Convert 123.45678999 to a base-5 representation (not “5 decimal places”).
Return value is a string.
```
# So:
```bash
443.21202213243331123242 is the number written in base 5.
typeof a is string.
```

## which is
```bash
Exactly. For your base-5 result 443.21202213243331123242:

Integer part:
443₅ = 4×5² + 4×5¹ + 3×5⁰ = 100 + 20 + 3 = 123

Fraction part:
.212022...₅ = 2×5⁻¹ + 1×5⁻² + 2×5⁻³ + 0×5⁻⁴ + 2×5⁻⁵ + ...
= 2/5 + 1/25 + 2/125 + 0/625 + 2/3125 + ...
≈ 0.45678999

So overall:
443.21202213243331123242₅ ≈ 123.45678999₁₀.
```