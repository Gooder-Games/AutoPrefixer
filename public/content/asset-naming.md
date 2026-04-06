---
title: Asset Naming
description: Understand how AutoPrefixer renames your Unreal Engine assets.
---

Standard naming conventions improve project organization and make it easier for collaborators to find what they need. **AutoPrefixer** is designed to eliminate the manual labor involved in this process.

## How it Works

When you run the AutoPrefixer on a selection of assets, the utility performs the following steps:

1. **Class Detection**: Identifies the exact Unreal Engine C++ class of each selected asset (e.g., `StaticMesh`, `Texture2D`).
2. **Rule Lookup**: Checks the [Project Settings](/project-settings/) to find the target prefix and scrubbing rules for that class.
3. **Smart Renaming**: Prepends the correct prefix while intelligently removing any existing malformed or legacy prefixes.
4. **Collision Handling**: Automatically adds a numeric suffix (e.g., `_01`, `_02`) if an asset with the same name already exists in the target directory.

## Default Prefixes

By default, **AutoPrefixer** is pre-configured with the most common Epic Games standard prefixes:

| Asset Class | Prefix | Example |
| :--- | :--- | :--- |
| Static Mesh | `SM_` | `SM_Rock_01` |
| Texture 2D | `T_` | `T_Rock_BaseColor` |
| Material | `M_` | `M_Rock_Master` |
| Material Instance | `MI_` | `MI_Rock_Dark` |
| Blueprint | `BP_` | `BP_PlayerCharacter` |
| Niagara System | `NS_` | `NS_Fire_Explosion` |
| Sound Wave | `SW_` | `SW_Ambient_Forest` |

## Bulk Renaming Tips

- **Folder Selection**: You can select entire folders in the Content Browser and run the utility. It will process all assets inside (including subfolders if configured).
- **Multiple Classes**: You don't need to select only one type of asset. Feel free to select meshes, textures, and materials all at once. **AutoPrefixer** will apply the correct rules for each individual class automatically.
