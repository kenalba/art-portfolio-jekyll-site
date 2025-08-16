# Portfolio Editing Guide

## For Ellee: How to Add/Edit Projects

### Adding a New Project

1. **Go to your GitHub repository**: https://github.com/kenalba/art-portfolio-jekyll-site

2. **Navigate to the right category folder**:
   - Professional work: `collections/_professional/`
   - Illustrations: `collections/_illustration/`
   - Branding: `collections/_branding/`
   - Academic: `collections/_academic/`
   - Personal: `collections/_personal/`

3. **Click "Add file" → "Create new file"**

4. **Name your file**: `project-name.md` (use dashes, no spaces)

5. **Copy this template**:
```yaml
---
title: "Your Project Title"
year: 2025
medium: "Digital Art, Photoshop"
description: "Brief description of your project"
category: "professional"  # Match the folder name
tags: ["space", "NASA", "illustration"]
featured: true  # Shows on homepage
hero_image: "/assets/images/projects/project-name/main-image.jpg"
images:
  - filename: "/assets/images/projects/project-name/image1.jpg"
    alt: "Description for screen readers"
    caption: "Optional caption"
  - filename: "/assets/images/projects/project-name/image2.jpg"
    alt: "Description for screen readers"
    caption: "Optional caption"
---
```

### Adding Images

1. **Create image folder**: `assets/images/projects/project-name/`
2. **Upload images**: Click "Add file" → "Upload files"
3. **Use the paths** in your markdown file (like shown above)

### Editing Existing Projects

1. **Find the project file** in the appropriate `collections/_category/` folder
2. **Click the pencil icon** to edit
3. **Make your changes**
4. **Scroll down and click "Commit changes"**

### Tips

- **Keep image sizes reasonable**: Under 2MB each
- **Use descriptive filenames**: `roman-telescope-logo.jpg` not `IMG_1234.jpg`
- **Featured projects**: Mark your 6 best projects as `featured: true`
- **Tags help with discovery**: Use consistent tags across projects

### The Site Updates Automatically

- Every time you save changes, Netlify rebuilds the site (takes 2-3 minutes)
- Check https://ellee-portfolio.netlify.app to see your changes

This is actually much simpler than any CMS - GitHub's web editor is clean and works great!