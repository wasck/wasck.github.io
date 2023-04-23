# Steps to deploy page

1. Prepare project
  ```sh
  pnpm install && pnpm generate
  ```

2. Create and prepare gh-pages branch
  ```sh
  git checkout --orphan gh-pages && git reset && git clean -fd && git --work-tree=./dist add . && git commit -m "chor: <commit message>"
  ```

3. Deploy page
  ```sh
  git push -u origin gh-pages --force
  ```

4. Clean up
  ```sh
  git clean -fdx && git sw main && pnpm install
  ```