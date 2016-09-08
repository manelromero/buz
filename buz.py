from flask import Flask, render_template, request
from flask_mail import Message, Mail
from forms import ContactForm


app = Flask('__name__')
# config file for production
# app.config.from_object('config')

# config file por development
config_file_path = app.instance_path + '/config.py'
app.config.from_pyfile(config_file_path)


mail = Mail()
mail.init_app(app)


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
    app.run(host='0.0.0.0', debug=True)
