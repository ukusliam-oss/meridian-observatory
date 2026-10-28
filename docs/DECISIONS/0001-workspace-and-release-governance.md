# 0001 — Workspace isolation and release governance

- Status: accepted (M-001F, conditionally approved by the Product Director, 2026-10-28)
- Scope: how Claude Code works on this repository and how changes reach the public site
- Supersedes: nothing. `CLAUDE.md` is unchanged; where it and this record differ on workflow, this record governs and
  the difference is listed under "Known gaps" for a later, separately approved rewrite of `CLAUDE.md`.

## Context

The M-001 audit found the following (all VERIFIED on 2026-10-28):

- GitHub Pages builds this repository in legacy mode from `main`, path `/`. Every push to `main` published the
  public site at https://ukusliam-oss.github.io/meridian-observatory/ immediately.
- `main` had no branch protection, no rulesets and no CI. The only workflow is GitHub's own `pages-build-deployment`.
- The `github-pages` environment accepts deployments only from the branches `main` and `gh-pages`
  (custom deployment branch policies).
- Claude Code sessions for this site had been started from the sibling repository `../meridian`, so that
  repository's `CLAUDE.md` (a different design, a different remote) was the one loaded, and this repository's own
  `CLAUDE.md` was read only by hand.
- This repository had no `.claude/` folder of its own; its preview server was defined in `../.claude/launch.json`.

## Decision

1. **Server-side protection on `main`** (set 2026-10-28 through the GitHub API, classic branch protection):
   - a pull request is required for every change to `main` (0 approving reviews required, so the owner can merge);
   - the rule applies to administrators too (`enforce_admins`), so the owner's token, which Claude Code uses,
     cannot push to `main` directly;
   - force pushes and deletion of `main` are not allowed.
   This is the safeguard that counts. The local deny rules below are a second line only.
2. **Work happens on `dev`.** `dev` is created from `main` and pushed to `origin`. It cannot publish: the Pages
   source is `main` only, and the `github-pages` environment refuses other branches.
3. **Release = a pull request from `dev` to `main`, merged by the Product Director.** Merging publishes the site.
   Claude Code may open such a pull request when asked, but does not merge it (`gh pr merge` is denied locally).
4. **Claude Code starts from this repository's root.** Its `CLAUDE.md` is then the project instruction file, and
   `.claude/settings.json` and `.claude/launch.json` here apply.
5. **Local deny rules** (`.claude/settings.json`): pushing to `main` (several spellings, plain `git push`, `rtk`
   forms), force and mirror pushes, deleting remote branches, `git reset --hard`, `git clean`, merging pull requests,
   editing or deleting the repository, changing the Pages configuration or deleting the branch protection through
   `gh api`, and editing files in `../meridian`.
6. **Preview** stays local: `.claude/launch.json` serves this folder on http://localhost:5187 (python's
   `http.server`, started from the repository root).

## Consequences

- A change reaches students only through a reviewed pull request.
- The release history of `main` becomes a list of merges, one per approved work package.
- Every Claude session for the site loads the correct instructions, and no longer touches `../meridian`'s files.

## Known gaps and limits

- **The deny rules were not exercised.** Testing them would mean attempting the forbidden commands, which the
  Product Director asked not to do. They are pattern rules: a spelling not listed (for example a push to a refspec
  written differently) may get through. Branch protection on GitHub is what actually stops a push to `main`.
- **Plain `git push` is denied**, so pushes must name their branch, e.g. `git push origin dev`.
- **No required status checks yet.** Protection requires a pull request but no passing check, because there is no
  CI. When `npm run check` exists (M-002) and runs in CI, add it as a required check.
- **No second reviewer.** With 0 required approvals the owner can open and merge alone. That is intended for a
  one-person project; the merge itself is the approval.
- **The build still borrows `node_modules` and `tools/.cache` from `../meridian`** (symlinks). Reading through them
  does not modify that repository, but the dependency remains until M-002 decides on a local `npm ci`.
- **`CLAUDE.md` still describes the old workflow** ("It has no remote yet", line 11; "every push to `main` redeploys
  it", line 272). It is left unchanged by instruction; this record governs until it is rewritten.
- **Remote preview** (a staging site) does not exist. Options for later: a GitHub Actions build artifact, or a
  separate staging repository with its own Pages site.
- **Memory** is stored per project path, so memories written while sessions ran from `../meridian` do not load here.
  See 0002.
