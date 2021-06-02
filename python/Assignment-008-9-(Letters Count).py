def letter_count():
    text = input("Please enter text: ").lower()
    count_letter = {}
    for i in set(text):
        count_letter[i] = text.count(i)
    print(count_letter)


if __name__ == "__main__":
    letter_count()