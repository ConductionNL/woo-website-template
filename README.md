# Product Website Template

The [Product Website Template](https://github.com/ConductionNL/product-website-template) by [Conduction](https://www.conduction.nl/) is a powerful tool designed to alleviate the common issue faced by many open source and Common Ground projects: the need for a dedicated product page and the cost (in time) to build one. This template enables users to quickly and easily set up a product page based on the contents of their repository without actually making a page.

The template is highly customizable, allowing users to style their product page using their organization's NL design token. This template maintains a consistent look and feel across all your products and services, reinforcing your brand identity.

One of the key advantages of this template is its simplicity. You can have a fully functional product page up and running in minutes without writing any additional code or documentation. This template saves time and makes it accessible to users with varying technical expertise.

Whether you're a seasoned developer or a newcomer to open source projects, the Product Website Template is a valuable resource that can help you showcase your work professionally and appealingly.

## Adventages

- **No coding needed** just copy the workflow to your repository
- **No server needed** github pages wil host your site
- **No content needed** the page wil use the documentation that you already have in your repository
- **No maintance or updates** the page will alwasy fetch the latest version of your documentation
- **Follows your organizations style** just use your exisitng NL Design tokens to style the page

All in all its a simple, quick, fire and forget solution for providing a simple product page that is always up to date.

## Using this template for your own GitHub repository

1. **Download the GitHub Workflow File**
   Download the [productpage workflow file ](https://github.com/ConductionNL/product-website-template/blob/main/.github/workflows/product-page-deploy.yml) on GitHub. Download the file to your local machine. You can refer to the [GitHub Actions documentation](https://docs.github.com/en/actions) for more information on GitHub workflows.

2. **Place the Workflow File in Your Repository**

   - _In your browser_, navigate to your repository. Inside the repository, look for a folder named `.github/workflows`. If it doesn't exist, create it. When in the folder, press `Add file` (top right corner ) copy, paste the content of the `product-page-deploy.yml` into the edit screen, name the file `product-page-deploy.yml` and hit commit, and push
   - OR _On your local machine_, navigate to your repository. Inside the repository, look for a folder named `.github/workflows`. If it doesn't exist, create it. Place the downloaded workflow file into this folder. For more information on the structure of a GitHub repository, you can refer to the [GitHub Docs](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repositories).

3. **Configure the Workflow File**
   Open the workflow file in a text editor. Modify the configuration settings according to your needs. Be sure to save your changes. Refer to the GitHub Actions documentation for more information on configuring a workflow file.

4. **Commit and Push the Workflow File to Your Repository**
   Open a terminal and navigate to your repository. Use the following commands to add the workflow file to your repository, commit the changes, and push them to GitHub:

   ```CLI
   git add .github/workflows/product-page-deploy.yml
   git commit -m "Added workflow file for product page"
   git push
   ```

For more information on using Git, refer to the [Git documentation](https://git-scm.com/doc).

If you don't have GitHub pages setup yet, also follow the following steps

1. **Open your web browser and navigate to GitHub.**
   Go to [https://github.com](https://github.com).

2. **Log in to your GitHub account.**
   Click on the "Sign in" button at the top right corner of the page. Enter your username, email address, and password, then click "Sign in".

3. **Navigate to the repository where you want to activate GitHub Pages.**
   You can do this by clicking on the repository's name under "Your repositories" if it's a recent repository, or by clicking on "Repositories", then clicking on the repository's name.

4. **Switch to the `gh-pages` branch.**
   By default, GitHub shows the `main` or `master` branch of your repository. To switch to the `gh-pages` branch, click on the "Branch" dropdown menu (it's usually a button with the name of the current branch, like `main` or `master`), then select or type `gh-pages` and hit Enter.

   If the `gh-pages` branch doesn't exist, you'll need to create it. Click on the "Branch" dropdown menu, type `gh-pages` into the text box, and hit Enter. Confirm that you want to create a new branch named `gh-pages`.

5. **Activate GitHub Pages.**
   Click on the "Settings" tab at the top of the repository. Scroll down to the "GitHub Pages" section. In the "Source" dropdown, select the `gh-pages` branch. For the folder, make sure it's set to "/ (root)".

6. **Save your changes.**
   Click on the "Save" button to activate GitHub Pages.

7. **Confirm that GitHub Pages is activated.**
   After saving, scroll down to the "GitHub Pages" section again. You should see a message saying "Your site is published at [link]", and your Github Page can be accessed at that link.

## Configuration

You can configure the Product Website template through the workflow yaml file, specifically via the environment (env) variables found within this yaml file. When you open this file, you'll notice the environment variables located at the top, which can be altered to suit your preferences. Any image URL you include here can also be a base-encoded image. The variables should appear in this format:

```yaml
env: # Change these to your preferences any image url can also be a base encoded image
  GITHUB_PAGES_BRANCH: gh-pages

  # Connected Repository
  GITHUB_REPOSITORY_NAME: ${{ github.event.repository.name }}
  GITHUB_REPOSITORY_URL: ${{ github.event.repository.url }}
  GITHUB_API_BASE_URL: https://api.github.com/repos/${{ github.repository }}/contents
  GITHUB_DOCS_DIRECTORY_PATHS: '[{"name": "Features", "location": "/docs/features"}]'

  # Links
  SLACK_URL: "https://join.slack.com/t/conductionworkspace/shared_invite/zt-1y5kerime-amWEvljvnLvo5S3YfU_jzg"
  READ_THE_DOCS_URL: "https://commongateway.readthedocs.io/en/latest/"

  # Navbar
  NAVBAR_LOGO_URL: "https://conduction.nl/wp-content/uploads/2021/07/cropped-conductionlogo-1.png"

  # Footer
  FOOTER_LOGO_URL: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICAgICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgd2lkdGg9IjcxLjAwMDAwMHB0IiBoZWlnaHQ9IjcwLjAwMDAwMHB0IiB2aWV3Qm94PSIwIDAgNzEuMDAwMDAwIDcwLjAwMDAwMCIKICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0Ij4KCiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCw3MC4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMCkiCiAgICAgICBmaWxsPSIjNDM3NkZDIiBzdHJva2U9Im5vbmUiPgogICAgICAgIDxwYXRoIGQ9Ik0yMTggNTkyIGwtMTM3IC03NyAwIC0xNjUgMCAtMTY1IDEzMSAtNzQgYzcyIC00MSAxMzcgLTc0IDE0MyAtNzQgNgowIDcwIDMzIDE0MyA3NCBsMTMxIDc0IDEgMTY1IDAgMTY1IC02OCAzNyBjLTM3IDIxIC05OSA1NiAtMTM3IDc3IGwtNzEgNDAKLTEzNiAtNzd6IG0yOTUgLTg1IGw1NyAtMzIgMCAtMTI1IDAgLTEyNSAtMTA2IC02MCBjLTU4IC0zMyAtMTA4IC02MCAtMTExCi01OSAtMyAwIC01MiAyNyAtMTA5IDYwIGwtMTAzIDU5IDAgMTI1IDAgMTI1IDEwNyA2MSAxMDcgNjIgNTAgLTI5IGMyNyAtMTYKNzYgLTQ0IDEwOCAtNjJ6Ii8+CiAgICAgICAgPHBhdGggZD0iTTI3OCA0NzIgbC02OCAtMzcgMCAtODUgMCAtODUgNzMgLTM5IDczIC0zOSA2MiAzNCBjMzQgMTggNjIgMzcgNjIKNDEgMCA0IC0xNCAxNSAtMzEgMjMgLTI4IDE1IC0zMyAxNSAtNTQgMSAtMzEgLTIwIC00NiAtMjAgLTg0IDIgLTI3IDE1IC0zMQoyMiAtMzEgNjIgMCA0MCA0IDQ3IDMxIDYzIDM4IDIxIDUzIDIxIDg0IDEgMjEgLTE0IDI2IC0xNCA1NCAxIDE3IDggMzEgMTkgMzEKMjMgMCA4IC0xMTMgNzIgLTEyNiA3MiAtNSAwIC0zOSAtMTcgLTc2IC0zOHoiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
  FOOTER_LOGO_HREF: "https://conduction.nl"

  # Jumbotron
  JUMBOTRON_TITLE: "Product Website Template"
  JUMBOTRON_SUBTITLE: "Product page"
  JUMBOTRON_DESCRIPTION: ${{ github.event.repository.description }}
  JUMBOTRON_SVG: "https://www.conduction.nl/wp-content/uploads/2021/07/cropped-Conduction_HOME_0000_afb1-1.png"

  # NL-Design Theme
  NL_DESIGN_THEME_CLASSNAME: "conduction-theme"

  # Other
  FAVICON_URL: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICAgICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgd2lkdGg9IjcxLjAwMDAwMHB0IiBoZWlnaHQ9IjcwLjAwMDAwMHB0IiB2aWV3Qm94PSIwIDAgNzEuMDAwMDAwIDcwLjAwMDAwMCIKICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0Ij4KCiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCw3MC4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMCkiCiAgICAgICBmaWxsPSIjNDM3NkZDIiBzdHJva2U9Im5vbmUiPgogICAgICAgIDxwYXRoIGQ9Ik0yMTggNTkyIGwtMTM3IC03NyAwIC0xNjUgMCAtMTY1IDEzMSAtNzQgYzcyIC00MSAxMzcgLTc0IDE0MyAtNzQgNgowIDcwIDMzIDE0MyA3NCBsMTMxIDc0IDEgMTY1IDAgMTY1IC02OCAzNyBjLTM3IDIxIC05OSA1NiAtMTM3IDc3IGwtNzEgNDAKLTEzNiAtNzd6IG0yOTUgLTg1IGw1NyAtMzIgMCAtMTI1IDAgLTEyNSAtMTA2IC02MCBjLTU4IC0zMyAtMTA4IC02MCAtMTExCi01OSAtMyAwIC01MiAyNyAtMTA5IDYwIGwtMTAzIDU5IDAgMTI1IDAgMTI1IDEwNyA2MSAxMDcgNjIgNTAgLTI5IGMyNyAtMTYKNzYgLTQ0IDEwOCAtNjJ6Ii8+CiAgICAgICAgPHBhdGggZD0iTTI3OCA0NzIgbC02OCAtMzcgMCAtODUgMCAtODUgNzMgLTM5IDczIC0zOSA2MiAzNCBjMzQgMTggNjIgMzcgNjIKNDEgMCA0IC0xNCAxNSAtMzEgMjMgLTI4IDE1IC0zMyAxNSAtNTQgMSAtMzEgLTIwIC00NiAtMjAgLTg0IDIgLTI3IDE1IC0zMQoyMiAtMzEgNjIgMCA0MCA0IDQ3IDMxIDYzIDM4IDIxIDUzIDIxIDg0IDEgMjEgLTE0IDI2IC0xNCA1NCAxIDE3IDggMzEgMTkgMzEKMjMgMCA4IC0xMTMgNzIgLTEyNiA3MiAtNSAwIC0zOSAtMTcgLTc2IC0zOHoiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
```

We currently support the following configurations option's

| Variable Name | Default Value | Optional Values and Their Use                                                                         |
| --- | --- |-------------------------------------------------------------------------------------------------------|
| `GITHUB_PAGES_BRANCH` | `gh-pages` | The branch that GitHub Pages will build to.                                                           |
| `GITHUB_REPOSITORY_NAME` | `${{ github.event.repository.name }}` | The name of your GitHub repository.                                                                   |
| `GITHUB_REPOSITORY_URL` | `${{ github.event.repository.url }}` | The URL of your GitHub repository.                                                                    |
| `GITHUB_API_BASE_URL` | `https://api.github.com/repos/${{ github.repository }}/contents` | The base URL for the GitHub API.                                                                      |
| `GITHUB_DOCS_DIRECTORY_PATHS` | `'[{\"name\": \"Features\", \"location\": \"/docs/features\"}]'` | The paths to the directories containing your documentation.                                           |
| `SLACK_URL` | `"https://join.slack.com/t/conductionworkspace/shared_invite/zt-1y5kerime-amWEvljvnLvo5S3YfU_jzg"` | The URL for your Slack workspace.                                                                     |
| `READ_THE_DOCS_URL` | `"https://commongateway.readthedocs.io/en/latest/"` | The URL for your Read the Docs documentation.                                                         |
| `NAVBAR_LOGO_URL` | `"https://conduction.nl/wp-content/uploads/2021/07/cropped-conductionlogo-1.png"` | The URL for the logo in your navbar.                                                                  |
| `FOOTER_LOGO_URL` | `"data:image/svg+xml;base64,..."` | The URL for the logo in your footer.                                                                  |
| `FOOTER_LOGO_HREF` | `"https://conduction.nl"` | The URL that the footer logo links to.                                                                |
| `JUMBOTRON_TITLE` | `"Product Website Template"` | The title in your jumbotron. If you do not alter this it wil display the repository name              |
| `JUMBOTRON_SUBTITLE` | `${{ github.event.repository.url }}` | The subtitle in your jumbotron. If you do not alter this it wil display the repository url            |
| `JUMBOTRON_DESCRIPTION` | `${{ github.event.repository.description }}` | The description in your jumbotron. If you do not alter this it wil display the repository description |
| `JUMBOTRON_SVG` | `"https://www.conduction.nl/wp-content/uploads/2021/07/cropped-Conduction_HOME_0000_afb1-1.png"` | The SVG in your jumbotron.                                                                            |
| `NL_DESIGN_THEME_CLASSNAME` | `"conduction-theme"` | The classname for your NL Design theme.                                                               |
| `FAVICON_URL` | `"data:image/svg+xml;base64,..."` | The URL for your favicon.                                                                             |


## Conclusion

By following the steps mentioned in this guide, anyone can leverage the power of GitHub to deploy an engaging and informative product page with just a few clicks. So, whether you want to display the features of your newest software or give an overview of your portfolio, our Product Website Template will equip you with the right tool for the job.

We are delighted to offer this template to the community and we look forward to seeing the creative and innovative ways you will use it to present your projects.
