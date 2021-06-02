x = input("")
a = list(x)
c = 0

for i in a:
    c += int(i)**len(a)
    
if c == int(x):
    print("Amstrong number")
else:
    print("hata")