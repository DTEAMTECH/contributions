# nubit-bridge-metrics

## Overview
`nubit-bridge-metrics` is a Prometheus exporter designed for simplicity and ease of use, catering specifically to Nubit bridge instances.

## Configuration
The exporter is pre-configured to transmit telemetry data to the Nubit server. This is already configured for nubit-alphatestnet-1 testnet. Refer to the configuration in `conf/otel-collector-config.yaml`:

```yaml
exporters:
  otlphttp:
    endpoint: http://otel.nubit-alphatestnet-1.com:4318
```

## Usage
Start the service with the command:
```sh
docker-compose up -d
```
To enable metrics collection, start your Nubit bridge with the following parameters:
```sh
--metrics --metrics.tls=false --metrics.endpoint=127.0.0.1:4318
```

### Access metrics at the following endpoints:
- **Exporter metrics**: Accessible at http://127.0.0.1:8888/metrics
- **Bridge metrics**: Accessible at http://127.0.0.1:8889/metrics

### Security Warning
:warning: **Exposure Risk**: If your machine is exposed to the internet (has a public IP), the Docker network will expose your metrics ports to the internet. If you're unsure about securing your setup, please seek guidance through the appropriate channels.


## Contact
For support issues and feature requests, please use the GitHub issue tracker.
