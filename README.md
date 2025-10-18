# Personal Portfolio

A modern, responsive personal portfolio built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Fully responsive across all devices
- **Modern UI**: Clean, professional design with smooth animations
- **Sections**:
  - Home/About Me with skills overview
  - Featured Projects with GitHub links
  - Blog posts showcase
  - Digital Twin AI chat interface
  - Contact form with social links
  - Resume download

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email**: EmailJS integration ready

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information
Update the following files with your information:
- `src/components/HomeSection.tsx` - Name, bio, skills
- `src/components/ProjectsSection.tsx` - Your projects
- `src/components/ContactSection.tsx` - Contact details
- `src/components/Header.tsx` - Navigation name
- `src/app/layout.tsx` - SEO metadata

### Profile Photo
Replace the placeholder in `HomeSection.tsx` with your actual profile image:
```tsx
<Image
  src="/your-photo.jpg"
  alt="Your Name"
  width={400}
  height={400}
  className="rounded-full"
/>
```

### Resume
Replace `public/resume.md` with your actual resume file.

### Social Links
Update all social media links in:
- `src/components/HomeSection.tsx`
- `src/components/ContactSection.tsx`
- `src/components/Footer.tsx`

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
```json
"scripts": {
  "deploy": "gh-pages -d out"
}
```
3. Run: `npm run deploy`

## Email Integration

The contact form is ready for EmailJS integration:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Add your service ID and template ID to the contact form
4. Update the form submission logic in `ContactSection.tsx`

## AI Chat Integration

The Digital Twin section can be enhanced with OpenAI API:

1. Get an OpenAI API key
2. Update the `generateBotResponse` function in `DigitalTwinSection.tsx`
3. Add your API key to environment variables

## License

MIT License - feel free to use this template for your own portfolio!