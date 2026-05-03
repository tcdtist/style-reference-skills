#!/usr/bin/env node

/**
 * Fetch DESIGN.md files from getdesign.md and designmd.app
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const SKILLS_DIR = path.join(__dirname, '../skills');
const TMP_DIR = path.join(__dirname, '../tmp');

// Brands from getdesign.md
const GETDESIGN_BRANDS = [
  'apple', 'linear', 'vercel', 'stripe', 'figma', 'notion', 
  'supabase', 'airbnb', 'spotify', 'uber', 'cursor', 'framer', 
  'claude', 'sentry', 'raycast', 'expo', 'binance', 'airtable', 'bmw-m'
];

// Ensure directories exist
fs.mkdirSync(SKILLS_DIR, { recursive: true });
fs.mkdirSync(TMP_DIR, { recursive: true });

/**
 * Download file from URL
 */
function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

/**
 * Fetch DESIGN.md from getdesign.md
 */
async function fetchFromGetdesign() {
  console.log('Fetching from getdesign.md...');
  
  for (const brand of GETDESIGN_BRANDS) {
    const url = `https://getdesign.md/${brand}/design-md`;
    const dest = path.join(TMP_DIR, `${brand}-getdesign.md`);
    
    try {
      console.log(`  Fetching ${brand}...`);
      await downloadFile(url, dest);
      console.log(`  ✓ ${brand} downloaded`);
    } catch (err) {
      console.log(`  ✗ ${brand} failed: ${err.message}`);
    }
  }
}

/**
 * Fetch DESIGN.md from designmd.app
 * Note: designmd.app requires manual browsing, this is a placeholder
 */
async function fetchFromDesignmd() {
  console.log('Fetching from designmd.app...');
  console.log('  Note: designmd.app requires manual browsing');
  console.log('  Visit https://designmd.app/en/library to download manually');
}

/**
 * Main
 */
async function main() {
  try {
    await fetchFromGetdesign();
    await fetchFromDesignmd();
    console.log('\nFetch complete!');
    console.log(`Files saved to: ${TMP_DIR}`);
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
}

main();
