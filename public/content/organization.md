---
title: Organization
description: Use AutoPrefixer to automatically group assets into subfolders.
---

Beyond just renaming, **AutoPrefixer** can help you keep your project's folder structure clean and consistent by automatically routing assets into logical subdirectories.

## Automatic Subfolders

For each asset class, you can define a **Target Subfolder** in the [Project Settings](/project-settings/). This subfolder name is relative to the asset's current location.

If you are renaming a **Static Mesh** with the target subfolder `Meshes` and the asset is currently in `/Game/Content/Props/Chair`:
- **Current Path**: `/Game/Content/Props/Chair`
- **Resulting Path**: `/Game/Content/Props/Chair/Meshes/SM_Chair`

## Dynamic Subfolder Creation

If the target subfolder does not already exist, **AutoPrefixer** will automatically create it. This ensures that your project remains organized without you having to manually create new directories for every asset type.

## Enabling the Feature

By default, automatic organization is **Disabled** to ensure you have total control over your project structure. 

To enable it, go to **Edit > Project Settings > Plugins > Auto Prefixer** and check the box for **Enable Auto-Organization**. 

> [!IMPORTANT]
> Once enabled, the utility will automatically move your selected assets into their designated subfolders (e.g. `Meshes/`, `Textures/`) during the renaming process.


## Smarter Pathing

**AutoPrefixer** is smart enough to detect existing structures. If you process a **Static Mesh** that is already inside a folder named `Meshes`, the utility will not create redundant nested folders (e.g., it will avoid creating `Meshes/Meshes/SM_Asset`).

## Batch Organization

Selecting a large set of assets (using `Ctrl+A`) and running the utility is an excellent way to "clean up" a messy project where files are scattered in root directories. With one click, your selected meshes will move to `Meshes/`, textures to `Textures/`, and materials to `Materials/`.

