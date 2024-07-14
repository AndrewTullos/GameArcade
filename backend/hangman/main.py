import random

word_list = ["greenish", "abruptly", "subway"]

word_picked = random.choice(word_list)
char_count = len(word_picked)


print(word_picked, char_count)
