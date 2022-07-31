## Run Local

```
docker build -t express-strategy-pattern -f Dockerfile .
docker run -it -p 3000:3000 express-strategy-pattern

```

## Push
### Via Docker
```
docker build -t express-strategy-pattern -f Dockerfile .

docker tag express-strategy-pattern gcr.io/cfe-project-357217/express-strategy-pattern

docker push gcr.io/cfe-project-357217/express-strategy-pattern

```

### via GCloud Build

```
gcloud builds submit --tag gcr.io/cfe-project-357217/express-strategy-pattern

```