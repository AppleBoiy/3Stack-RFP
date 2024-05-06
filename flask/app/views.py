from flask import jsonify, request
from sqlalchemy.sql import text

from app import app, db
from app.models.greeting import Greet

from flask_restx import Api, Resource, fields
from flask_cors import cross_origin

api = Api(app)



@api.route("/crash")
class Crash(Resource):
    @cross_origin(origin="*", headers=["Content-Type"])
    def get(self):
        return {"error": "Crashed the API"}, 500

@api.route("/messages")
class Message(Resource):
    @cross_origin(origin="*", headers=["Content-Type"])
    def get(self):
        try:
            messages = Greet.query.all()
            response = [msg.to_dict() for msg in messages]
            return response, 200
        except Exception as e:
            error_message = "An error occurred while retrieving messages: {}".format(str(e))
            return {"error": error_message}, 500

greeting_model = api.model("Greeting", {
    "message": fields.String(description="The message to send.")
})


@api.route("/send")
class SendMessage(Resource):
    @api.expect(greeting_model)
    @cross_origin(origin="*", headers=["Content-Type"])
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