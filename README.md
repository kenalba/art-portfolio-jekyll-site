# L.E. Portfolio Website

A professional Jekyll portfolio website optimized for showcasing space, NASA, and technical illustration work.

## Initial Setup

### Prerequisites

This website is built with Jekyll, which requires Ruby. Follow these steps to get everything set up:

### 1. Install Ruby (if needed)

**Check if you have Ruby installed:**
```bash
ruby --version
```

If you see Ruby 2.6 or older, or get an error, you'll need to install a newer version.

**Install Ruby using rbenv (recommended):**

1. **Install rbenv via Homebrew:**
   ```bash
   # If you don't have Homebrew, install it first:
   # /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   
   brew install rbenv ruby-build
   ```

2. **Add rbenv to your shell:**
   ```bash
   echo 'eval "$(rbenv init - zsh)"' >> ~/.zshrc
   source ~/.zshrc
   ```

3. **Install latest Ruby:**
   ```bash
   rbenv install 3.3.6
   rbenv global 3.3.6
   ```

4. **Verify installation:**
   ```bash
   ruby --version  # Should show 3.3.6
   ```

### 2. Install Jekyll Dependencies

1. **Navigate to your portfolio directory:**
   ```bash
   cd path/to/your/portfolio
   ```

2. **Install dependencies locally (recommended):**
   ```bash
   bundle install --path vendor/bundle
   ```
   *This installs gems locally to avoid permission issues*

### 3. Run the Site

1. **Start the development server:**
   ```bash
   bundle exec jekyll serve
   ```

2. **Visit your site:** http://localhost:4000

3. **Stop the server:** Press `Ctrl+C` in the terminal

## Quick Start (After Initial Setup)

Once you've completed the initial setup above, you can start the site anytime with:

```bash
bundle exec jekyll serve
```

## Adding New Projects

### 1. Create Project Files
Each project consists of two parts:
- A markdown file with metadata: `collections/_[category]/[project-name].md`
- An image folder: `collections/_[category]/[project-name]/`

Categories: `_professional`, `_illustration`, `_branding`, `_academic`, `_personal`

### 2. Create Project Metadata File
Create `[project-name].md` in the appropriate category folder:

```yaml
---
title: "Your Project Title"
year: 2024
medium: "Digital Illustration"
description: "Brief description of the project"
tags: ["space", "NASA", "technical"]
featured: true  # Shows on homepage
category: "professional"  # Must match folder name
hero_image: "/assets/images/projects/your-project-title/hero.jpg"  # Full path to hero image
images:
  - filename: "/assets/images/projects/your-project-title/image1.jpg"
    alt: "Description for accessibility"
    caption: "Optional caption"
  - filename: "/assets/images/projects/your-project-title/image2.jpg"
    alt: "Description for accessibility"
    caption: "Optional caption"
extensions:
  client: "NASA"
  project_duration: "4 weeks"
  custom_field: "Any additional info"
---
```

### 3. Add Images to Assets Folder
- Place project images in `assets/images/projects/[project-name]/`
- Use descriptive filenames (no spaces, use hyphens)
- Recommended formats: JPG, PNG
- Hero image should be landscape orientation
- Reference images using full paths in your project metadata

**Example structure:**
```
assets/images/projects/
└── nasa-mission-patches/           ← Project images folder
    ├── artemis-patch.png          ← Hero image
    ├── iss-expedition-patch.png
    └── other-mission-patches.jpg

collections/_professional/
└── nasa-mission-patches.md        ← Project metadata
```

## Site Configuration

Edit `_config.yml` to update:
- Site title and description
- Contact email
- URL (when deploying)

## Customization

### Colors & Styling
Edit variables in `_sass/_variables.scss`:
- `$primary-color`: Main brand color
- `$secondary-color`: Accent color
- `$font-family-base`: Body font

### Content
- **Homepage**: Edit `_layouts/home.html`
- **About page**: Edit `about.md`
- **Contact page**: Edit `contact.md`

## Deployment

### GitHub Pages
1. **Create GitHub Repository:**
   - Create a new repository on GitHub
   - Name it something like `l_e_portfolio` or use your desired name

