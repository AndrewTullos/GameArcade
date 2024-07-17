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


@app.route('/post-check-letter', methods=['POST'])
def check_letter():
   data = request.get_json()
   selected_key = data.get('selectedKey')

   for letter in word_picked:
      if letter == selected_key:
         # update the spaces component to appear with letter above
      # else generate piece of hangman
   return jsonify({'message': 'Data received successfully'})  
   

if __name__ == '__main__':
   app.run(debug=True)
