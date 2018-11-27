The drawing below gives an idea of how to cut a given "true" rectangle into
squares ("true" rectangle meaning that the two dimensions are different).

![](http://i.imgur.com/lk5vJ7sm.jpg)

Can you translate this drawing into an algorithm?

You will be given two dimensions

1. a positive integer length (parameter named `lng`)
2. a positive integer width (parameter named `wdth`)  
You will return an array or a string (depending on the language; Shell bash and
Fortran return a string) with the size of each of the squares.

```
sqInRect(5, 3) should return [3, 2, 1, 1]
sqInRect(3, 5) should return [3, 2, 1, 1]
or (Haskell)
squaresInRect  5  3 `shouldBe` Just [3,2,1,1]
squaresInRect  3  5 `shouldBe` Just [3,2,1,1]
or (Fsharp)
squaresInRect  5  3 should return Some [3,2,1,1]
squaresInRect  3  5 should return Some [3,2,1,1]
or (Swift)
squaresInRect  5  3 should return [3,2,1,1] as optional
squaresInRect  3  5 should return [3,2,1,1] as optional
or (Cpp)
sqInRect(5, 3) should return {3, 2, 1, 1}
sqInRect(3, 5) should return {3, 2, 1, 1}
(C)
C returns a structure, see the "Solution" and "Examples" tabs.
Your result and the reference test solution are compared by strings.
```
