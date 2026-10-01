# -*- coding: utf-8 -*-
"""Dibuja los iconos de la app (icono-192.png e icono-512.png): un d20 de
hueso viejo sobre pizarra, con la estrella de cuatro puntas del cargador.
Colores del tema Cripta. Necesita Pillow.
Uso: python herramientas/gen_iconos.py"""
import math, os
from PIL import Image, ImageDraw, ImageFilter
RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FONDO, HALO = (6, 8, 10), (34, 43, 52)
METAL, METAL_OSCURO, ESTRELLA = (214, 208, 180), (125, 121, 101), (236, 235, 224)


def icono(n):
    S = n * 4                                   # se dibuja a 4× y se reduce: bordes limpios
    im = Image.new('RGB', (S, S), FONDO)
    halo = Image.new('L', (S, S), 0)
    ImageDraw.Draw(halo).ellipse([S * .12, S * .12, S * .88, S * .88], fill=150)
    halo = halo.filter(ImageFilter.GaussianBlur(S * .12))
    im = Image.composite(Image.new('RGB', (S, S), HALO), im, halo)
    d = ImageDraw.Draw(im)
    cx = cy = S / 2
    w = max(2, int(S * .018))
    R1 = S * .36
    hexa = [(cx + R1 * math.sin(math.radians(a)), cy - R1 * math.cos(math.radians(a))) for a in range(0, 360, 60)]
    d.line(hexa + [hexa[0]], fill=METAL, width=w, joint='curve')
    R2 = S * .21
    tri = [(cx + R2 * math.sin(math.radians(a)), cy - R2 * math.cos(math.radians(a)) + S * .02) for a in (0, 120, 240)]
    d.line(tri + [tri[0]], fill=METAL, width=w, joint='curve')
    for p, q in [(hexa[0], tri[0]), (hexa[1], tri[0]), (hexa[5], tri[0]), (hexa[1], tri[1]), (hexa[2], tri[1]), (hexa[3], tri[1]),
                 (hexa[3], tri[2]), (hexa[4], tri[2]), (hexa[5], tri[2])]:
        d.line([p, q], fill=METAL_OSCURO, width=max(1, w // 2))
    r, r0 = S * .085, S * .024
    cyy = cy + S * .045
    estrella = []
    for k in range(8):
        ang = math.radians(k * 45)
        rr = r if k % 2 == 0 else r0
        estrella.append((cx + rr * math.sin(ang), cyy - rr * math.cos(ang)))
    d.polygon(estrella, fill=ESTRELLA)
    return im.resize((n, n), Image.LANCZOS)


for n in (192, 512):
    icono(n).save(os.path.join(RAIZ, f'icono-{n}.png'), optimize=True)
    print('icono', n)
