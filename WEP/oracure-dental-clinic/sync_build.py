import os

clinic_dir = r"C:\Users\viswajeet\.gemini\antigravity\scratch\oracure-dental-clinic"
brain_dir = r"C:\Users\viswajeet\.gemini\antigravity\brain\75ce956c-a08a-4573-bcc1-e756a95fe213"

with open(os.path.join(clinic_dir, "index.html"), "r", encoding="utf-8") as f:
    html = f.read()

with open(os.path.join(clinic_dir, "style.css"), "r", encoding="utf-8") as f:
    css = f.read()

with open(os.path.join(clinic_dir, "script.js"), "r", encoding="utf-8") as f:
    js = f.read()

# Replace css link and script link
s_html = html.replace('<link rel="stylesheet" href="style.css">', f"<style>\n{css}\n</style>")
s_html = s_html.replace('<script src="script.js"></script>', f"<script>\n{js}\n</script>")

with open(os.path.join(clinic_dir, "standalone.html"), "w", encoding="utf-8") as f:
    f.write(s_html)

with open(os.path.join(brain_dir, "oracure_website.html"), "w", encoding="utf-8") as f:
    f.write(s_html)

print("Synchronized standalone.html and oracure_website.html successfully!")
