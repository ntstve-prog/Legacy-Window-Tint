# Deployment Checklist

## Pre-Deployment

### 1. Install Dependencies
```bash
# Fix npm permissions if needed
sudo chown -R $(whoami) ~/.npm

# Install
npm install
```

### 2. Test Locally
```bash
# Development server
npm run dev
# Open http://localhost:4321

# Production build test
npm run build
npm run preview
```

### 3. Verify Key Elements
- [ ] Phone number (602) 883-2955 displays correctly everywhere
- [ ] Form iframe loads from GoHighLevel
- [ ] All CTAs link to #quote-form or tel:(602) 883-2955
- [ ] Sticky mobile phone button appears on mobile
- [ ] FAQ accordion expands/collapses
- [ ] Smooth scroll works for anchor links
- [ ] All sections display properly on mobile

### 4. Content Review
- [ ] No "West Valley" language (should be Maricopa County)
- [ ] Service area lists all cities correctly
- [ ] Testimonials reference Surprise, Scottsdale, Mesa
- [ ] All pain points are Phoenix-specific (110°F heat, etc.)
- [ ] Benefits are outcome-focused (not feature-focused)

## Deployment Options

### Option 1: Netlify (Recommended)
```bash
# Build
npm run build

# Deploy to Netlify
# Drag & drop /dist folder to netlify.com
# Or connect GitHub repo for auto-deploy
```

**Settings**:
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 18+

### Option 2: Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

**Settings**:
- Framework: Astro
- Build command: `npm run build`
- Output directory: `dist`

### Option 3: Cloudflare Pages
```bash
# Build locally
npm run build

# Upload /dist folder to Cloudflare Pages
```

**Settings**:
- Build command: `npm run build`
- Build output: `dist`

### Option 4: Traditional Hosting (cPanel, etc.)
```bash
# Build
npm run build

# Upload contents of /dist folder to public_html
# Configure domain to point to uploaded files
```

## Post-Deployment

### 1. Performance Testing
- [ ] Run Google PageSpeed Insights
- [ ] Score 90+ on mobile
- [ ] LCP under 2.5 seconds
- [ ] No CLS issues

**Test URL**: https://pagespeed.web.dev/

### 2. Mobile Testing
- [ ] Test on actual iPhone
- [ ] Test on actual Android
- [ ] Click-to-call works
- [ ] Form submits properly
- [ ] Sticky phone button appears

### 3. Cross-Browser Testing
- [ ] Chrome (desktop & mobile)
- [ ] Safari (desktop & mobile)
- [ ] Firefox
- [ ] Edge

### 4. Conversion Tracking Setup

**Google Ads Conversion Tracking**:
```html
<!-- Add to Layout.astro <head> section -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-XXXXXXXXXX');
</script>
```

**Phone Call Tracking**:
- Set up call forwarding tracking number
- Replace (602) 883-2955 with tracking number in production
- Or use dynamic number insertion

**Form Submission Tracking**:
- GoHighLevel form submissions should auto-track
- Verify in GHL dashboard that leads are coming through
- Set up webhook to Google Ads conversion if needed

### 5. PPC Campaign Launch

**Campaign Settings**:
- **Landing Page**: Your deployed URL
- **Geographic Targeting**: Maricopa County, AZ
- **Radius**: 25-30 miles from Phoenix
- **Cities**: Scottsdale, Phoenix, Tempe, Mesa, Chandler, Gilbert, Surprise, Peoria, Glendale, Goodyear, Buckeye

**Ad Copy Alignment**:
Make sure your ad copy matches landing page messaging:
- Mention energy bill reduction (30-50%)
- Mention Phoenix/Arizona heat
- Mention same-week installation
- Use "Free Quote" as CTA

**Keywords to Target**:
- window tinting phoenix
- residential window tint
- home window tinting near me
- window film phoenix
- window tint installation
- energy efficient window film
- uv protection windows
- heat reduction window tint

### 6. Monitoring

**Daily (First Week)**:
- Check form submissions in GoHighLevel
- Monitor phone call volume
- Review bounce rate in Google Analytics
- Check Quality Score in Google Ads

**Weekly**:
- Review conversion rate
- Check cost per conversion
- Analyze which keywords convert best
- Review mobile vs desktop performance

**Monthly**:
- A/B test new headlines
- Test different CTA copy
- Experiment with form placement
- Update testimonials if needed

## Troubleshooting

### Form Not Loading
- Check GoHighLevel form ID: `3hOHkeFr8mpl7752AS3Z`
- Verify form embed script loads: `https://link.msgsndr.com/js/form_embed.js`
- Check browser console for errors

### Phone Links Not Working on Mobile
- Verify format: `tel:(602) 883-2955` (no spaces or formatting)
- Test on actual device (not simulator)

### Slow Load Time
- Check image optimization (there shouldn't be any images)
- Verify CSS is inlined
- Check for JavaScript errors
- Test on actual 3G connection

### Low Conversion Rate
- A/B test headline
- Move form higher on page
- Simplify CTA copy
- Reduce form fields (in GoHighLevel)
- Add urgency to CTAs

## Domain Setup

### Custom Domain
If using a custom domain for PPC:

**Recommended Structure**:
- Main site: `legacywindowtint.com` (original site)
- PPC landing: `quote.legacywindowtint.com` (this site)

**Benefits**:
- Keep main site for SEO
- Track PPC traffic separately
- Test without affecting main site

### DNS Configuration
Point subdomain to hosting:
```
Type: CNAME
Name: quote
Value: [your-hosting-platform].com
```

## Success Metrics

### Week 1 Targets
- 5-10% conversion rate
- Under 50% bounce rate
- 2+ minute average time on page
- Quality Score 7+

### Month 1 Targets
- 10-15% conversion rate
- Under 40% bounce rate
- Cost per lead under $100
- Quality Score 8+

### Optimization Goals
- Test 3+ headline variations
- Test 2+ CTA variations
- Get 50+ conversions for statistical significance
- Achieve positive ROI within 30 days

---

## Quick Deploy Commands

```bash
# Full deployment workflow
cd /Users/westvalleytint/Development/local-service-sites/legacy-ppc-site

# Install (if not done)
npm install

# Build
npm run build

# Test build locally
npm run preview

# Deploy (choose one)
# Netlify: drag /dist to netlify.com
# Vercel: vercel --prod
# Other: upload /dist contents to server
```

---

Ready to capture high-intent PPC traffic!
