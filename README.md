# elf-contracts-typechain
Typechain codegen for generating Typescript classes and types for elf-contracts

## Install
Run 

```
npm install git+https://github.com/element-fi/elf-contracts-typechain.git
```

## Development

Make changes or add new contracts in the `src/` directory then run the build command:
```
npm run build
```

This will produce new files in `dist/` that can be checked in.

## Here, take this!
Since this repo is not an npm package, it can be helpful to include this simple script to upgrade your project to the latest commit:

```
  "scripts": {
    "update-elf-contracts-typechain": "npm install git+https://github.com/element-fi/elf-contracts-typechain.git"
  },
```
