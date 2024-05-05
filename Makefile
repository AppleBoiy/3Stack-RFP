.SILENT:

build:
	git submodule update --init --remote --recursive
	docker compose -f docker-compose.yml build
	docker compose -f docker-compose.yml --compatibility up -d

connect-db:
	docker compose exec database psql --username=hello_flask --dbname=hello_flask_dev