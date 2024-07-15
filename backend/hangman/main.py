from flask import Flask, jsonify
from flask_cors import CORS  
import random

app = Flask(__name__)
CORS(app)

# Rework this to ChatGPT call to select word
word_list = ["greenish", "abruptly", "subway"]

# Get route - sending json data for svg
@app.route('/get-char-count', methods=['GET'])
def get_char():
   word_picked = random.choice(word_list)
   char_count = len(word_picked)
   print(word_picked, char_count)
   return jsonify({"char_count": char_count})



if __name__ == '__main__':
   app.run(debug=True)