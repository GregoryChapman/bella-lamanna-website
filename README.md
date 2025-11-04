# Bella Lamanna - Influencer Website

A production-ready Next.js website for Bella Lamanna (@bella.lamannaa), featuring a professional media kit, content gallery, and link hub.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (or npm/yarn)

### Installation

1. Install dependencies:
```bash
pnpm install
```

2. Create a `.env.local` file in the root directory:
```env
# Choose one email service:
# Option 1: Formspree
USE_FORMSPREE=true
FORMSPREE_ID=your_formspree_id_here

# Option 2: Resend
# USE_FORMSPREE=false
# RESEND_API_KEY=your_resend_api_key_here
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
app/
  layout.tsx          # Root layout with fonts and metadata
  page.tsx            # Home page
  links/
    page.tsx          # Link hub page
  media-kit/
    page.tsx          # Media kit page
  api/
    contact/          # Contact form API route
    media-kit-pdf/    # Media kit PDF generation
components/
  nav.tsx             # Navigation component
  hero.tsx            # Hero section
  about.tsx           # About section
  featured.tsx        # Featured posts grid
  gallery.tsx         # Image gallery
  contact.tsx         # Contact form
  footer.tsx          # Footer with social links
  link-hub.tsx        # Link hub component
config/
  creator.ts          # Creator configuration data
lib/
  icons.tsx           # Icon utilities
```

## 🎨 Customization

Edit `config/creator.ts` to update:
- Creator information
- Social media links
- Featured posts
- Gallery images
- Theme colors

## 📧 Email Configuration

The contact form supports two email services:

### Formspree (Recommended for quick setup)
1. Sign up at [Formspree.io](https://formspree.io)
2. Create a form and get your form ID
3. Add to `.env.local`:
   ```env
   USE_FORMSPREE=true
   FORMSPREE_ID=your_form_id
   ```

### Resend (Production-ready)
1. Sign up at [Resend.com](https://resend.com)
2. Get your API key
3. Add to `.env.local`:
   ```env
   USE_FORMSPREE=false
   RESEND_API_KEY=re_your_api_key
   ```

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

The site is optimized for Vercel with:
- Automatic image optimization
- Edge-ready API routes
- OG image generation support

## 📝 Features

- ✅ Fully responsive design
- ✅ WCAG AA accessibility compliance
- ✅ SEO optimized with OG tags
- ✅ Smooth animations with Framer Motion
- ✅ Contact form with email integration
- ✅ Link hub for social media
- ✅ Professional media kit page
- ✅ TypeScript for type safety

## 🛠️ Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Outfit + Inter

## 📄 License

Built by Chapman Digital Services

