def prime(lim):
  c = False
  prime = []
  for i in range(2, lim+1,):
    for j in range(2,i):
      if i%j == 0 :
        c = False
        break
      else:
        c = True
    if c or i == 2 :
      prime.append(i)
  return prime

limit = int(input("Please enter a number"))
print(prime(limit))
