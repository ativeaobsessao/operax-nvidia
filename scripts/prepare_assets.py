#!/usr/bin/env python3
"""Prepare creative assets: 480.webp, 960.webp, og.jpg"""
from PIL import Image
import os

src = "public/creative-source.jpeg"
img = Image.open(src).convert("RGB")

# Original size
w, h = img.size
print(f"Original: {w}x{h}")

# 960w
img_960 = img.copy()
if w > 960:
    ratio = 960 / w
    img_960 = img.resize((960, int(h * ratio)), Image.Resampling.LANCZOS)
img_960.save("public/creative-960.webp", "WEBP", quality=85, method=6)
print(f"960: {img_960.size}")

# 480w
img_480 = img.copy()
if w > 480:
    ratio = 480 / w
    img_480 = img.resize((480, int(h * ratio)), Image.Resampling.LANCZOS)
img_480.save("public/creative-480.webp", "WEBP", quality=80, method=6)
print(f"480: {img_480.size}")

# OG 1200x630
og = Image.new("RGB", (1200, 630), (6, 19, 11))
# Fit image centered
ratio = min(1200 / w, 630 / h)
nw, nh = int(w * ratio), int(h * ratio)
resized = img.resize((nw, nh), Image.Resampling.LANCZOS)
ox, oy = (1200 - nw) // 2, (630 - nh) // 2
og.paste(resized, (ox, oy))
og.save("public/og-creative.jpg", "JPEG", quality=85)
print("OG: 1200x630")

print("Assets ready")
