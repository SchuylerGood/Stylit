from firebase_admin import credentials, initialize_app
from flask import Flask

cred = credentials.Certificate(r"C:\Users\qayse\OneDrive\Desktop\QHacks\qhacks2023\model\api\fir-auth-5ed49-firebase-adminsdk-5nhpk-befb7469dc.json")
default_app = initialize_app(cred)
def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'qhacks'
    from .userAPI import userAPI
    app.register_blueprint(userAPI,url_prefix='/user')

    return app