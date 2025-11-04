# Images Directory

Add your images here following this structure:

## Folder Structure

```
public/
  images/
    hero/
      - hero-background.jpg (or .png, .webp)
      - Used for the main hero section background
      
    featured/
      - featured-1.jpg
      - featured-2.jpg
      - featured-3.jpg
      - Used for featured posts on the home page
      
    gallery/
      - gallery-1.jpg
      - gallery-2.jpg
      - gallery-3.jpg
      - ... (up to 8 images)
      - Used for the gallery section
      
    profile/
      - profile.jpg
      - Used for profile picture in link hub
```

## How to Add Images

1. **Add your image files** to the appropriate folders above
2. **Update `config/creator.ts`** to reference your images:
   - Local images: Use `/images/hero/hero-background.jpg`
   - External URLs: Use full URLs like `https://example.com/image.jpg`

## Image Recommendations

- **Hero background**: 1920x1080px or larger (landscape)
- **Featured posts**: 800x600px (16:9 ratio)
- **Gallery images**: 600x600px (square, 1:1 ratio)
- **Profile picture**: 400x400px (square, 1:1 ratio)
- **Format**: JPG or WebP for photos, PNG for graphics with transparency
- **Optimization**: Compress images before uploading to keep file sizes small

## Example

After adding `hero-background.jpg` to `public/images/hero/`, update `config/creator.ts`:

```typescript
hero: {
  background: "/images/hero/hero-background.jpg"
}
```

