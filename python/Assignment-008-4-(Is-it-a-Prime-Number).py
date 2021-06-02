number = int(input("Number: "))
list1 = list(range(2, int(number**0.5)+1))
list2 = []
for i in list1:
  if number % i == 0:
    list2.append(i)
if number> 1 and len(list2)==0 or number==2 :
  print("{} is a prime number.".format(number))
else:
  print("{} is not a prime number.".format(number))