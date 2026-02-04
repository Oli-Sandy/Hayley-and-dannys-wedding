from . import app
from flask import render_template

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/our-story')
def our_story():
    return render_template('our_story.html')

@app.route('/vegas-2026')
def vegas_2026():
    return render_template('vegas_2026.html')

@app.route('/home-party')
def home_party():
    return render_template('home_party.html')

@app.route('/honeymoon-and-gifts')
def honeymoon_and_gifts():
    return render_template('honeymoon_and_gifts.html')