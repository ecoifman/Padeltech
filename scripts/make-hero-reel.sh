#!/usr/bin/env bash
set -euo pipefail
DIR="/workspace/public/brand/cinema/hero"
OUT="/workspace/public/brand/cinema/hero.mp4"
WORK="/tmp/padel-hero-clips"
mkdir -p "$WORK"

make_clip() {
  local src="$1"
  local dest="$2"
  local zoom_expr="$3"
  ffmpeg -y -hide_banner -loglevel error -loop 1 -i "$src" \
    -vf "scale=2400:1350:force_original_aspect_ratio=increase,crop=2400:1350,zoompan=z=${zoom_expr}:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=96:s=1920x1080:fps=24" \
    -t 4 -c:v libx264 -pix_fmt yuv420p -preset veryfast -crf 20 -an "$dest"
}

make_clip "$DIR/ball.png" "$WORK/00.mp4" "'if(eq(on,0),1.35,max(1.08,1.35-0.003*on))'"
make_clip "$DIR/miami.png" "$WORK/01.mp4" "'min(1.18,1.04+0.0016*on)'"
make_clip "$DIR/nyc.png" "$WORK/02.mp4" "'min(1.16,1.03+0.0014*on)'"
make_clip "$DIR/action.png" "$WORK/03.mp4" "'min(1.22,1.06+0.0018*on)'"
make_clip "$DIR/madrid.png" "$WORK/04.mp4" "'min(1.15,1.02+0.0013*on)'"
make_clip "$DIR/london.png" "$WORK/05.mp4" "'min(1.17,1.03+0.0015*on)'"

# Crossfade chain: 4s clips, 0.6s fade, offset = 3.4, 6.8, 10.2, 13.6, 17.0
ffmpeg -y -hide_banner -loglevel error \
  -i "$WORK/00.mp4" -i "$WORK/01.mp4" -i "$WORK/02.mp4" \
  -i "$WORK/03.mp4" -i "$WORK/04.mp4" -i "$WORK/05.mp4" \
  -filter_complex "\
[0][1]xfade=transition=fade:duration=0.6:offset=3.4[a];\
[a][2]xfade=transition=fade:duration=0.6:offset=6.8[b];\
[b][3]xfade=transition=fade:duration=0.6:offset=10.2[c];\
[c][4]xfade=transition=fade:duration=0.6:offset=13.6[d];\
[d][5]xfade=transition=fade:duration=0.6:offset=17.0[v]" \
  -map "[v]" -c:v libx264 -pix_fmt yuv420p -preset medium -crf 22 -movflags +faststart -an "$OUT"

ls -lh "$OUT"
ffprobe -v error -show_entries format=duration,size -of default=nw=1 "$OUT"
