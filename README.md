## Install Semantic Release

- Add libraries
  -- yarn add -D @semantic-release/changelog @semantic-release/commit-analyzer @semantic-release/git @semantic-release/npm @semantic-release/release-notes-generator husky semantic-release @commitlint/cli @commitlint/config-conventional

- Create or update Dockerfile

- Create commitlint.config.js

- Create release.config.js

- Create or update CI (develop branch)

- Activate hooks of husky
  -- yarn husky install

- Add a hoo of husky
  -- npx husky add .husky/commit-msg 'npx --no -- commitlint --edit ${1}'
