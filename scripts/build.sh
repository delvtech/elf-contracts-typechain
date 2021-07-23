rm -rf artifacts types 

npx hardhat compile

# copy over any pre-built local types as well
cp -R src/localTypes/* types/
cp -R src/localTypes/factories/* types/factories