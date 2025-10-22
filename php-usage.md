# Lucide Icons PHP - Quick Reference

## 🚀 Quick Start

```php
// Load the icon registry (only where you need it to avoid memory overhead)
require_once WP_CONTENT_DIR . '/plugins/icon-block-lucide/lucide-icons.php';

// Render an icon
echo render_lucide_icon('alarm-clock-check', 'w-6 h-6 text-blue-500');
```

> **💡 Tip**: The PHP file is **not auto-loaded** to avoid ~1-2 MB memory overhead on every page. Only require it in files where you actually use icons (e.g., dashboard forms, admin pages).

> **📦 Standalone Use**: If you just need the icons and not the WordPress block integration, you can copy `lucide-icons.php` to your project - it works standalone!

## 📦 Available Functions

| Function | Usage | Returns |
|----------|-------|---------|
| `get_lucide_icons()` | Get all icons and categories | `array` |
| `get_lucide_icon($name)` | Get specific icon | `array\|null` |
| `render_lucide_icon($name, $class, $size)` | Render SVG | `string` |
| `get_lucide_icons_by_category($cat)` | Filter by category | `array` |
| `search_lucide_icons($query)` | Search icons | `array` |

## 💡 Common Use Cases

### Store Icon in Database
```php
// Save just the name
update_post_meta($post_id, 'icon', 'alarm-clock-check');

// Render later
$icon = get_post_meta($post_id, 'icon', true);
echo render_lucide_icon($icon, 'w-8 h-8');
```

### Icon Picker Dropdown
```php
<select name="icon">
    <?php foreach (get_lucide_icons()['icons'] as $icon): ?>
        <option value="<?= esc_attr($icon['name']) ?>">
            <?= esc_html($icon['title']) ?>
        </option>
    <?php endforeach; ?>
</select>
```

### Search Icons
```php
$results = search_lucide_icons('clock');
// Returns 42 icons with 'clock' in name/title/keywords
```

### Filter by Category
```php
$time_icons = get_lucide_icons_by_category('time');
// Returns 67 time-related icons
```

## 🔧 Regenerate File

```bash
cd wp-content/plugins/icon-block-lucide/dev/scripts
npm run generate-php
```

## 📊 Stats

- **Icons**: 2010
- **Categories**: 48
- **File Size**: 1.05 MB (on disk)
- **Memory Impact**: 
  - ~1-2 MB when file is loaded (parsed code)
  - ~8 MB additional when `get_lucide_icons()` is called (icon data)
- **Lookup Speed**: ~0.0006 ms per icon

> **Performance Tip**: Only `require_once` this file in pages/forms where you actually need icons. Don't load it globally to avoid unnecessary memory usage on every page load.

## 📚 Full Documentation

See [README.md](README.md) for complete plugin documentation including installation, development commands, and WordPress block integration.

## 🎨 Categories

accessibility, account, animals, arrows, brands, buildings, charts, communication, connectivity, currency, cursors, design, development, devices, emoji, files, finance, food-beverage, furniture, gaming, home, layout, mail, maps, math, medical, money, multimedia, nature, navigation, notifications, people, photography, science, seasons, security, shapes, shopping, social, sports, sustainability, text, time, tools, transportation, travel, weather
