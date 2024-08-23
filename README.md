### !! Important !!

You will need to have [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed for this to work.

## How to Run

Clone the Repo and then perform an `npm i`

Then run the commands

```bash
docker build . -t node_hello_world
docker run -p 8001:8000 node_hello_world
```

navigate to [here](http://localhost:8001) to see the running container
