def leap_year():
  while True:  
    try:
      year = int(input("Please enter a year: "))
      if year < 0:
        raise Exception("Negative number...")
      else:
        break
    except Exception as e:
      print("Hata: ", e)

  if ((year%4==0) and not (year%100==0)) or (year%400==0):
    print(f"{year} is leap year.")
  else:
    print(f"{year} is not leap year.")


if __name__ == "__main__":
  leap_year()
