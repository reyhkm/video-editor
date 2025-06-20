# React Web Video Editor

This is a comprehensive, intuitive, and high-performance web-based video editor built with modern web technologies. It's designed for users of all skill levels, providing a seamless editing experience directly in the browser.

## Core Technologies

- **Frontend:** React.js (with Hooks)
- **State Management:** Zustand (with temporal middleware for undo/redo)
- **Styling:** Tailwind CSS (with Dark Mode)
- **Video Processing:** Placeholder for FFMPEG.js / WebAssembly
- **Drag & Drop:** React DnD
- **Timeline/Canvas:** React Konva
- **Layout:** React Resizable Panels
- **Icons:** Lucide React
- **Bundler:** Vite

## Features

- **Media Management:** Upload local files (video, audio, images) and manage them in a media library.
- **Multi-Track Timeline:** A dynamic, zoomable timeline supporting multiple tracks.
- **Clip Manipulation:** Drag, drop, trim, split, and rearrange clips.
- **Real-time Preview:** A video player that shows the current state of the edit.
- **Properties Panel:** Adjust properties of selected clips.
- **Export:** A modal to configure and export the final video (mock implementation).
- **Responsive Design:** A modern, dark-themed UI that works on various screen sizes.
- **Keyboard Shortcuts:** Basic shortcuts for common actions.

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd react-web-video-editor
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

### Running the Development Server

To start the Vite development server, run:

```sh
npm run dev
```

This will open the application in your default browser at `http://localhost:5173`.

### Building for Production

To create a production build, run:

```sh
npm run build
```

The optimized files will be located in the `dist` directory.
