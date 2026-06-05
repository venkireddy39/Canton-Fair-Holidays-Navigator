const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function (file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('.jsx') || file.endsWith('.css') || file.endsWith('.js')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('d:/Holidays Navigator/Canton Fair/src');
let changedFiles = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    // Also replace fixed widths in inline styles or css if they are causing issues, 
    // but the main issue is minmax(280px, 1fr) etc.
    let newContent = content.replace(/minmax\(\s*(\d+px)\s*,/g, 'minmax(min(100%, $1),');

    // Check for width: calc(100vw - 32px)
    newContent = newContent.replace(/width:\s*calc\(100vw/g, 'width: calc(100%');

    if (content !== newContent) {
        fs.writeFileSync(file, newContent, 'utf8');
        console.log('Updated', file);
        changedFiles++;
    }
});

console.log('Total files changed:', changedFiles);
