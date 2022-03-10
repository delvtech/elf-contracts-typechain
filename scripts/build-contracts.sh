rm -rf artifacts cache typechain-types

# Compile typechain to convert contracts (.sol files) into .ts files.  Hardhat
# typechain will not make typescript definitions (*.d.ts), so we compile those
# manually with tsc in a different script. (see: build-typescript.sh)
export SOURCE_CONTRACTS_PATH="src/libraries"
export TYPECHAIN_OUTDIR="typechain-types/libraries"
npx hardhat compile --show-stack-traces

export SOURCE_CONTRACTS_PATH="src/v1"
export TYPECHAIN_OUTDIR="typechain-types/v1"
npx hardhat compile --show-stack-traces

export SOURCE_CONTRACTS_PATH="src/v1.1"
export TYPECHAIN_OUTDIR="typechain-types/v1.1"
npx hardhat compile --show-stack-traces