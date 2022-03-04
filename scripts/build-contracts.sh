rm -rf artifacts types dist compiled

# Compile typechain to create contracts definitions and create factory
# instances. Hardhat typechain will not make factory definitions, so we'll
# compile the factory instances manually with tsc to create the defintions in
# the next step.
export SOURCE_CONTRACTS_PATH="src/libraries"
export TYPECHAIN_OUTDIR="types/libraries"
npx hardhat compile --show-stack-traces

export SOURCE_CONTRACTS_PATH="src/v1"
export TYPECHAIN_OUTDIR="types/v1"
npx hardhat compile --show-stack-traces

export SOURCE_CONTRACTS_PATH="src/v1.1"
export TYPECHAIN_OUTDIR="types/v1.1"
npx hardhat compile --show-stack-traces


# Compile the factory definition files, including any local factories. Also
# create the main index.d.ts definition file.
tsc --project tsconfig.json

mkdir -p dist

# Copy over contract definitions.
cp -R types/* dist/
cp -R src/types/*.ts dist/libraries/
