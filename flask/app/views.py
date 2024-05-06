from flask import jsonify, request
from sqlalchemy.sql import text

from app import app, db
from app.models.greeting import Greet

from flask_restx import Api, Resource, fields

api = Api(app)


@api.route("/hello")
class warmup(Resource):
    def get(self):
        return {"message": r"Flask says 'Hello world!'"}, 200


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


greeting_model = api.model("Greeting", {
    "message": fields.String(description="The message to send.")
})


@api.route("/send")
class SendMessage(Resource):
    @api.expect(greeting_model)
    def post(self):
        """
        Send a message.
        """
        data = request.get_json()
        message = data.get("message")
        if not message:
            return {"message": "Failed to send. No message provided."}, 400
        db.session.add(Greet(msg=message))
        db.session.commit()
        return {"message": "Message sent successfully."}, 200