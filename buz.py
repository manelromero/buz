from flask import Flask, render_template, request
from flask_mail import Message, Mail
from flask_frozen import Freezer
from forms import ContactForm


app = Flask('__name__')
freezer = Freezer(app)

mail = Mail()
app.config['MAIL_SERVER'] = "authsmtp.manelromero.com"
app.config['MAIL_PORT'] = 25
app.config['MAIL_USE_SSL'] = False
app.config['MAIL_DEFAULT_SENDER'] = 'jander@example.com'
app.config['MAIL_USERNAME'] = 'manel@manelromero.com'
app.config['MAIL_PASSWORD'] = ''  # for production
mail.init_app(app)


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


@app.route('/contact', methods=['GET', 'POST'])
def contact():
    form = ContactForm(request.form)
    if request.method == 'POST' and form.validate():
        msg = Message(
            subject='Web contact form from ' + form.name.data,
            sender='jander@example.com',
            recipients=['manel@manelromero.com'])
        msg.html = '''
            <b>Name:</b> %s <br>
            <b>Email:</b> %s <br>
            <b>Phone:</b> %s <br>
            <b>Message:</b> %s <br>
            ''' % (
            form.name.data,
            form.email.data,
            form.phone.data,
            form.message.data)
        mail.send(msg)
        return render_template('message_sent.html')
    else:
        return render_template('contact.html', form=form)


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
    # freezer.freeze()
    app.run(host='0.0.0.0', debug=True)

    # if len(sys.argv) > 1 and sys.argv[1] == "build":
    #   freezer.freeze()
    # else:
    #   app.run(debug=True)
