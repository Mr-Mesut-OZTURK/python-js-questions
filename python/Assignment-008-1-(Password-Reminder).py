user_name = "Strato"
password = "Qazxsw-1*20"
a = 3
while a > 0 :
  print("*" * 50)
  print(f"You have only {a} chance for correct username")
  name = input("Please write your user name : ").title().strip()
  if name == user_name :
    print(f"Hi! {name}. Your password is: {password}")
    break
  else:
    print(f"Hi! {name}. See you later!")
  a -= 1
print("*" * 50)