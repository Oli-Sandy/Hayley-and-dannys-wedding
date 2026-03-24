# Template Structure (Consolidated)

This wedding website uses a simple, consolidated template system where all common elements are directly included in each page.

## Project Structure

```
Project_h.t/
├── base.html                    # Template reference (shows structure)
├── index.html                   # Home page
├── our_story.html               # Our Story page
├── vegas_2026.html              # Vegas 2026 page
├── uk_party.html                # UK Party page
├── honeymoon_and_gifts.html     # Honeymoon & Gifts page
└── static/
    ├── style.css                # Global styles
    └── [images and assets]
```

## How It Works

All pages follow the same structure defined in `base.html`:
1. **Head** - Meta tags, Bootstrap CSS, and custom styles
2. **Navbar** - Navigation bar with menu links (same on all pages)
3. **Main Content** - Page-specific content
4. **Footer** - Footer section (same on all pages)

## How to Update Common Elements

### Updating the Navigation Bar
Edit the `<nav>` section in base.html and copy to all other HTML pages. It appears after `<body>` tag.

### Updating the Footer
Edit the `<footer>` section in base.html and copy to all other HTML pages. It appears before the closing `</body>` tag.

### Updating Global Styles
Edit `static/style.css` - changes apply site-wide to all pages

## How All Pages Are Structured

Each page copies the navbar and footer from `base.html` and keeps their unique content in the `<main id="main-content">` section:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Same head for all pages -->
</head>
<body style="padding-top: 0;">
    <!-- Navbar (same for all pages) -->
    <nav class="navbar navbar-expand-lg w-100 fixed-top">
        ...
    </nav>

    <!-- Main content (unique to each page) -->
    <main id="main-content" class="container py-4">
        <!-- PAGE-SPECIFIC CONTENT HERE -->
    </main>

    <!-- Footer (same for all pages) -->
    <footer class="footer">
        ...
    </footer>

    <script src="..."></script>
</body>
</html>
```

## Adding a New Page

1. Copy `base.html` and rename it (e.g., `new_page.html`)
2. Change the `<title>` tag to your page name
3. Add your unique content inside `<main id="main-content">` section
4. Update navigation links if needed (in the navbar)

## Notes

- This is a static HTML site - all pages are independent files
- The navbar and footer are duplicated across files for simplicity
- To update navbar/footer globally, update all page files with the new code
- If you need more advanced templating, consider using a static site generator like Hugo, Jekyll, or 11ty

