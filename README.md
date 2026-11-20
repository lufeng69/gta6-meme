# GTA 6 Meme — make.fun gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/lufeng69/gta6-meme/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/lufeng69/gta6-meme/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A GTA 6 launch-week meme for the
[make.fun gta6-meme-x-01 bounty](https://make.fun/bounty/gta6-meme-x-01) —
$500 in prizes, top 50 entries paid.

The joke: waited 13 years for GTA 6 — and the make.fun ghost already got
paid. The ghost (make.fun's mascot, with its magenta star coin) drives a pink
convertible down a Vice City sunset street, past a neon `make.fun` sign.
`meme.png` is the picture; it is posted on X from a public account with
make.fun linked and the entrant's play code in the post's text.

## The entry

`POST.json` at the repository root names the post's address on X:

```json
{"url": "https://x.com/<handle>/status/<id>"}
```

`main.ts` (Node 22, standard library only) copies `POST.json` to `/output`,
which is all the program has to do — the post itself is the entry, and the
house reads it from X.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)</sub>
