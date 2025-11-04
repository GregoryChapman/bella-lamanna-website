# 🖼️ Image Setup Guide

This guide explains how to add your images to the website.

## 📁 Where to Put Images

I've created organized folders for you:

```
public/
  images/
    hero/          → Hero section background
    featured/      → Featured posts images (3 images)
    gallery/       → Gallery section images (6-8 images)
    profile/       → Profile picture for link hub
```

## 🚀 Quick Start

### Option 1: Local Images (Recommended)

1. **Add your image files** to the appropriate folders:
   - Hero background → `public/images/hero/hero-background.jpg`
   - Profile picture → `public/images/profile/profile.jpg`
   - Featured posts → `public/images/featured/featured-1.jpg`, `featured-2.jpg`, `featured-3.jpg`
   - Gallery images → `public/images/gallery/gallery-1.jpg`, `gallery-2.jpg`, etc.

2. **Update `config/creator.ts`** with your image paths:

```typescript
// Hero background
heroImage: "/images/hero/hero-background.jpg",

// Profile image
profileImage: "/images/profile/profile.jpg",

// Featured posts
featured: [
  { 
    title: "Mini hike on Lake Minnewanka 🏔️💪", 
    subtitle: "Adventure & travel content", 
    href: "https://instagram.com/Bella.lamannaa", 
    image: "/images/featured/featured-1.jpg"  // ← Update this
  },
  // ... repeat for featured-2.jpg, featured-3.jpg
],

// Gallery images
gallery: [
  "/images/gallery/gallery-1.jpg",
  "/images/gallery/gallery-2.jpg",
  "/images/gallery/gallery-3.jpg",
  // ... add up to 8 images
],
```

### Option 2: External URLs

If your images are hosted elsewhere (Instagram, CDN, etc.), you can use full URLs:

```typescript
heroImage: "https://example.com/your-image.jpg",
profileImage: "https://example.com/profile.jpg",
```

## 📐 Recommended Image Sizes

- **Hero Background**: 1920x1080px (16:9 ratio, landscape)
- **Featured Posts**: 800x600px (4:3 ratio)
- **Gallery Images**: 600x600px (1:1 ratio, square)
- **Profile Picture**: 400x400px (1:1 ratio, square)

## 🎨 Image Formats

- **JPG**: Best for photos
- **WebP**: Best for web (smaller file sizes)
- **PNG**: Use only if you need transparency

## ⚡ Optimization Tips

Before uploading:
1. Compress images using tools like:
   - [TinyPNG](https://tinypng.com/)
   - [Squoosh](https://squoosh.app/)
   - [ImageOptim](https://imageoptim.com/) (Mac)
2. Aim for file sizes under 500KB per image
3. Use WebP format when possible for better performance

## 📝 Example Workflow

1. Take/select your photos
2. Resize and compress them
3. Rename them appropriately (e.g., `hero-background.jpg`)
4. Drag and drop into the correct folder in `public/images/`
5. Update `config/creator.ts` with the new paths
6. Test locally with `pnpm dev`
7. Commit and push to GitHub (Vercel will auto-deploy)

## ✅ Quick Checklist

- [ ] Hero background image added
- [ ] Profile picture added
- [ ] 3 featured post images added
- [ ] 6-8 gallery images added
- [ ] All paths updated in `config/creator.ts`
- [ ] Images tested locally
- [ ] Images committed to git

## 🐛 Troubleshooting

**Images not showing?**
- Make sure the path starts with `/` for local images (e.g., `/images/hero/image.jpg`)
- Check that files are in the `public` folder (not `app` or `components`)
- Verify file names match exactly (case-sensitive)

**Images too large/slow?**
- Compress images before uploading
- Use WebP format
- Consider using a CDN for external images

**Need help?**
- Check the console for errors
- Verify image paths in `config/creator.ts`
- Make sure images are in the correct folder structure

