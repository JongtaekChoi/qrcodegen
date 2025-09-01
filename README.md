# QR Code Generator - Chrome Extension

<div align="center">

![QR Code Generator](public/icons/icon128.png)

**🚀 Quick & Simple QR Code Generator for Chrome**

[![Chrome Web Store](https://img.shields.io/badge/Chrome-Web%20Store-blue?style=flat-square&logo=google-chrome)](https://chrome.google.com/webstore)
[![Version](https://img.shields.io/badge/version-1.0.0-green?style=flat-square)](https://github.com/jtchoi/qrcode-extension)
[![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](LICENSE)

*Generate QR codes instantly for any text, URL, or the current webpage you're visiting!*

</div>

## ✨ Features

- 🔄 **Auto-Detection**: Automatically generates QR code for current webpage
- ⚡ **Lightning Fast**: Instant QR code generation with modern bundling
- 📱 **Clean Interface**: Minimalist, user-friendly design
- 💾 **Easy Download**: One-click PNG download
- 🔒 **Privacy First**: No data collection or external servers
- 🎯 **Universal**: Works on any website

## 🖼️ Screenshots

<!-- Add screenshots here when available -->
*Screenshots will be added after Chrome Web Store deployment*

## 🚀 Quick Start

### Installation

1. **From Chrome Web Store** (Recommended)
   ```
   🔗 Chrome Web Store Link (Coming Soon)
   ```

2. **Manual Installation** (Development)
   ```bash
   git clone https://github.com/jtchoi/qrcode-extension.git
   cd qrcode-extension
   npm install
   npm run build
   ```
   - Open Chrome → Extensions → Developer Mode → Load Unpacked → Select `dist/` folder

### Usage

1. Click the QR Code Generator icon in your Chrome toolbar
2. QR code for current page appears automatically
3. Edit text if needed or add custom content
4. Click download button to save as PNG

## 🛠️ Development

### Tech Stack

- **Frontend**: TypeScript, HTML, CSS
- **Build Tool**: Vite with @crxjs/vite-plugin
- **QR Library**: qrcode npm package
- **Platform**: Chrome Extension Manifest V3

### Project Structure

```
qrcode-extension/
├── src/
│   └── popup.ts              # Main extension logic
├── public/
│   ├── manifest.json         # Extension manifest
│   ├── popup.html           # Popup UI
│   └── icons/               # Extension icons
├── scripts/
│   └── cli.ts               # CLI utility (bonus)
├── dist/                    # Built extension
└── docs/
    ├── STORE_ASSETS.md      # Store deployment guide
    └── CLAUDE.md            # Technical documentation
```

### Development Commands

```bash
# Install dependencies
npm install

# Development mode with hot reload
npm run dev

# Build for production
npm run build

# Build for Chrome Web Store
npm run build:extension

# CLI utility (bonus feature)
npm run cli "Your text here"
```

### Build Process

The project uses Vite with @crxjs/vite-plugin for optimal Chrome extension development:

- TypeScript compilation with type checking
- Modern ES modules bundling
- Automatic manifest processing
- Asset optimization and compression

## 🔧 Configuration

### Manifest V3 Features

```json
{
  "manifest_version": 3,
  "permissions": ["activeTab"],
  "action": {
    "default_popup": "popup.html"
  }
}
```

### Browser Support

- ✅ Chrome (Recommended)
- ✅ Edge (Chromium-based)
- ✅ Brave
- ✅ Other Chromium browsers

## 📋 Roadmap

- [ ] 🎨 Multiple QR code styles and colors
- [ ] 📚 QR code history and favorites
- [ ] 🌐 Batch QR code generation
- [ ] 📊 QR code analytics
- [ ] 🔗 Custom short URLs
- [ ] 💼 Business card QR codes
- [ ] 📱 Mobile app companion

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Maintain clean, readable code
- Add comments for complex logic
- Test thoroughly before submitting

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [qrcode](https://www.npmjs.com/package/qrcode) - Core QR code generation library
- [Vite](https://vitejs.dev/) - Fast build tool
- [@crxjs/vite-plugin](https://crxjs.dev/vite-plugin/) - Chrome extension development

## 📞 Support

- 🐛 **Issues**: [GitHub Issues](https://github.com/jtchoi/qrcode-extension/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/jtchoi/qrcode-extension/discussions)
- 📧 **Email**: [lastchoice86@naver.com](mailto:lastchoice86@naver.com)

---

<div align="center">

**Made with ❤️ by [Jongtaek Choi](https://github.com/jtchoi)**

*If this extension helped you, please consider giving it a ⭐ on GitHub!*

</div>