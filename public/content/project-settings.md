---
title: Project Settings
description: Configure AutoPrefixer to match your studio naming conventions.
---

# Project Settings

AutoPrefixer is designed to be flexible. You can customize all naming rules and folder structures directly in the Unreal Engine Editor.

### ⚙ Accessing Settings

Go to **Edit > Project Settings** and look for the **Plugins > AutoPrefixer** section.

### 🏷 Naming Rules

The core of the plugin is the **Asset Naming Map**. This links a specific Asset Class to its desired prefix. 

| Asset Class | Default Prefix | Example |
| :--- | :--- | :--- |
| **Blueprint** | `BP_` | `BP_PlayerCharacter` |
| **Material** | `M_` | `M_WoodFloor` |
| **Static Mesh** | `SM_` | `SM_Crate_01` |
| **Texture 2D** | `T_` | `T_Brick_Diffuse` |

> **Tip:** You can add custom classes or override default prefixes at any time. Changes are saved to your project's `DefaultEngine.ini`.

### 📂 Organization Rules

You can toggle whether AutoPrefixer should automatically move renamed assets into a specific directory structure (e.g., placing all Materials into a `Materials/` subfolder).

- **Enable Auto-Organization**: If true, assets will be moved to the class-specific folder during the renaming process.
- **Root Directory**: The base path where organized folders will be created.
