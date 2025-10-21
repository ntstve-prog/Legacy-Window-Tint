# Setup Instructions

## Prerequisites

Node.js 18+ and npm must be installed.

## Installation

If you encounter npm permission errors, first fix the npm cache permissions:

```bash
sudo chown -R $(whoami) ~/.npm
```

Then install dependencies:

```bash
cd /Users/westvalleytint/Development/local-service-sites/legacy-ppc-site
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

## Build for Production

Build the optimized site:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Testing Checklist

### Mobile Testing (Priority)
- [ ] Test on actual iPhone/Android device
- [ ] Verify sticky phone button appears and works
- [ ] Test click-to-call functionality (tel: links)
- [ ] Check form loads and submits properly
- [ ] Verify all CTAs are easily tappable (44px+ touch targets)
- [ ] Test FAQ accordion expand/collapse
- [ ] Scroll through entire page - verify no layout breaks

### Desktop Testing
- [ ] Test form submission
- [ ] Verify all phone links are clickable
- [ ] Check responsive breakpoints (768px, 1024px, 1200px)
- [ ] Test smooth scroll to #quote-form anchor

### Performance Testing
- [ ] Run Google PageSpeed Insights
- [ ] Target: 90+ score on mobile
- [ ] Target: Under 2 second load time
- [ ] Test on 3G network (throttle in DevTools)

### Conversion Testing
- [ ] Phone number visible immediately: 602-883-2955
- [ ] Quote form appears within first 2 scroll sections
- [ ] CTAs are prominent and clear
- [ ] No distracting elements
- [ ] Service area mentioned multiple times

### Cross-Browser Testing
- [ ] Chrome (desktop & mobile)
- [ ] Safari (desktop & mobile)
- [ ] Firefox
- [ ] Edge

## PPC Campaign Setup

### Recommended Settings
- **Geographic Targeting**: All of Maricopa County, AZ
- **Keywords**: window tinting phoenix, residential window tint, home window film, etc.
- **Landing Page URL**: Your production URL
- **Call Extension**: 602-883-2955
- **Conversion Goals**:
  1. Form submissions (track iframe submissions)
  2. Phone calls (minimum 60 seconds)

### Tracking Setup
1. Add Google Analytics tag to `<head>` in Layout.astro
2. Set up conversion tracking for form submissions
3. Enable call tracking on 602-883-2955
4. Monitor bounce rate (target: under 50%)
5. Track time on page (target: 2+ minutes)

## Optimization Tips

1. **A/B Test Headlines**: Try different pain points
2. **Form Placement**: Test moving form higher/lower
3. **CTA Copy**: Test different urgency messages
4. **Testimonial Cities**: Rotate based on ad targeting
5. **Stats**: Update with real company numbers

## Support

For questions about the GoHighLevel form or business details, contact the Legacy Window Tint team.
