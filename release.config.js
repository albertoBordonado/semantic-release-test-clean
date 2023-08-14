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
      { breaking: true, release: 'major' },
      { type: 'build', release: 'none' },
      { type: 'chore', release: 'none' },
      { type: 'ci', release: 'none' },
      { type: 'docs', release: 'none' },
      { type: 'feat', release: 'minor' },
      { type: 'fix', release: 'patch' },
      { type: 'perf', release: 'patch' },
      { type: 'refactor', release: 'none' },
      { type: 'revert', release: 'patch' },
      { type: 'style', release: 'none' },
      { type: 'test', release: 'none' },
    ]
  };
  