const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    if (fs.statSync(dirPath).isDirectory()) {
      walkDir(dirPath, callback);
    } else {
      callback(dirPath);
    }
  });
}

function addUseClient(filePath) {
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) return;
  
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Skip if already has use client
  if (content.includes('"use client"') || content.includes("'use client'")) return;

  // Check if it needs use client
  const needsClient = /useState|useEffect|useRouter|usePathname|useContext|useRef|useCallback|useMemo|useReducer|framer-motion|lucide-react|@headlessui/.test(content);
  
  if (needsClient) {
    content = '"use client";\n\n' + content;
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Added use client to:', filePath);
  }
}

walkDir('./src/app/(main)', addUseClient);
walkDir('./src/components', addUseClient);
walkDir('./src/hooks', addUseClient);
console.log('Done adding use client');
