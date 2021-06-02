	
def fibonacci(min, max):
  fibonacci = []
  a = min
  while a <= max:
    fibonacci.append(a)
    if len(fibonacci) < 2:
      a += a
    else:
      a = fibonacci[-1] + fibonacci[-2]
  return fibonacci
print(fibonacci(1,55))
