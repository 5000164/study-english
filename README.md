# study-english

## ブログ記事追加手順

```bash
mkdir -p src/pages/$(date "+%Y/%-m/%-d")
echo "---\ntitle: \"\"\ndate: \""$(date --iso-8601=seconds)"\"\n---" > src/pages/$(date "+%Y/%-m/%-d")/filename.md
```
