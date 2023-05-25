
up:
	docker compose up --build -d influxdb grafana

down:
	docker compose down

loadtest:
	docker compose run --rm k6 run /scripts/loadtest.js