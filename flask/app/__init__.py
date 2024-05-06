import os
from flask import Flask
from werkzeug.debug import DebuggedApplication
from flask_sqlalchemy import SQLAlchemy

from flask_cors import CORS


app = Flask(__name__, static_folder="static")

# CORS(app, resources={r"*": {"origins": "*"}})
# CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})
CORS(app)

app.url_map.strict_slashes = False

app.config["DEBUG"] = True
app.config["SECRET_KEY"] = "XXXXX"
app.config["JSON_AS_ASCII"] = False
app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("DATABASE_URL", "sqlite://")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

if app.debug:
    app.wsgi_app = DebuggedApplication(app.wsgi_app, evalex=True)

# Creating an SQLAlchemy instance
db = SQLAlchemy(app)

from app import views  # noqa
