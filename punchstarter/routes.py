from flask import render_template
from punchstarter import app


@app.route('/')
def index():
    return render_template("front-page.html")
