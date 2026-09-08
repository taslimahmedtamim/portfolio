import re

with open('src/app/page.js', 'r', encoding='utf-8') as f:
    content = f.read()

def style_replacer(match):
    style_str = match.group(1)
    pairs = []
    for part in style_str.split(';'):
        part = part.strip()
        if not part: continue
        key, val = part.split(':', 1)
        key = key.strip()
        val = val.strip()
        pairs.append(f"'{key}': '{val}'")
    
    obj_str = ", ".join(pairs)
    return f"style={{{{{obj_str}}}}}"

content = re.sub(r'style="([^"]*)"', style_replacer, content)

content = content.replace('stroke-width=', 'strokeWidth=')
content = content.replace('stroke-linecap=', 'strokeLinecap=')
content = content.replace('stroke-linejoin=', 'strokeLinejoin=')
content = content.replace('viewBox=', 'viewBox=')
content = content.replace('autocomplete=', 'autoComplete=')
content = content.replace('class=', 'className=')

with open('src/app/page.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed inline styles and SVG attributes in page.js!")
