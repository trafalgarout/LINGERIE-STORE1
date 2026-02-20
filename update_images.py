import os
import re

directory = r'f:\ANTIGRAVITY\LINGERIE STORE\content\luxury-designer'
image_base_path = '/images/content/luxury-designer/'

for filename in os.listdir(directory):
    if filename.endswith('.mdx'):
        filepath = os.path.join(directory, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Get the basename without extension
        basename = os.path.splitext(filename)[0]
        new_image_path = f"{image_base_path}{basename}.jpeg"
        
        # Replace the image field in frontmatter
        # We look for image: '...' or image: "..."
        new_content = re.sub(r'image:\s*[\'"].*?[\'"]', f"image: '{new_image_path}'", content)
        
        if new_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {filename}")
        else:
            print(f"No change for {filename}")
