import re
import os

with open('legacy_code/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract body contents
body_match = re.search(r'<body[^>]*>(.*?)</body>', content, re.DOTALL)
if body_match:
    body_content = body_match.group(1)
else:
    body_content = content

# Basic JSX conversions
# 1. class -> className
jsx_content = body_content.replace('class=', 'className=')
# 2. for -> htmlFor
jsx_content = jsx_content.replace('for=', 'htmlFor=')
# 3. Add closing tags for img
jsx_content = re.sub(r'<img([^>]*?)(?<!/)>', r'<img\1 />', jsx_content)
# 4. Add closing tags for input
jsx_content = re.sub(r'<input([^>]*?)(?<!/)>', r'<input\1 />', jsx_content)
# 5. Fix comments <!-- --> to {/* */}
jsx_content = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', jsx_content, flags=re.DOTALL)
# 6. Change style attributes
# This is tricky, we'll try to find any style="width: 50%" and change it
# Or we can just strip styles or ignore it if there are none. The legacy html usually doesn't have inline styles.

# Remove preloader script at bottom
jsx_content = re.sub(r'<script.*?</script>', '', jsx_content, flags=re.DOTALL)

# Wrap in default function
page_js = f"""import Link from 'next/link';
import Script from 'next/script';

export default function Home() {{
  return (
    <>
      {{/* We embed the original script logic safely */}}
      <Script src="/script.js" strategy="lazyOnload" />
      
      {jsx_content}
    </>
  );
}}
"""

with open('src/app/page.js', 'w', encoding='utf-8') as f:
    f.write(page_js)

# Also copy script.js to public/ so Next.js can load it
with open('legacy_code/script.js', 'r', encoding='utf-8') as f:
    script_content = f.read()
with open('public/script.js', 'w', encoding='utf-8') as f:
    f.write(script_content)

print("Successfully converted legacy HTML to JSX in src/app/page.js!")
