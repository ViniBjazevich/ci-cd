# CI/CD

## Github Pages Continuous Delivery:

- Give actions `read and write` access in repo settings
- Add homepage to package.json Ex) "homepage": "https://ViniBjazevich.github.io/ci-cd"

## Github Settings:
#### In order to prevent merging code that doesn't pass integration tests we should to the following
- protect the master branch from force pushes and deletion
- Add a branch protection rule that only allows merges to the master branch from pull requests and requires status checks (our integration tests) to pass before merging.

## Resources:

- Github Actions: https://www.youtube.com/watch?v=eB0nUzAI7M8
- Github Pages Action: https://youtu.be/5I37iVCDUTU
- Eslint/Prettier Config: https://dev.to/knowankit/setup-eslint-and-prettier-in-react-app-357b

### Watch out:

- The build folder needs to be ignored or eslint will run forever and mess up github actions.
