from flask import Flask, jsonify
import random

app = Flask(__name__)

word_list = ["greenish", "abruptly", "subway"]

@app.route('/get-char-count', methods=['GET'])
def get_char_count():
      word_picked = random.choice(word_list)
      char_count = len(word_picked)
      return jsonify({"char_count": char_count})

if __name__ == '__main__':
      app.run(debug=True)
