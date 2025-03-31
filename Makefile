.PHONY: db-up db-down migrate

db-up:
	docker-compose up -d

db-down:
	docker-compose down

migrate:
	cd orm && npm run migrate:dev

run: db-down db-up migrate