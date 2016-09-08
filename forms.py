from wtforms import Form, StringField, TextAreaField, validators


class ContactForm(Form):
    name = StringField('Name', [
        validators.InputRequired(message='You have to introduce a name'),
        validators.Length(
            max=50,
            message="The name can't have more than 50 characters")])
    email = StringField('Email', [
        validators.InputRequired(
            message='You have to introduce an email address'),
        validators.Email(
            message='You have to introduce a valid email address')])
    phone = StringField('Phone')
    message = TextAreaField('Message', [
        validators.InputRequired(message='You have to tell us something'),
        validators.Length(
            max=10000,
            message="Sorry, message too long")])
