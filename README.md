# K6 Load Tester + Grafana Dashboard
K6 load testing tools with Grafana Dashboard provisioning setup using docker-compose

# Prerequisite

- docker
- make

---

## Start Grafana Dashboard Server

- Start server:

```bash
make up
```

- Visit dashboard [http://localhost:3000/dashboards](http://localhost:3000/dashboards)
- Select General > k6 Load Testing Results

## Run Loadtest

- You can edit loadtesting detail via `scripts/loadtest.ts`
- Run loadtest with the command below:

```bash
make loadtest
```

## Stop Grafana Dashboard Server

```bash
make down
```


# Reference
- [Youtube - CodeBangkok : Go Programming - Redis](https://www.youtube.com/watch?v=4EBhkFWN16w)
- [K6 Lifecycle](https://k6.io/docs/using-k6/test-lifecycle/)
- [Grafana Provisioning](https://grafana.com/docs/grafana/latest/administration/provisioning/#provision-folders-structure-from-filesystem-to-grafana)
- [Grafana K6 Load Testing Results Dashboard](https://grafana.com/grafana/dashboards/2587-k6-load-testing-results/)
- [Make](https://www.gnu.org/software/make/manual/make.html)
- [Docker Compose](https://docs.docker.com/compose/gettingstarted/)