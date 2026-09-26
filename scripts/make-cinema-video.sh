#!/usr/bin/env bash
set -euo pipefail

DIR=/workspace/public/brand/cinema
TMP=/tmp/padeltech-clips
mkdir -p "$TMP"

# Dramatic zoom-out from the padel ball (right-bottom of frame).
ffmpeg -y -loop 1 -i "$DIR/padel-ball-macro.png" \
  -vf "scale=2880:1620:force_original_aspect_ratio=increase,crop=2880:1620,zoompan=z='if(eq(on,0),1.62,max(1.62-0.00205*on,1.0))':x='min(iw-iw/zoom,max(0,iw*0.72-iw/zoom/2))':y='min(ih-ih/zoom,max(0,ih*0.62-ih/zoom/2))':d=210:s=1920x1080:fps=30,trim=duration=7,setpts=PTS-STARTPTS,eq=contrast=1.07:brightness=-0.025:saturation=0.9" \
  -t 7 -an -c:v libx264 -preset fast -crf 20 -pix_fmt yuv420p "$TMP/c0.mp4"

make_clip() {
  local src="$1"
  local dest="$2"
  local zoom_dir="$3"
  local zexpr
  if [[ "$zoom_dir" == "in" ]]; then
    zexpr="min(1+0.0009*on,1.14)"
  else
    zexpr="if(eq(on,0),1.14,max(1.14-0.0009*on,1))"
  fi

  ffmpeg -y -loop 1 -i "$src" \
    -vf "scale=2304:1296:force_original_aspect_ratio=increase,crop=2304:1296,zoompan=z='${zexpr}':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=150:s=1920x1080:fps=30,trim=duration=5,setpts=PTS-STARTPTS,eq=contrast=1.06:brightness=-0.03:saturation=0.92" \
    -t 5 -an -c:v libx264 -preset fast -crf 20 -pix_fmt yuv420p "$dest"
}

make_clip "$DIR/padel-ball-reveal.png" "$TMP/c1.mp4" out
make_clip "$DIR/padel-doubles-glass.png" "$TMP/c2.mp4" in
make_clip "$DIR/padel-miami.png" "$TMP/c3.mp4" in
make_clip "$DIR/padel-madrid.png" "$TMP/c4.mp4" out
make_clip "$DIR/padel-london.png" "$TMP/c5.mp4" in

# 7 + 5*5 with 0.8s fades: offsets 6.2, 10.4, 14.6, 18.8, 23.0
ffmpeg -y \
  -i "$TMP/c0.mp4" -i "$TMP/c1.mp4" -i "$TMP/c2.mp4" \
  -i "$TMP/c3.mp4" -i "$TMP/c4.mp4" -i "$TMP/c5.mp4" \
  -filter_complex "[0][1]xfade=transition=fade:duration=0.8:offset=6.2[a];[a][2]xfade=transition=fade:duration=0.8:offset=10.4[b];[b][3]xfade=transition=fade:duration=0.8:offset=14.6[c];[c][4]xfade=transition=fade:duration=0.8:offset=18.8[d];[d][5]xfade=transition=fade:duration=0.8:offset=23.0[v]" \
  -map "[v]" -an -c:v libx264 -preset medium -crf 21 -pix_fmt yuv420p -movflags +faststart \
  "$DIR/hero.mp4"

ffmpeg -y \
  -i "$TMP/c0.mp4" -i "$TMP/c2.mp4" -i "$TMP/c3.mp4" \
  -filter_complex "[0][1]xfade=transition=fade:duration=0.7:offset=6.3[a];[a][2]xfade=transition=fade:duration=0.7:offset=10.6[v]" \
  -map "[v]" -an -c:v libx264 -preset medium -crf 21 -pix_fmt yuv420p -movflags +faststart \
  "$DIR/play.mp4"

ls -lh "$DIR"/*.mp4
ffprobe -v error -show_entries format=duration -of default=nw=1 "$DIR/hero.mp4"
ffprobe -v error -show_entries format=duration -of default=nw=1 "$DIR/play.mp4"
