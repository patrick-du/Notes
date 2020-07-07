# Runtime in CS 116
#### O(1) - Constant Time
- Does not depend on input size
- Comparison operations: >, >=, <, <=, ==
- Value assignment, ex: x = 4
- For numbers:
    * Numeric operations: +, -, *, /, %, //
    * max, min
- For list L:
    * L[0], L[1], ..., len(L)
    * L.append(4)

#### O(n) - Linear Time
- Depends on input size
- For list L where len(L) == n
    * L[1:], max(L), L + L, sum(L), L.remove(0)
    * list(map (lambda x: x + 1, L))

#### O(n^2) - Quadratic Time
- Time proportional to square of size of the input
- Be careful of abstact functions: list(map (lambda k: list(range (k)), list(range (n))))

#### O(2^n) - Exponential Time
- As size of input increases by 1, the run time doubles

