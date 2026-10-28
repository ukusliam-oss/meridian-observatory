# 0002 — Memory migration plan (proposed, nothing transferred)

- Status: proposed (M-001F). No memory has been copied; this records what should move and what should not.
- Why: Claude Code keeps memory per project path. Memories written while sessions ran from `../meridian`
  (`~/.claude/projects/-Users-gimhyeon-Documents--------meridian/memory/`) do not load in a session started from
  this repository's root.

## What exists there (read on 2026-10-28)

| Memory | Content | Recommendation |
|---|---|---|
| `meridian-observatory.md` | How this project began (from af7a163, 2026-10-26), phases 1–5, phase 6 and city lights rejected, "ask before pushing", "never take meridian2's paper, ink, Cartier overture or Noto" | **Do not copy as is.** Parts are obsolete: its description says "no remote yet", and the home's Cartier-style overture was asked for by the Product Director on 2026-10-26 after this rule was written. Keep the still-true lessons (below). |
| `check-in-users-browser.md` | Check visual bugs in the browser the user saw them in; ask for a recording early; headless Chrome hid a white flash the desktop app's browser showed | **Carry over** (true, verified on 2026-10-27). |
| `overture-baseline-4ab3514.md` | About `../meridian`'s overture | Leave behind (other project). |
| `remotes-meridian2.md` | `../meridian`'s remotes | Leave behind (other project). |

## Lessons worth keeping for this repository

1. Change visuals in small steps and show before and after first; the Product Director judges by looking.
2. Rejected here, not to be retried without asking what felt wrong: one camera flying across pages (phase 6), city
   lights on the night side, a chromatic split or tilt on the title, a portal window opening a chapter, morphing the
   followed link into the hub's title, buttons following the pointer, a blackout between pages.
3. Verify visual and loading behaviour where the Product Director sees it (the desktop app's browser, and the live
   site from here), not only in headless Chrome; use a screen recording early.
4. Measure loading on the live site too: local servers hid a 99% loader stall that a slow line showed.

## Proposed method (needs approval)

- Write the lessons above into this repository's documentation (for example `docs/DECISIONS/` for the rejected
  designs, `docs/QUALITY_GATES.md` for the verification lesson) rather than into a private memory, so they are
  versioned and reviewable.
- Then, if wanted, add one short memory in the new project path that points to those documents.
- The old memories stay where they are; nothing is deleted.
