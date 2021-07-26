rm -rf artifacts types dist

# Compile the contracts definitions and factory instances
npx hardhat compile

# Compile the factory definitions
tsc --project tsconfig.json --outDir dist/ --declaration

# Copy over contract definitions
cp types/* dist/types

# copy over any pre-built local types as well
cp -R src/localTypes/* dist/types
cp -R src/localTypes/factories/* dist/types/factories