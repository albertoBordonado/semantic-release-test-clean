module.exports = {
    branches: ['develop'],
    "plugins": [
        "@semantic-release/commit-analyzer",
        [
          "@semantic-release/release-notes-generator",
          {
            "preset": "angular",
            "parserOpts": {
              "noteKeywords": [
                "BREAKING CHANGE",
                "BREAKING CHANGES"
              ]
            }
          }
        ],
        "@semantic-release/changelog",
        "@semantic-release/npm",
        [
          "@semantic-release/git",
          {
            "message": "${nextRelease.version} CHANGELOG [skip ci]\n\n${nextRelease.notes}"
          }
        ],
        "@semantic-release/github"
      ],
    
    preset: 'angular',
    releaseRules: [
      { type: 'breaking', release: 'major' },
      { type: 'feat', release: 'minor' },
      { type: 'fix', release: 'patch' },
      // ...
    ]
  };
  