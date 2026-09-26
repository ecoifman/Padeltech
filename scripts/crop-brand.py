from PIL import Image
from pathlib import Path

src = Path("/workspace/assets/5c69fe65-5d94-44a3-b38c-ba47df8ea79a.png")
out = Path("/workspace/public/brand")
out.mkdir(parents=True, exist_ok=True)

im = Image.open(src).convert("RGB")
w, h = im.size
im.save(out / "board.png", "PNG", optimize=True)

crops = {
    "logo-navy.png": (1070, 12, 1524, 440),
    "club-entrance.png": (0, 458, 640, 1024),
    "play-move.png": (560, 458, 820, 1024),
    "player.png": (800, 458, 1148, 1024),
    "wellness.png": (1140, 458, 1536, 1024),
}

for name, box in crops.items():
    cropped = im.crop(box)
    cropped.save(out / name, "PNG", optimize=True)
    print(name, cropped.size)
