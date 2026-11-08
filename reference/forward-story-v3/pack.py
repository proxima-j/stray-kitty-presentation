from pathlib import Path
from base64 import b64encode
import mimetypes, re
base=Path(__file__).parent
page=(base/'index.html').read_text(encoding='utf-8')
css=(base/'style.css').read_text(encoding='utf-8')
js=(base/'script.js').read_text(encoding='utf-8')
page=page.replace('<link rel="stylesheet" href="style.css">',f'<style>\n{css}\n</style>')
page=page.replace('<script src="script.js"></script>',f'<script>\n{js}\n</script>')
def embed(m):
 name=m.group(1)
 data=(base/name).read_bytes()
 mime=mimetypes.guess_type(name)[0] or 'application/octet-stream'
 if name.endswith('.svg'):mime='image/svg+xml'
 if name.endswith('.webp'):mime='image/webp'
 return 'src="data:'+mime+';base64,'+b64encode(data).decode('ascii')+'"'
page=re.sub(r'src="(assets/[^\"]+)"',embed,page)
page=re.sub(r'poster="(assets/[^\"]+)"',lambda m:'poster="data:image/jpeg;base64,'+b64encode((base/m.group(1)).read_bytes()).decode('ascii')+'"',page)
out=Path('/mnt/data/Stray-Kitty-Forward-Story-v3-Smooth.html')
out.write_text(page,encoding='utf-8')
print(out, round(out.stat().st_size/1e6,2),'MB')
