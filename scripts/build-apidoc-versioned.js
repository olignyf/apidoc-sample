const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Try to read version from apidoc.json, fallback to package.json
let version = null;
const apidocJsonPath = path.join(__dirname, '..', 'apidoc.json');
const packageJsonPath = path.join(__dirname, '..', 'package.json');
if (fs.existsSync(apidocJsonPath)) {
  const apidocJson = JSON.parse(fs.readFileSync(apidocJsonPath, 'utf8'));
  version = apidocJson.version;
}
if (!version && fs.existsSync(packageJsonPath)) {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  version = packageJson.version;
}
if (!version) {
  console.error('Could not determine version from apidoc.json or package.json');
  process.exit(1);
}

const outDir = path.join(__dirname, '..', `apidoc-v${version}`);
console.log(`Generating apidoc to ${outDir}`);
execSync(`npx apidoc -i routes -o "${outDir}"`, { stdio: 'inherit' });
