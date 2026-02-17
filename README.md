# NYU Wall Extension

Our extension allows users to renew their NYU pride by showcasing a new NYU background image on each new open tab.

## Features

- Replaces Firefox's default new tab page with a beautiful NYU campus photo
- Randomly selects from 20 high-quality campus images each time you open a new tab
- Full screen background with no distractions

## Installation

1. Download or clone this repository
   ```bash
   git clone https://github.com/your-username/NYU-Wall-Extension.git
   ```
2. Open Firefox and navigate to `about:debugging#/runtime/this-firefox`
3. Click **Load Temporary Add-on**
4. Select the `manifest.json` file inside the `NYU-Wall-Extension` folder

## Usage

Once installed, simply open a new tab in Firefox. A random NYU campus photo will appear as the full screen background. Each new tab displays a different image, so you get a fresh view of campus every time.

## Project Structure

```
NYU-Wall-Extension/
├── manifest.json    # Firefox extension configuration
├── newtab.html      # New tab page markup
├── newtab.css       # Full-screen background styling
├── newtab.js        # Random image selection logic
└── nyu_imgs/        # Campus photography
```

## Contribution
For contribution please refer to the [Contribution Guide](https://github.com/ossd-s26/NYU-Wall-Extension/blob/main/CONTRIBUTING.md)

## License

This project is licensed under the [Mozilla Public License 2.0](LICENSE).
