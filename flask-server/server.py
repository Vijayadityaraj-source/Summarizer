from flask import Flask, request, jsonify
# import your summarizer LLM function here
from transformers import pipeline
summarizer=pipeline('summarization')

app = Flask(__name__)

@app.route('/')
def homepage():
    return 'hello world'

# Your summarizer LLM function
def summarize_text(text):
    return summarizer(text,max_length=130,min_length=30,do_sample=False)

@app.route('/summarize', methods=['GET','POST'])
def summarize():
    data = request.get_json()
    text = data['text']
    summary = summarize_text(text)
    return summary

if __name__ == '__main__':
    app.run(host='localhost', port=9874)