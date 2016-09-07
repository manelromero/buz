from wtforms import Form, StringField, TextAreaField


class ContactForm(Form):
    name = StringField("Name")
    email = StringField("Email")
    phone = StringField("Phone")
    message = TextAreaField("Message")
