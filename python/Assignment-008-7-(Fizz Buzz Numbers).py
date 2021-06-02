def fizzbuzz():  
  liste = list(range(1,101))
  for i in liste:
    if i%15 == 0:
      liste[i-1] = "FizzBuzz"
    elif i%5 == 0:
      liste[i-1] = "Buzz"
    elif i%3 == 0:
      liste[i-1] = "Fizz"      

  return liste

for i in fizzbuzz():
  print(i)
