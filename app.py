from flask import Flask, render_template, jsonify
import json

app = Flask(__name__)

@app.route("/")
def home():
    with open("data/save_state.json") as f:
        state = json.load(f)
    return render_template("index.html", state=state)

@app.route("/api/state")
def api_state():
    with open("data/save_state.json") as f:
        return jsonify(json.load(f))

if __name__ == "__main__":
    app.run(debug=True)