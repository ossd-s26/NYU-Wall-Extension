# Contributing to NYU Wall Extension

Thank you for your interest in contributing! Here's how you can help.

## How to Contribute

### Reporting Bugs

If you find a bug, please open an issue on GitHub with:

- A clear description of the problem
- Steps to reproduce the issue
- Your Firefox version and operating system

### Suggesting New Features

Have an idea? Open an issue with the **feature request** label and describe:

- What you'd like to see added
- Why it would be useful

### Adding New Images

Want to add more NYU campus photos? Here's how:

1. Fork the repository
2. Add your images to the `nyu_imgs/` folder (images must be in JPEG format)
3. Rename the image file name based on the previous images. For example, if the last file name is `24.jpg`, the next file name has to be `25.jpg`
4. Update the image count in newtab.js
5. Submit a pull request

Please ensure images are high quality and appropriate for a full-screen background.

### Submitting Code Changes

1. Fork the repository
2. Create a new branch from `main`
   ```bash
   git checkout -b your-feature-name
   ```
3. Make your changes
4. Test the extension locally by loading the temporary add-on in Firefox
5. Commit your changes with a clear message
6. Push to your fork and open a pull request

### Pull Request Guidelines

- Keep changes focused and minimal
- Describe what your PR does and why
- Test your changes before submitting
- Reference any related issues

## Development Setup

1. Clone the repo
2. Open `about:debugging#/runtime/this-firefox` in Firefox
3. Click **Load Temporary Add-on**
4. Select the `manifest.json` file in the project folder
5. Open a new tab to test changes — click **Reload** on the debugging page after making edits

## Questions?

Feel free to open an issue if you have any questions about contributing.
