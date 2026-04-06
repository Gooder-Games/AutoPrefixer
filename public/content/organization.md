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

## How to Toggle

By default, automatic organization is **On** to encourage best practices. You can toggle this behavior at any time in the **[Project Settings](/project-settings/)**.

## Handling Folders Without Content

If you process a folder that already contains only Static Meshes, and the target subfolder is `Meshes`, **AutoPrefixer** is smart enough to detect that the asset is *already* in a folder named `Meshes` and will not create another nested subfolder (e.g., `Meshes/Meshes/SM_Asset`).

## Batch Organization

Selecting multiple folders or assets and running the utility is an excellent way to "clean up" a messy project that has assets scattered throughout root directories. With one click, your meshes will be moved to `Meshes/`, textures to `Textures/`, and materials to `Materials/`.
