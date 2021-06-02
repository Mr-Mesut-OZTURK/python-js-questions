age = input("Are you a cigarette addict older than 75 years old?( 'Yes' or 'No'): ").title().strip()
chronic = input("Do you have a severe chronic disease?( 'Yes' or 'No'): ").title().strip()
immune = input("Is your immune system too weak?( 'Yes' or 'No'): ").title().strip()
print(age, chronic, immune)
risk = (age == "Yes") or (chronic == "Yes") or (immune == "Yes")

if risk:
    print("You are in risky group")
else:
    print("You are not in risky group")