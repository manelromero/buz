import sys
from flask import Flask, render_template
from flask_frozen import Freezer


app = Flask('__name__')
freezer = Freezer(app)

app.config['FREEZER_IGNORE_MIMETYPE_WARNINGS'] = True
app.config['FREEZER_DEFAULT_MIMETYPE'] = 'text/html; charset=utf-8'
app.config['FREEZER_RELATIVE_URLS'] = True

@app.route('/')
@app.route('/home')
def home():
    return render_template('home.html')


@app.route('/about')
def about():
    return render_template('about.html')


@app.route('/services')
def services():
    return render_template('services.html')


@app.route('/contact')
def contact():
  return render_template('contact.html')


@app.route('/startups')
def startups():
    return render_template('startups.html')


@app.route('/franchisors')
def franchisors():
    return render_template('franchisors.html')


@app.route('/smallbusiness')
def smallbusiness():
    return render_template('smallbusiness.html')


if __name__ == '__main__':
    freezer.freeze()
    app.run(host='0.0.0.0', debug=True)

    # if len(sys.argv) > 1 and sys.argv[1] == "build":
    #   freezer.freeze()
    # else:
    #   app.run(debug=True)
