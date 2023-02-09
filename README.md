# CI/CD
Continuous Integration and Continuous Delievery/Deplloyment is when you automate tools that help you integrate new code. A common use case for Continuous Integration is to make sure that your app builds, all of your tests were passing, and you don't have any lint issues. Continuous Integration can automatically build our app, run tests, and do a lint check to make sure our code is ready to be integrated. We can also prevent our code from being merged if we fail one of these checks. Continuous deployment allows us to automatically deploy our app when new code is merged to our main branch. This allows us to always have the latest changes deployed without manually deploying everytime we push changes.

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
