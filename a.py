# Numeric
i = 42              # int
f = 3.14            # float
z = 2 + 3j          # complex

# Text
s = "hello"         # str

# Boolean
ok = True           # bool

# Sequence
lst = [1, 2, 3]     # list
tup = (1, 2, 3)     # tuple
rng = range(5)      # range

# Mapping
d = {"name": "Samir"}  # dict

# Set types
st = {1, 2, 3}      # set
fst = frozenset({1, 2, 3})  # frozenset

# Binary
b = b"abc"          # bytes
ba = bytearray(b"abc")  # bytearray
mv = memoryview(b"abc") # memoryview

# None type
n = None            # NoneType

values = [i, f, z, s, ok, lst, tup, rng, d, st, fst, b, ba, mv, n]
for v in values:
    print(v, "=>", type(v).__name__)
