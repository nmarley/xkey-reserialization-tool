# Extended Key (Re)Serialization Tool

## Get Started

1. Clone this repo:

git clone https://github.com/nmarley/xkey-reserialization-tool

2. Build the page. A Dockerfile has been included in order to build the page deterministically, as well as a script to run the Docker page build, and place the resulting artifacts in the `dist/` directory. To run the full Dockerized build, first ensure you have Docker installed, then run this script:

```
bash scripts/build.sh
```

This will place the complete page in `dist/`. You can run this locally in your browser.

## Stability

This is ALPHA software and I offer no guarantees. Use at your own risk.

## License

Released under the MIT License.
