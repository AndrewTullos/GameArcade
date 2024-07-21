from flask import Flask, jsonify, request
from flask_cors import CORS  
import random

app = Flask(__name__)
CORS(app)

# To-do change words to pull from chat gpt
word_list = ["roasted", "roasted", "roasted"]
word_picked = ""
guessed_letters = []
max_attempts = 6
attempts_left = max_attempts

def reset_game():
      global word_picked, guessed_letters, attempts_left
      word_picked = random.choice(word_list)
      guessed_letters = []
      attempts_left = max_attempts

# Get route - sending json data for SVG
@app.route('/get-char-count', methods=['GET'])
def get_char():
      reset_game()
      char_count = len(word_picked)
      print(word_picked, char_count)
      return jsonify({"char_count": char_count})

# Post route - check the submitted letter
@app.route('/post-check-letter', methods=['POST'])
def check_letter():
      global guessed_letters, attempts_left
      data = request.get_json()
      selected_key = data.get('selectedKey')

      if not selected_key or len(selected_key) != 1 or not selected_key.isalpha():
         return jsonify({"error": "Invalid input"}), 400

      if selected_key in word_picked and selected_key not in guessed_letters:
         guessed_letters.append(selected_key)
         correct = True
      else:
         attempts_left -= 1
         correct = False

      game_state = {
         "correct": correct,
         "guessed_letters": guessed_letters,
         "attempts_left": attempts_left
      }

      return jsonify(game_state)

if __name__ == '__main__':
   app.run(debug=True)
