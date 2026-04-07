---
title: Technical Details
description: Deep dive into the AutoPrefixer C++ implementation and architecture.
---

# Technical Details

AutoPrefixer is built with performance and stability in mind, leveraging Unreal Engine's C++ core and Editor Scripting utilities.

### 🏗 Architecture

The plugin is split into two primary components:

#### 1. AutoPrefixUtility (C++)
A collection of static utility functions that handle the heavy lifting:
- **String Parsing**: Sophisticated prefix detection and removal logic.
- **Asset Registry**: Efficiently querying and renaming assets without breaking references.
- **Transaction Support**: All actions are wrapped in an `FScopedTransaction`, allowing for instant **Undo/Redo** support.

#### 2. PrefixActionUtility
A Blueprint-exposed class that hooks into the Content Browser's asset context menu. This class receives the current selection array and passes it to the C++ utility for bulk processing.


### 💻 Performance

- **Zero Latency**: Renaming operations are asynchronous where possible, ensuring the editor remains responsive even when processing hundreds of assets.
- **Reference Tracking**: Uses `EditorAssetLibrary` (conceptually) and internal `FAssetData` to ensure that all internal links in your project are updated during the rename.

### 🛠 Extensibility

Developers can extend the plugin's logic by inheriting from `UAutoPrefixerSettings`. This allows you to add proprietary logic for specific asset types used in your studio.

> **Tip:** All source code is included with the plugin, enabling complete transparency and the ability to cook your own specialized builds.
