rm -rf dist

mkdir -p dist

# Copy over typecontracts.
cp -R compiled/ dist/

# Copy over the precompiled factories
cp -R precompiled/factories/ dist/libraries/factories

# Copy over the precompiled types 
cp -R precompiled/*.d.ts dist/libraries
