"""Inline Current's startup styles and scripts in the GitHub Pages artifact."""

import posixpath
import re
import sys
from pathlib import Path
from urllib.parse import urlsplit


# Match the source deck's classic script tags and local stylesheet links.
STYLESHEET = re.compile(r'<link rel="stylesheet" href="([^"]+)">')
SCRIPT = re.compile(r'<script(?: async)? src="([^"]+)"></script>')
SCRIPT_PRELOAD = re.compile(r'^[ \t]*<link rel="preload" as="script" href="([^"]+)">\n', re.M)
CSS_URL = re.compile(r"""url\(\s*(?:(["'])(.*?)\1|([^\s)'"]+))\s*\)""", re.I)


def bundle(entry):
    root = entry.resolve().parent
    html = entry.read_text(encoding="utf-8")
    scripts = set(SCRIPT.findall(html))

    def inline(reference, tag):
        url = urlsplit(reference)
        if url.scheme or url.netloc:
            raise ValueError(f"Expected a local startup file: {reference}")
        source = (root / url.path).resolve()
        if not source.is_relative_to(root):
            raise ValueError(f"Startup file is outside the site: {reference}")
        contents = source.read_text(encoding="utf-8")
        if re.search(rf"</{tag}\b", contents, re.I):
            raise ValueError(f"Cannot safely inline {reference} in a {tag} element")
        if tag == "style":
            directory = source.parent.relative_to(root).as_posix()
            contents = CSS_URL.sub(lambda match: rebase_css_url(match, directory), contents)
        return f'<{tag} data-source="{reference}">\n{contents}\n</{tag}>'

    html = SCRIPT_PRELOAD.sub(lambda match: "" if match[1] in scripts else match[0], html)
    html = STYLESHEET.sub(lambda match: inline(match[1], "style"), html)
    return SCRIPT.sub(lambda match: inline(match[1], "script"), html)


def rebase_css_url(match, directory):
    path = match[2] if match[1] else match[3]
    if path.startswith(("/", "#")) or urlsplit(path).scheme:
        return match[0]
    rebased = posixpath.normpath(posixpath.join(directory, path))
    return f'url("{rebased}")'


if __name__ == "__main__":
    entry = Path(sys.argv[1])
    entry.write_bytes(bundle(entry).encode("utf-8"))
