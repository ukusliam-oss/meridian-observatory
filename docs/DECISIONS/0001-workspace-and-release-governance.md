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
7. **A passing `meridian-check` is required to merge into `main`** (set 2026-10-31, M-002C Stage C, approved by the
   Product Director):
   - required check: `meridian-check`, the job in `.github/workflows/check.yml`;
   - expected source: GitHub Actions, App ID `15368`, so a status of the same name from anything else does not count;
   - strict mode: the branch must be up to date with `main` before it can merge.

## Required check: verification on 2026-10-31

- Before the change, `meridian-check` had succeeded on `b8fe130` from App ID `15368`, in both its `push` and its
  `pull_request` runs (Actions runs 40675067402 and 40675210931).
- The live protection was saved first and the request built from it by script, stopping on any unknown field.
- Comparing the configuration before and after: the 17 existing values are unchanged, and the only differences are
  the new `required_status_checks` fields.
- Read back from the REST and GraphQL APIs: required check `meridian-check`, App ID `15368`, strict on. Pull requests
  still required with 0 approvals, administrators included, force pushes and deletion off.
- Pull request #1 reports the check as required (`isRequired: true`) and succeeded, and stayed open and unmerged.
- `main` stayed at `b8d8593`, and the latest Pages build and deployment stayed at `b8d8593` of 2026-10-27.

## Release reconstruction (2026-10-31)

The first `dev` branch carried a private detail in its history, so its commits are not released. The Product Director
approved rebuilding the release from `main` with the files' contents only (`release/m-002`, no common commits with
`dev` after `b8d8593`).

- The first `dev` branch must not be merged into `main`, directly or through another branch: that would bring its
  history in. Decisions 2 and 3 name `dev`; which branch takes its place after this release is still to be decided.
- The commits and Actions runs named under "Required check: verification" belong to that first `dev` branch.

## Consequences

- A change reaches students only through a reviewed pull request.
- The release history of `main` becomes a list of merges, one per approved work package.
- Every Claude session for the site loads the correct instructions, and no longer touches `../meridian`'s files.

## Known gaps and limits

- **The deny rules are only partly exercised.** One has fired: during CI-11 (2026-10-31), deleting a remote branch
  with `git push origin --delete` was refused. The others have not been tried, because that would mean attempting the
  forbidden commands, which the Product Director asked not to do. They are pattern rules: a spelling not listed (for
  example a push to a refspec written differently) may get through. Branch protection on GitHub is what actually
  stops a push to `main`.
- **Plain `git push` is denied**, so pushes must name their branch, e.g. `git push origin dev`.
- **The required check has blocked a pull request, reported by GitHub rather than by a refused merge.** In CI-11
  (2026-10-31) a non-draft pull request with one deliberately changed byte in `assets/js/globe.js` failed
  `meridian-check`, which GitHub marked as required, and GitHub reported the pull request as `BLOCKED`. It was closed
  unmerged. No merge was attempted, so the evidence is the state GitHub reported.
- **The check's name is a contract.** Renaming the `meridian-check` job, or a workflow that no longer reports it,
  leaves every pull request waiting for a check that never comes. Changing the name means changing the protection too.
- **Strict mode** means `dev` must contain the latest `main` before merging; if `main` moves, `dev` has to be updated
  and the check run again.
- **Administrators are bound too.** A failing or stuck check blocks the owner as well, including for an urgent fix,
  until the check passes or the protection is deliberately changed.
- **The check covers what `npm run check` covers.** It does not test the site in a browser, so passing it says
  nothing about how a page looks or behaves.
- **Merging still publishes at once.** The check runs before the merge; there is no approval step after it, and Pages
  builds `main` in legacy mode as soon as it changes.
- **The local deny rules do not cover changing the protection with `gh api -X PUT`** (needed for this change). Only
  its deletion is listed. Such a change stays a matter of explicit authorisation.
- **No second reviewer.** With 0 required approvals the owner can open and merge alone. That is intended for a
  one-person project; the merge itself is the approval.
- **`tools/.cache` still points to `../meridian`** (a symlink, used only by the data builders; `npm run check` does
  not need it). `node_modules` has been this repository's own since M-002 (see `docs/ARCHITECTURE.md`).
- **`CLAUDE.md` still describes the old workflow** ("It has no remote yet", line 11; "every push to `main` redeploys
  it", line 272). It is left unchanged by instruction; this record governs until it is rewritten.
- **Remote preview** (a staging site) does not exist. Options for later: a GitHub Actions build artifact, or a
  separate staging repository with its own Pages site.
- **Memory** is stored per project path, so memories written while sessions ran from `../meridian` do not load here.
  See 0002.
