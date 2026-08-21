repo: chrisjbillington/fugue-2x-icons
branch: master
path: icons-2x, icons-shadowless-2x

Upstream source for the Fugue icon set at 2× resolution (32×32 PNG, 3570 icons
per variant). Used by the admin/telephony surfaces of this design system.
Yusuke Kamiyamane's original Fugue 3.5.6 (16×16 + PSD sources) is the base set;
this repo is the machine-upscaled 2× rebuild of it.

## Usage rule
Source files are 32×32; they are DISPLAYED at 16×16 (see readme.md >
ICONOGRAPHY). That keeps the historical adminka density unchanged while giving
a genuinely sharp glyph on HiDPI screens — no `image-rendering: pixelated`
needed for these, unlike the original 16px GostSimBox set.

## Not vendored wholesale
7 155 files (two 3 570-icon variants plus overlays and previews) are not copied
into this project. Vendor only the glyphs a surface actually uses, into
`assets/fugue/`, keeping the upstream filename verbatim so the mapping back to
this repo stays obvious.

## Last sync
date: 2026-08-17T03:13:13Z
tree: 17d919241568
### Updated in this project
- Recorded the 2× set as the upstream Fugue source.
- Icon rule switched to 32px sources rendered at 16px.

## Screen map
| Surface | Built from |
| --- | --- |
| guidelines/emoji-lexicon.html | assets/adminka/* (GostSimBox originals, primary) |
| guidelines/adminka-icons.html | assets/adminka/* |
| templates/telephony-adminka | assets/adminka/*, Fugue 2× where no original exists |
