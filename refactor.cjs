const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

function refactorFile(filePath) {
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) return;
  
  let content = fs.readFileSync(filePath, 'utf-8');
  let original = content;

  // Replace react-router-dom imports
  content = content.replace(/import\s+\{([^}]+)\}\s+from\s+['"]react-router-dom['"];?/g, (match, imports) => {
    let nextImports = [];
    let navImports = [];
    
    if (imports.includes('Link')) {
      nextImports.push(`import Link from 'next/link';`);
    }
    
    if (imports.includes('useNavigate')) navImports.push('useRouter');
    if (imports.includes('useLocation')) navImports.push('usePathname');
    
    let res = nextImports.join('\n');
    if (navImports.length > 0) {
      if (res) res += '\n';
      res += `import { ${navImports.join(', ')} } from 'next/navigation';`;
    }
    
    // Some files might have imported Navigate or Outlet, remove them or replace manually.
    // Outlet -> {children} is handled manually for Layouts.
    return res;
  });

  // Replace <Link to="..."> with <Link href="...">
  content = content.replace(/<Link\s+([^>]*?)to=/g, '<Link $1href=');
  
  // Replace useNavigate -> useRouter
  content = content.replace(/useNavigate\(\)/g, 'useRouter()');
  // Usually it is const navigate = useNavigate();
  // We can just keep 'const navigate = useRouter();' and it works if they call navigate.push, wait!
  // React Router navigate('/path') is Next.js router.push('/path').
  // Let's replace `navigate(` with `navigate.push(`
  // Wait, if it's named navigate, `navigate('/foo')` becomes `navigate.push('/foo')`.
  content = content.replace(/(\s)navigate\(([^)]+)\)/g, '$1navigate.push($2)');
  
  // Replace useLocation -> usePathname
  // React Router: const location = useLocation(); location.pathname
  // Next.js: const pathname = usePathname(); 
  // Let's replace useLocation() with usePathname()
  // And replace location.pathname with just pathname.
  if (content.includes('usePathname()')) {
    content = content.replace(/const\s+location\s*=\s*usePathname\(\)/g, 'const pathname = usePathname()');
    content = content.replace(/location\.pathname/g, 'pathname');
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Refactored:', filePath);
  }
}

walkDir('./src/app', refactorFile);
walkDir('./src/components', refactorFile);
walkDir('./src/hooks', refactorFile);
console.log('Refactoring complete.');
