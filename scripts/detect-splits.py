from PIL import Image
from pathlib import Path

im = Image.open("/workspace/assets/5c69fe65-5d94-44a3-b38c-ba47df8ea79a.png").convert("RGB")
w, h = im.size

def lum(p):
    r, g, b = p
    return 0.2126 * r + 0.7152 * g + 0.0722 * b

def is_navy(p):
    r, g, b = p
    return b > r + 20 and b > g and 10 < b < 100 and r < 40

def is_black(p):
    return lum(p) < 18

# Find logo split: first x where a top scanline is consistently navy.
print("=== top row navy detection y=40 ===")
for x in range(700, 1100, 8):
    p = im.getpixel((x, 40))
    print(x, p, "navy" if is_navy(p) else "")

print("=== vertical divider scan at x=200 ===")
for y in range(380, 520, 4):
    p = im.getpixel((200, y))
    print(y, p, "navy" if is_navy(p) else f"L={lum(p):.0f}")

print("=== bottom photo seams y=700 ===")
prev = None
for x in range(400, 1200, 2):
    p = im.getpixel((x, 700))
    l = lum(p)
    if prev is not None and abs(l - prev) > 40:
        print("jump", x, p, "L", l, "from", prev)
    prev = l
