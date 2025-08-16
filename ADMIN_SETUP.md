# Decap CMS Admin Setup Guide

This portfolio now includes a web-based admin interface that makes it easy to add and edit projects without dealing with code or file management.

## What You Get

- **Web interface** at `your-site.com/admin`
- **Drag & drop image uploads** 
- **Form-based project creation** (no YAML to learn)
- **Live preview** of changes
- **Automatic GitHub commits** when you publish
- **Mobile-friendly** editing

## One-Time Setup (GitHub Pages)

### Step 1: Enable GitHub Pages
1. Go to your repository settings
2. Under "Pages", select "Deploy from a branch"
3. Choose `main` branch
4. Save

### Step 2: Enable Git Gateway (Authentication)
1. Go to [Netlify](https://netlify.com) and sign up (free)
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub account
4. Select your portfolio repository
5. Deploy settings:
   - Build command: `bundle exec jekyll build`
   - Publish directory: `_site`
   - Click "Deploy site"

### Step 3: Enable Identity & Git Gateway
1. In your Netlify dashboard, go to "Identity" tab
2. Click "Enable Identity"
3. Under "Registration preferences", choose "Invite only"
4. Under "Git Gateway", click "Enable Git Gateway"
5. This connects the CMS to your GitHub repo

### Step 4: Invite Yourself
1. In Netlify Identity tab, click "Invite users"
2. Enter your email address
3. You'll receive an invite email - accept it
4. Set your password

## Alternative Setup (GitHub Only)

If you prefer not to use Netlify, you can use GitHub's authentication:

### Option A: Update config for GitHub backend
Replace the backend section in `/admin/config.yml` with:

```yaml
backend:
  name: github
  repo: your-username/l_e_portfolio  # Replace with your repo
  branch: main
```

Then you'll log in directly with your GitHub account at `/admin`.

## Using the Admin Interface

### Accessing the Admin
- **With Netlify**: Go to `your-netlify-site.netlify.app/admin`
- **With GitHub Pages**: Go to `your-username.github.io/l_e_portfolio/admin`

### Adding a New Project
1. Log into the admin interface
2. Choose the project type (Professional, Illustration, etc.)
3. Click "New [Type] Work"
4. Fill out the form:
   - **Title**: Project name
   - **Year**: Project year
   - **Medium**: Tools/techniques used
   - **Description**: Brief project description
   - **Tags**: Keywords (press Enter after each)
   - **Featured**: Toggle to show on homepage
   - **Hero Image**: Main project image for portfolio grid

### Adding Images
- **Single images**: Use "Project Images" section
- **For carousels**: Use "Advanced Gallery Layout" → "Image Carousel"
- **For mixed content**: Use "Advanced Gallery Layout" to combine images, text, and carousels

### Publishing Changes
1. Fill out your project form
2. Click "Publish"
3. Changes are committed to GitHub automatically
4. GitHub Pages rebuilds your site (takes 2-3 minutes)

## Tips for Ellee

### Image Best Practices
- **File size**: Keep images under 2MB for faster loading
- **Naming**: Use descriptive names (no spaces - use dashes)
- **Format**: JPG for photos, PNG for graphics with transparency
- **Dimensions**: Hero images work best at 1200x800px or similar

### Project Organization
- Use **tags** consistently across projects for better discoverability
- Mark your **6 best projects** as "Featured" for the homepage
- Use **clear descriptions** - they help with SEO and visitor understanding

### Content Strategy
- **Professional**: Client work, official projects, commissioned pieces
- **Illustration**: Personal artwork, creative projects, artistic pieces  
- **Branding**: Logo design, identity work, brand systems
- **Academic**: School projects, research work, educational materials
- **Personal**: Experimental work, personal interests, side projects

## Troubleshooting

### "Error: This repo does not have Git Gateway enabled"
- Make sure you completed the Netlify Git Gateway setup
- Or switch to GitHub backend (see Alternative Setup above)

### "Unable to load config.yml"
- Check that the `/admin` folder is properly deployed
- Verify the config file syntax is correct

### Images not uploading
- Check your media folder settings in `config.yml`
- Ensure you have write permissions to the repository

### Changes not appearing on site
- GitHub Pages can take 5-10 minutes to rebuild
- Check the "Actions" tab in your GitHub repo for build status
- Clear your browser cache and refresh

## Getting Help

- **Decap CMS Docs**: https://decapcms.org/docs/
- **GitHub Pages**: https://docs.github.com/en/pages
- **Netlify Identity**: https://docs.netlify.com/visitor-access/identity/

The admin interface is designed to be intuitive, but don't hesitate to experiment - you can always undo changes through GitHub if needed!