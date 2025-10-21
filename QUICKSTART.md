# Quick Start Guide

Get your PPC landing page up and running in 5 minutes.

## Installation

```bash
cd /Users/westvalleytint/Development/local-service-sites/legacy-ppc-site

# Fix npm permissions (if needed)
sudo chown -R $(whoami) ~/.npm

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit: `http://localhost:4321`

## What You Just Created

A high-converting PPC landing page for Legacy Window Tint with:

- **8 focused sections** (not 13+ like original site)
- **Mobile-first design** with sticky phone button
- **Dual conversion paths**: Phone (602-883-2955) or Form
- **GoHighLevel form** embedded and prominent
- **All Maricopa County** targeting (not just West Valley)
- **Fast load time** optimized for Quality Score

## Key Files

```
legacy-ppc-site/
├── src/
│   ├── pages/
│   │   └── index.astro          ← Main landing page (785 lines)
│   └── layouts/
│       └── Layout.astro          ← Minimal layout wrapper (139 lines)
├── README.md                     ← Overview & features
├── SETUP.md                      ← Installation & testing guide
├── DEPLOYMENT.md                 ← Deploy & tracking setup
├── CONVERSION-STRATEGY.md        ← Why this beats the original for PPC
├── PAGE-STRUCTURE.md             ← Visual layout & user flow
└── package.json                  ← Astro + dependencies
```

## Page Sections

1. **Hero** - Pain point headline, benefits, stats, CTAs
2. **Quote Form** - GoHighLevel embedded form (early placement)
3. **Problem** - 3 pain points (heat, bills, UV damage)
4. **Solution** - 4 benefits (savings, protection, views, speed)
5. **Testimonials** - 3 social proof cards (Surprise, Scottsdale, Mesa)
6. **Process** - 3 simple steps (request → consult → install)
7. **FAQ** - 5 objection handlers (darkness, HOA, time, savings, cost)
8. **Final CTA** - Urgency-driven closing with repeat CTAs

## Build & Deploy

```bash
# Production build
npm run build

# Preview production build locally
npm run preview

# Deploy /dist folder to:
# - Netlify (drag & drop)
# - Vercel (vercel --prod)
# - Cloudflare Pages
# - Traditional hosting (upload /dist contents)
```

## Key Differences from Original Site

| Original Site | PPC Landing Page |
|--------------|------------------|
| West Valley focused | All Maricopa County |
| 13+ sections | 8 focused sections |
| Educational content | Conversion-focused |
| Navigation menu | No menu (no distractions) |
| Form mid-page | Form section 2 (early) |
| Desktop-first | Mobile-first |
| Multiple goals | Two actions: Call or Form |
| 8 FAQs | 5 objection-focused FAQs |
| SEO optimized | PPC conversion optimized |

## Testing Checklist

### Must Test
- [ ] Phone click-to-call works on mobile
- [ ] Form loads and submits
- [ ] Sticky phone button appears on mobile
- [ ] Page loads under 2 seconds
- [ ] All CTAs link to phone or #quote-form
- [ ] FAQ accordion expands/collapses

### Mobile Priority
- [ ] Test on actual iPhone and Android
- [ ] Verify touch targets are 44px+
- [ ] Check single-column stacking
- [ ] Confirm sticky CTA always visible

## Conversion Tracking

After deployment, set up:

1. **Google Ads conversion tracking** (form submissions)
2. **Call tracking** (calls 60+ seconds)
3. **Google Analytics** (bounce rate, time on page)
4. **GoHighLevel** (verify leads coming through)

## Optimization Strategy

### Week 1
- Monitor conversion rate (target: 5-10%)
- Track bounce rate (target: under 50%)
- Check Quality Score (target: 7+)
- Review mobile vs desktop performance

### Week 2-4
- A/B test headline variations
- Test different CTA copy
- Experiment with form placement
- Rotate testimonials

### Month 2+
- Analyze best-performing keywords
- Optimize for cost per conversion
- Refine geographic targeting
- Add seasonal urgency

## Contact Info to Verify

- **Phone**: 602-883-2955 (appears 4 times)
- **Form**: GoHighLevel iframe (ID: 3hOHkeFr8mpl7752AS3Z)
- **Service Area**: All of Maricopa County
- **Cities**: Scottsdale, Phoenix, Tempe, Mesa, Chandler, Gilbert, Surprise, Peoria, Glendale, Goodyear, Buckeye

## Success Metrics

**Primary**:
- Form submissions (conversions)
- Phone calls 60+ seconds (conversions)

**Secondary**:
- Bounce rate < 50%
- Time on page > 2 minutes
- Scroll depth > 70%
- Quality Score 8+
- Cost per lead < $100

## Documentation

- **README.md** - Project overview and features
- **SETUP.md** - Installation and testing procedures
- **DEPLOYMENT.md** - Deploy steps and post-launch tracking
- **CONVERSION-STRATEGY.md** - Why this works for PPC (detailed analysis)
- **PAGE-STRUCTURE.md** - Visual layout and conversion funnel
- **QUICKSTART.md** - This file

## Support & Questions

**Business Info**: Contact Legacy Window Tint team
**Technical Issues**: Check documentation or review code comments
**PPC Strategy**: See CONVERSION-STRATEGY.md for detailed rationale

---

## Next Steps

1. ✅ You've created the project
2. ⏭️ Test locally (`npm run dev`)
3. ⏭️ Review on mobile device
4. ⏭️ Build for production (`npm run build`)
5. ⏭️ Deploy to hosting
6. ⏭️ Set up conversion tracking
7. ⏭️ Launch PPC campaigns
8. ⏭️ Monitor and optimize

**You're ready to capture high-intent PPC traffic!**

---

Built with conversion psychology and mobile-first principles.
