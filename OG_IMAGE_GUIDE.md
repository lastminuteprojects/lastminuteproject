# Dynamic OG Image Update Guide

## Overview
Your website uses a **dynamic Open Graph image** that automatically generates social media previews. This system is designed to be easily updatable as your website content changes.

## How It Works
- **Location**: `/app/og-image/route.tsx`
- **Function**: `getCurrentContent()` - This is where you update the content
- **URL**: `https://lastminuteproject.vercel.app/og-image`

## Updating the OG Image Content

### 1. Edit the `getCurrentContent()` function in `/app/og-image/route.tsx`:

```javascript
function getCurrentContent() {  
  return {
    title: 'Complete Software Projects',           // Main title
    subtitle: 'Any Tech Stack • On Time • Complete Code',  // Subtitle
    description: 'From Web Apps to AI/ML • Mobile to Blockchain',  // Bottom description
    techStacks: ['🌐', '📱', '🤖', '⛓️', '📊'],    // Tech stack icons
    features: ['Web Development', 'Mobile Apps', 'AI/ML', 'Blockchain', 'Data Analytics'],  // Feature badges
    brandName: 'Last Minute Projects',             // Brand name
    brandIcon: '🚀'                               // Brand icon
  }
}
```

### 2. What You Can Update:

#### **Title & Subtitle**
- Change the main message and tagline
- Update to reflect new services or focus areas

#### **Tech Stack Icons**
- Add/remove emoji icons for different technologies
- Examples: 🌐 (Web), 📱 (Mobile), 🤖 (AI), ⛓️ (Blockchain), 📊 (Data)

#### **Features List**
- Update the feature badges shown on the image
- Add new services or remove old ones
- Keep it to 4-6 items for best visual balance

#### **Description**
- Update the bottom text to reflect current offerings
- Keep it concise and impactful

#### **Brand Elements**
- Change brand name or icon if needed
- Update brand colors in the styling

### 3. Visual Customization

#### **Colors** (in the same file):
```javascript
backgroundColor: '#fbbf24',  // Main background color
background: 'linear-gradient(135deg, #fbbf24 0%, #f97316 100%)',  // Gradient
color: '#1e3a8a',  // Text color
```

#### **Layout**:
- Adjust font sizes, spacing, and positioning
- Modify the background pattern
- Change the feature badge styling

## Testing Your Changes

### 1. Local Testing:
```bash
npm run dev
# Visit: http://localhost:3000/og-image
```

### 2. Production Testing:
- Deploy to Vercel
- Visit: `https://lastminuteproject.vercel.app/og-image`
- Test on social media platforms:
  - [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
  - [Twitter Card Validator](https://cards-dev.twitter.com/validator)
  - [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

### 3. Clear Cache:
Social platforms cache images, so you may need to:
- Use the debugger tools to force refresh
- Wait 24-48 hours for cache to clear naturally

## Example Updates

### Adding New Service:
```javascript
function getCurrentContent() {
  return {
    title: 'Complete Software Projects',
    subtitle: 'Any Tech Stack • On Time • Complete Code',
    description: 'From Web Apps to AI/ML • Mobile to Blockchain • Cloud Solutions',
    techStacks: ['🌐', '📱', '🤖', '⛓️', '📊', '☁️'],  // Added cloud icon
    features: ['Web Development', 'Mobile Apps', 'AI/ML', 'Blockchain', 'Data Analytics', 'Cloud Solutions'],  // Added cloud
    brandName: 'Last Minute Projects',
    brandIcon: '🚀'
  }
}
```

### Changing Focus:
```javascript
function getCurrentContent() {
  return {
    title: 'AI/ML Specialists',  // Changed focus
    subtitle: 'Custom AI Solutions • Fast Delivery • Production Ready',  // Updated subtitle
    description: 'From Chatbots to Computer Vision • NLP to Predictive Analytics',  // AI-focused
    techStacks: ['🤖', '🧠', '📊', '🔍', '💬'],  // AI-focused icons
    features: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Data Science'],  // AI services
    brandName: 'Last Minute Projects',
    brandIcon: '🚀'
  }
}
```

## Best Practices

1. **Keep it Simple**: Don't overcrowd the image
2. **Consistent Branding**: Maintain your color scheme and style
3. **Readable Text**: Ensure good contrast and font sizes
4. **Mobile Friendly**: Test how it looks on mobile devices
5. **Regular Updates**: Update when you add new services or change focus

## Troubleshooting

### Image Not Updating:
1. Clear browser cache
2. Use social media debugger tools
3. Wait for cache to clear (24-48 hours)
4. Check if the route is working: `/og-image`

### Image Looks Wrong:
1. Check the dimensions (1200x630)
2. Verify all text fits properly
3. Test on different devices
4. Ensure proper contrast ratios

## Support
If you need help updating the OG image:
1. Check this guide first
2. Test the `/og-image` route directly
3. Use social media debugger tools
4. The image updates automatically when you deploy changes
