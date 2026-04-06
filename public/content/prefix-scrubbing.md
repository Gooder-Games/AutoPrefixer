---
title: Prefix Scrubbing
description: How AutoPrefixer handles malformed or legacy prefixes.
---

One of the most powerful features of **AutoPrefixer** is its ability to "clean" asset names before applying the standard prefix. This prevents common naming errors and ensures consistency even with assets from different project sources.

## How Scrubbing Works

The utility uses a set of "Scrubbing Rules" defined in the **[Project Settings](/project-settings/)**. These rules specify a list of substrings that should be removed if found at the beginning of an asset's name.

For example, if you are renaming a **Static Mesh** with the prefix `SM_`, the default scrubbing rules might include `sm_`, `mesh_`, and `S_Mesh_`.

If an asset is named `mesh_Rock_01`:
1. **Scrubbing**: The utility identifies `mesh_` as a legacy prefix and removes it.
2. **Remaining Name**: `Rock_01`.
3. **Prefixing**: The utility adds `SM_` to the beginning.
4. **Final Name**: `SM_Rock_01`.

## Multiple Scrubbing

AutoPrefixer handles multiple layers of scrubbing. If an asset is named `sm_mesh_Rock_01`, both `sm_` and `mesh_` will be removed before the final `SM_` is added.

## Underscore Handling

The utility is intelligently programmed to handle underscores:
- **Automatic Underscore**: If your target prefix is `SM_`, it will ensure there is exactly one underscore between the prefix and the cleaned name.
- **Leading Underscores**: Any leading underscores left after scrubbing (e.g., `_Rock_01`) are automatically removed to prevent names like `SM__Rock_01`.

## Customizing Rules

You can add your own project-specific legacy prefixes to the scrubbing list. For example, if you frequently import assets from a pack that uses `EXT_` for every asset, you can add `EXT_` to the scrubbing rules in your **Project Settings**.
