from flask import Flask, jsonify
import random

app = Flask(__name__)

@app.route('/get_word_info', methods=['GET'])
def get_word_info():
    word_list = ["greenish", "abruptly", "subway"]
    word_picked = random.choice(word_list)
    char_count = len(word_picked)
    return jsonify({'wordPicked': word_picked, 'charCount': char_count})

if __name__ == '__main__':
    app.run(debug=True)
