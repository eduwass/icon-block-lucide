# Icon Block - Lucide Icons

A WordPress plugin that adds the complete [Lucide](https://lucide.dev) icon library to [The Icon Block](https://wordpress.org/plugins/icon-block/) by Nick Diego.

## ✨ Features

- **2,010+ icons** from Lucide and Lucide Lab repositories
- **48 categories** for easy organization (medical, accessibility, devices, text, etc.)
- **Searchable keywords** from Lucide's official metadata
- **Optimized SVGs** for performance using SVGO
- **Auto-generated** from official Lucide repositories with proper escaping
- **Fully integrated** with Icon Block's category and search system

## 📦 Installation

### For WordPress Users

1. Place this plugin folder in `wp-content/plugins/`
2. Activate the plugin in WordPress Admin → Plugins
3. The icons will automatically appear in the Icon Block
4. Browse icons by category or search by keyword

### For Developers

If you want to regenerate the plugin with the latest icons from Lucide:

```bash
npm run build
```

That's it! This single command will:
1. ✅ Download the latest icons from Lucide and Lucide Lab repositories
2. ✅ Install any missing dependencies
3. ✅ Generate the `register.js` file with all icons, categories, and metadata
4. ✅ Optimize all SVGs for performance
5. ✅ Make the plugin ready to use

## 🎨 Icon Categories

Icons are organized into 48 categories:

### Top Categories by Icon Count
- **Development** (275 icons) - Code, git, terminal, debugging
- **Text** (273 icons) - Typography, formatting, editing
- **Arrows** (215 icons) - Directional indicators, navigation
- **Devices** (196 icons) - Electronics, hardware, gadgets
- **Gaming** (195 icons) - Controllers, consoles, esports
- **Files** (176 icons) - Documents, folders, storage
- **Design** (172 icons) - Creative tools, graphics
- **Social** (161 icons) - Social media, sharing, messaging
- **Layout** (153 icons) - Grid, alignment, spacing
- **Food & Beverage** (147 icons) - Meals, drinks, restaurants

### All Categories
accessibility • account • animals • arrows • brands • buildings • charts • communication • connectivity • currency • cursors • design • development • devices • emoji • files • finance • food-beverage • furniture • gaming • home • layout • mail • maps • math • maths • medical • money • multimedia • nature • navigation • notifications • people • photography • science • seasons • security • shapes • shopping • social • sports • sustainability • text • time • tools • transportation • travel • weather

All categories are prefixed with `lucide-` in the Icon Block to avoid conflicts (e.g., `lucide-medical`, `lucide-text`).

## 🛠️ Development Commands

```bash
# Generate everything (recommended)
npm run build

# Download icons only
npm run download

# Generate register.js only (requires icons already downloaded)
npm run generate

# List all categories with icon counts
npm run categories

# Validate generated JavaScript
npm run validate
```

## 📁 Project Structure

```
wp-content/plugins/icon-block-lucide/
├── README.md                  # This file
├── package.json               # Main build scripts
├── icon-block-lucide.php      # WordPress plugin file
├── register.js                # Generated: 2,010 icons (14,000+ lines)
├── .gitignore                 # Ignores dev/ folder
│
├── dev/                       # Development folder (git-ignored)
│   ├── icons/                # Downloaded icons
│   │   ├── lucide/          # 1,637 icons from main repo
│   │   └── lucide-lab/      # 373 experimental icons
│   └── scripts/              # Build scripts
│       ├── download-icons.sh
│       ├── generate-register.js
│       ├── list-categories.js
│       └── package.json
│
└── prepare-svgs-for-icon-block/  # Original tool (reference)
```

## 🔧 How It Works

### 1. Icon Download
- Uses Git sparse checkout to efficiently download only the `icons/` directory
- Pulls from both repositories:
  - `lucide-icons/lucide` (main, stable icons)
  - `lucide-icons/lucide-lab` (experimental icons)
- Each icon includes:
  - `.svg` file - The actual icon
  - `.json` file - Metadata with categories, tags, contributors

### 2. Code Generation
The generator script (`dev/scripts/generate-register.js`):
- Reads all SVG files and their JSON metadata
- Extracts categories and keywords from JSON files
- Optimizes SVGs using SVGO (removes unnecessary attributes, keeps viewBox)
- Properly escapes special characters (quotes, apostrophes)
- Generates a complete `register.js` file with:
  - All icon definitions with metadata
  - Category definitions with translations
  - WordPress hook registration via `iconBlock.icons` filter

### 3. WordPress Integration
The generated code:
- Registers with The Icon Block using WordPress hooks
- Prefixes categories with `lucide-` to avoid conflicts
- Makes icons searchable by keywords
- Supports all Icon Block features (sizing, colors, etc.)

## 📊 Generated Output Stats

- **Total Icons**: 2,010 (1,637 Lucide + 373 Lucide Lab)
- **Categories**: 48 unique categories
- **Category Assignments**: 4,140 (icons can have multiple categories)
- **Keywords**: Thousands of searchable terms
- **File Size**: ~14,000 lines of optimized JavaScript

## 🔄 Updating to Latest Icons

When Lucide releases new icons:

```bash
npm run build
```

This regenerates everything with the latest icons from the Lucide repositories.

## 🧪 Testing

```bash
# Validate JavaScript syntax
npm run validate

# Check what categories exist
npm run categories

# View icon counts by category
cd dev/scripts
npm run list-categories
```

## 💡 Example Usage

After activating the plugin in WordPress:

1. Add an Icon Block to your page/post
2. Browse icons by category (e.g., "Lucide Medical", "Lucide Text")
3. Or search by keyword (e.g., "heart", "code", "arrow")
4. Customize size, color, and alignment as needed

## 🎯 Key Features for Developers

### Proper Escaping
Handles special characters safely:
- Apostrophes in titles: "Master's Degree" → "Master\\'s Degree"
- Quotes in keywords and SVG attributes
- Unicode characters preserved

### SVG Optimization
- Removes `width` and `height` attributes for responsive scaling
- Keeps `viewBox` for proper aspect ratios
- Removes unnecessary metadata
- Optimizes path data

### Metadata Preservation
- Every icon includes categories from Lucide's official metadata
- Keywords/tags enable powerful search functionality
- Contributor information preserved in comments

## 📚 Resources

- **Lucide Icons**: https://lucide.dev
- **Icon Block Plugin**: https://wordpress.org/plugins/icon-block/
- **Custom Icons Guide**: https://nickdiego.com/adding-custom-icons-to-the-icon-block/
- **Lucide Repository**: https://github.com/lucide-icons/lucide
- **Lucide Lab Repository**: https://github.com/lucide-icons/lucide-lab

## 🙏 Credits

- **Icons**: [Lucide Icons](https://lucide.dev) - Beautiful & consistent icon toolkit by the community
- **Icon Block Plugin**: [Nick Diego](https://nickdiego.com/) - The Icon Block for WordPress
- **Generator Inspiration**: [prepare-svgs-for-icon-block](https://github.com/thetwopct/prepare-svgs-for-icon-block) by James Hunt

## 📄 License

This integration is MIT licensed. Lucide icons are ISC licensed. See individual repositories for details.
