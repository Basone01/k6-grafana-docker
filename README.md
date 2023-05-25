# K6 Load Tester + Grafana Dashboard
K6 load testing tools with Grafana Dashboard provisioning setup

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
