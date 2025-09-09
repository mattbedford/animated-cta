# Animated CTA Block

A custom Gutenberg block that renders a two-column call-to-action with an animated expanding background when it scrolls into view.  
Built for Frequenze (Chiasso) but reusable anywhere.

---

## Local Development

This project uses [wp-env](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-env/) to spin up a WordPress instance for testing, and [@wordpress/scripts](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/) to bundle the block.

### Requirements
- Node.js (>= 18 recommended)
- npm

### Install dependencies
```bash
npm install

## Commands

//Start WP Env
npm run env:start

// Stop WP env
npm run env:stop

// Start block development - IMPO!
npm run start

// Build production bundle
npm run build