2. **Update Configuration:**
   - Edit `_config.yml` and update the `url` field:
   ```yaml
   url: "https://yourusername.github.io/your-repo-name"
   ```

3. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio setup"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

4. **Enable GitHub Pages:**
   - Go to your repository settings
   - Scroll to "Pages" section
   - Choose source: "Deploy from a branch"
   - Select branch: `main`
   - Click Save

5. **Wait for deployment** (usually 5-10 minutes)
   - Your site will be available at `https://yourusername.github.io/your-repo-name`

### Custom Domain (Optional)
1. **Add CNAME file** in repository root with your domain name
2. **Update DNS settings** with your domain provider
3. **Update _config.yml:**
   ```yaml
   url: "https://yourdomain.com"
   ```

## Features

- **Clean, professional design** - Custom theme with monospace typography (JetBrains Mono) and purple accent colors
- **Responsive design** - Mobile-first approach that works on all devices
- **Portfolio filtering** - Smooth JavaScript-based category filtering with fade animations
- **Interactive galleries** - Click images to view full-size with lightbox functionality
- **Collections-based content** - Organized by Professional, Illustration, Branding, Academic, and Personal work
- **Extensible metadata** - Custom fields for project details, client info, and technical specifications
- **SEO optimized** - Meta tags, sitemap, and structured data for search engines
- **GitHub Pages ready** - Zero-config deployment to GitHub Pages
- **Fast loading** - Lazy loading, optimized assets, and minimal JavaScript

## File Structure

```
├── collections/           # Project content organized by category
│   ├── _professional/    # Professional work
│   │   ├── project1.md   # Project metadata
│   │   ├── project1/     # Project images
│   │   ├── project2.md
│   │   └── project2/
│   ├── _illustration/    # Illustration work
│   ├── _branding/        # Branding projects
│   ├── _academic/        # Academic/educational work
│   └── _personal/        # Personal projects
├── _layouts/             # Page templates
├── _includes/            # Reusable components
├── _sass/               # Stylesheets
├── assets/              # Static assets (CSS, JS, images)
├── _config.yml          # Site configuration
├── index.md             # Homepage
├── portfolio.html       # Portfolio page
├── about.md             # About page
├── contact.md           # Contact page
├── TODO.md              # Launch checklist and future enhancements
└── README.md            # This file
```

## Troubleshooting

### Common Issues

**"Permission denied" errors when installing gems:**
- Use `bundle install --path vendor/bundle` instead of `bundle install`

**"Failed to build gem native extension":**
- Update Ruby to version 3.0+ using the rbenv instructions above
- Make sure Xcode command line tools are installed: `xcode-select --install`

**Site not updating when you make changes:**
- Stop the server (`Ctrl+C`) and restart: `bundle exec jekyll serve`
- Clear the cache: `bundle exec jekyll clean` then `bundle exec jekyll serve`

**Ruby version issues:**
- Check your version: `ruby --version`
- If using rbenv, ensure it's working: `which ruby` (should show path with `.rbenv`)
- Restart your terminal after rbenv installation

### Getting Help

- **Jekyll Documentation:** https://jekyllrb.com/docs/
- **Ruby Installation Issues:** https://github.com/rbenv/rbenv#installation
- **GitHub Pages Deployment:** https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll

## Future Enhancements

### Portfolio Filter Animations
The current portfolio filtering uses simple fade animations. For a more polished experience, consider implementing:

- **Smooth grid transitions** - Items sliding out left while new items enter from the right
- **Staggered animations** - Sequential entrance effects for multiple items
- **CSS Grid animation library** - Using libraries like `animate.css` or `framer-motion` for React-based implementations

The challenge with CSS Grid animations is maintaining consistent layout without jumping during transitions. Current implementation prioritizes reliability over complexity.

**Exercise for the reader:** Implement smooth directional animations for portfolio filtering that don't cause layout reflow issues.

## Launch Checklist

Before going live, see **[TODO.md](TODO.md)** for a comprehensive checklist covering:
- Content setup and image organization
- Metadata updates and featured project curation  
- GitHub Pages deployment
- SEO optimization and professional polish
- Future enhancement ideas (image carousels, contact forms, etc.)

## Support

For technical issues or questions about using this portfolio system, refer to the resources above or create an issue in the repository.