from flask import Flask, jsonify, request
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)  # This allows all origins by default

# To-do change words to pull from chat gpt
word_list = ["ROASTED", "TOASTED", "COASTED"]
word_picked = ""
correct_letters = []
incorrect_letters = []
max_attempts = 6
attempts_left = max_attempts

# GAME RESET
def reset_game():
   global word_picked, correct_letters, incorrect_letters, attempts_left
   word_picked = random.choice(word_list)
   correct_letters = []
   incorrect_letters = []
   attempts_left = max_attempts

# RENDER HANGMAN SPACES
@app.route('/get-char-count', methods=['GET'])
def get_char():
   reset_game()
   char_count = len(word_picked)
   print(word_picked, char_count)
   return jsonify({"char_count": char_count})

# CHECK LETTERS SUBMITTED
@app.route('/post-check-letter', methods=['POST'])
def check_letter():
   global correct_letters, incorrect_letters, attempts_left, word_picked
   data = request.get_json()
   selected_key = data.get('selectedKey')

   if not selected_key or len(selected_key) != 1 or not selected_key.isalpha():
      return jsonify({"error": "Invalid input"}), 400

   if selected_key in correct_letters or selected_key in incorrect_letters:
      return jsonify({
            "error": "Letter already guessed",
            "word_picked": word_picked,
            "attempts_left": attempts_left,
            "correct": False,
            "correct_letters": correct_letters,
            "incorrect_letters": incorrect_letters
      })

   if selected_key in word_picked:
      correct_letters.append(selected_key.upper())
      correct = True
   else:
      incorrect_letters.append(selected_key.upper())
      attempts_left -= 1
      correct = False

   game_state = {
      "correct": correct,
      "correct_letters": correct_letters,
      "incorrect_letters": incorrect_letters,
      "attempts_left": attempts_left,
      "word_picked": word_picked
   }

   return jsonify(game_state)

if __name__ == '__main__':
   app.run(debug=True)
