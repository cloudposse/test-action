<!-- markdownlint-disable -->

## Inputs

| Name | Description | Default | Required |
|------|-------------|---------|----------|
| id | Input parameter placeholder | N/A | true |
| sha | Input parameter placeholder | true | true |
| token | Used to pull node distributions for Atmos from Cloud Posse's GitHub repository. Since there's a default, this is typically not supplied by the user. When running this action on github.com, the default value is sufficient. When running on GHES, you can pass a personal access token for github.com if you are experiencing rate limiting. | ${{ github.server\_url == 'https://github.com' && github.token \|\| '' }} | false |


<!-- markdownlint-restore -->
