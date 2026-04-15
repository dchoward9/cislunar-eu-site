# Cislunar EU Site Agent Notes

## Project conventions

- This is a static website repository. There is currently no package/deploy script or GitHub workflow in the repo; if asked to deploy, push committed changes to the tracked `origin/main` branch and do not invent a manual deploy step.
- Keep production site changes minimal and limited to the requested static assets (`index.html`, `site.css`, `site.js`, and files under `assets/`) unless instructed otherwise.
- Before committing, verify the intended changed files with `git status`, `git diff --name-only`, and a lightweight validation such as `git diff --check`.
