from flask import Flask, jsonify
from flask_cors import CORS  
import random

app = Flask(__name__)
CORS(app)

# Rework this to ChatGPT call to select word
word_list = ["ethical", "roast", "subway"]
word_picked = ""

# Get route - sending json data for svg
@app.route('/get-char-count', methods=['GET'])
def get_char():
   global word_picked  
   word_picked = random.choice(word_list)  
   char_count = len(word_picked)
   print(word_picked, char_count)
   return jsonify({"char_count": char_count})


# @app.route('/get-check-letter', methods=['GET'])
# def check_letter():
#    for letter in word_picked:
#       if letter == 

if __name__ == '__main__':
   app.run(debug=True)
