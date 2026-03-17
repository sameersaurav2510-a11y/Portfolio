# Deployment Fix TODO

## Plan Steps:
1. [x] Create .npmrc ✅
2. [x] Removed @studio-freight/lenis via npm uninstall ✅
3. [x] Clean install (del node_modules package-lock.json && npm install) ✅
4. [x] Regenerated lockfile ✅

**Final manual steps (run now):**
```
git add .
git commit -m "fix(deploy): remove lenis + clean deps (.npmrc)"
git push
```

Vercel deploys clean! 🚀
