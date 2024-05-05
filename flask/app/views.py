from sqlalchemy.sql import text

from app import app
from app import db

from flask_restx import Api, Resource,fields

api = Api(app)

@api.route("/hello")
class warmup(Resource):
    def get(self):
        return {"message":r"Flask says 'Hello world!'"}, 200

@api.route("/crash")
class Crash(Resource):
    def get(self):
        return {"error": "Crashed the API"}, 500

@api.route("/db")
class DBConnection(Resource):
    def get(self):
        try:
            # Assuming db is imported and initialized elsewhere
            with db.engine.connect() as conn:
                conn.execute(text("SELECT 1"))
            return "<h1>db works.</h1>"
        except Exception as e:
            return "<h1>db is broken.</h1>" + str(e), 500