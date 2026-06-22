# Allied Technology Website

A modern, professional manufacturing company website built with clean, organized code.

## 📁 Project Structure

```
alliedtech-website/
├── index.html          # Main HTML structure
├── styles.css          # All styling and responsive design
├── script.js           # Interactivity and service overlay logic
└── README.md           # This file
```

## ✨ Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Dark theme with neon green accent color
- **Interactive Service Overlay**: Click on any service to see detailed information
- **Hover Effects**: Smooth animations and transitions throughout
- **Service Gallery**: Beautiful image galleries for each service
- **Contact Form**: Fully styled contact form with validation ready
- **Smooth Scrolling**: Navigation links smoothly scroll to sections
- **Performance Optimized**: Lazy-loaded images and minimal dependencies

## 🎨 Design Features

- **Navigation Bar**: Fixed sticky navigation with smooth hover effects
- **Hero Section**: Full-height banner with image and content
- **Ticker**: Animated scrolling text with service keywords
- **Vision Cards**: 4-column grid with hover animations
- **Service List**: 8 services with expandable overlay modal
- **Project Gallery**: Showcase of capabilities with hover effects
- **Customer Logos**: Grid of customer company logos
- **Contact Section**: Contact form with company information
- **Footer**: Clean footer with branding and keywords

## 🚀 Getting Started

1. **Open the website**: Simply open `index.html` in your web browser
2. **No dependencies**: All styling is in `styles.css` and functionality in `script.js`
3. **External assets**: The site uses Google Fonts and Unsplash images

## 📱 Responsive Breakpoints

- **Desktop**: Full layout (900px+)
- **Tablet**: Adjusted grid layouts (max 900px)
- **Mobile**: Single column layouts with optimized spacing

## 🎯 Key Sections

### Navigation
- Fixed top navigation with logo and links
- Contact button with green highlight
- Smooth scrolling to sections

### Hero Section
- Eye-catching background image with overlay
- Company tagline and CTA button
- Call-to-action: "Explore Services"

### Services
- 8 detailed manufacturing services
- Hover image preview
- Click to open detailed overlay with:
  - Service features
  - Image gallery
  - Technical specifications

### Projects
- 4-card grid showcasing capabilities
- Featured project (spans 2 columns)
- Hover effects with image zoom

### Customers
- 4-column grid of customer logos
- Hover animations
- Customer names with initials

### Contact
- Contact form with multiple fields
- Company contact information
- Location, email, phone, and GST details

## 🎨 Color Scheme

- **Primary Black**: `#0a0a0a`
- **Dark Background**: `#111111`
- **Card Background**: `#181818`
- **Accent Green**: `#00ff41`
- **Dim Green**: `#00cc33`
- **White Text**: `#f5f5f5`
- **Border**: `#2a2a2a`

## 🔧 Customization

### Change Colors
Edit the CSS variables in `styles.css`:
```css
:root {
  --green: #00ff41;      /* Change accent color */
  --black: #0a0a0a;      /* Change dark background */
}
```

### Update Content
Edit text and information in `index.html`. Service data is dynamically rendered from `script.js`.

### Add More Services
Add new service objects to the `SERVICES` array in `script.js`:
```javascript
{
  num: '09',
  title: 'New Service',
  desc: 'Service description...',
  img: 'image-url',
  feats: [...],
  gallery: [...]
}
```

## 📸 Image Sources

All images are from Unsplash (free stock photos):
- CNC machinery and industrial equipment photos
- High-quality manufacturing facility imagery
- Professional manufacturing environments

## ✅ Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This website template is created as a professional portfolio example.

---

**Created with ❤️ for precision manufacturing excellence**
