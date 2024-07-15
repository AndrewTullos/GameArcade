from flask import Flask, jsonify
import random

word_list = ["greenish", "abruptly", "subway"]

@app.route('/get-char-count', methods=['GET'])
def get_char():
   word_picked = random.choice(word_list)
   char_count = len(word_picked)
   return jsonify({"char_count": char_count})

print(word_picked, char_count)

if __name__ == '__main__':
   app.run(debug=True)

