#!/usr/bin/env node

/**
 * List all icon categories with icon counts
 * Useful for understanding what categories are available
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pluginRoot = path.resolve(__dirname, '../..');
const lucideIconsDir = path.join(pluginRoot, 'dev/icons/lucide');
const lucideLabIconsDir = path.join(pluginRoot, 'dev/icons/lucide-lab');

console.log('📊 Lucide Icon Categories\n');

const categoryStats = new Map();

function processDirectory(directory, source) {
	if (!fs.existsSync(directory)) {
		return;
	}

	const files = fs.readdirSync(directory).filter(f => f.endsWith('.json'));

	files.forEach(file => {
		const jsonPath = path.join(directory, file);
		try {
			const metadata = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
			const categories = metadata.categories || [];

			categories.forEach(cat => {
				if (!categoryStats.has(cat)) {
					categoryStats.set(cat, {
						lucide: 0,
						lucideLab: 0,
						total: 0
					});
				}
				const stats = categoryStats.get(cat);
				if (source === 'lucide') {
					stats.lucide++;
				} else {
					stats.lucideLab++;
				}
				stats.total++;
			});
		} catch (e) {
			// Skip invalid JSON
		}
	});
}

processDirectory(lucideIconsDir, 'lucide');
processDirectory(lucideLabIconsDir, 'lucide-lab');

// Sort by total count descending
const sorted = Array.from(categoryStats.entries())
	.sort((a, b) => b[1].total - a[1].total);

console.log('Category                     | Total  | Lucide | Lab');
console.log('---------------------------- | ------ | ------ | ----');

sorted.forEach(([category, stats]) => {
	const catName = category.padEnd(28);
	const total = String(stats.total).padStart(6);
	const lucide = String(stats.lucide).padStart(6);
	const lab = String(stats.lucideLab).padStart(4);
	console.log(`${catName} | ${total} | ${lucide} | ${lab}`);
});

console.log('\n📈 Total Categories:', categoryStats.size);
console.log('🎨 Icons with categories:', sorted.reduce((sum, [_, stats]) => sum + stats.total, 0), 'assignments');


