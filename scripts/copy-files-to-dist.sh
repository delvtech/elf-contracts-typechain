rm -rf dist

mkdir -p dist

# Copy over contract definitions.
cp -R typechain-types/* dist/
cp -R src/types/*.ts dist/libraries/
