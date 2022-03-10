rm -rf dist

mkdir -p dist

# Copy over typecontracts.
cp -R compiled/typechain-types/ dist/

# Copy over the precompiled factories
cp -R src/precompiled/factories/ dist/libraries/factories

# Copy over the precompiled types 
cp -R src/precompiled/*.d.ts dist/libraries
