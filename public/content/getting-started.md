---
title: Getting Started
description: Learn how to install and enable the AutoPrefixer plugin in Unreal Engine.
---

Standardizing your asset naming conventions takes less than 2 minutes. Follow these steps to get up and running.

## Installation

1. **Close Unreal Engine**: Ensure your project is not running before adding the plugin files.
2. **Download & Extract**: Download the plugin folder from the [Fab Store](https://www.fab.com/listings/0e94c92b-6e4d-4a76-aca8-00893621faab) and extract the `AutoPrefixer` folder.

3. **Add to Plugins**: 
   - Navigate to your project's root directory.
   - If a `Plugins` folder doesn't already exist, create one.
   - Copy the `AutoPrefixer` folder into the `Plugins` directory.
   - Your folder structure should look like this: `MyProject/Plugins/AutoPrefixer/`

## Enabling the Plugin

1. **Launch Unreal Engine**: Open your project.
2. **Open Plugins Window**: Navigate to **Edit > Plugins**.
3. **Search for AutoPrefixer**: Type "AutoPrefixer" in the search bar.
4. **Enable & Restart**: Check the box to enable the plugin and restart the editor if prompted.

## Verification

To verify that the plugin is correctly loaded:
1. Open the **Content Browser**.
2. Select any asset (e.g., a Static Mesh).
3. **Right-click** on the asset.
4. Look for the **Scripted Asset Actions** menu.
5. You should see **Run Auto Prefixer** in the list.

## Trouble Shooting

### Plugin Not Showing Up
- Ensure the `AutoPrefixer.uplugin` file is located directly inside `Plugins/AutoPrefixer/`.
- Ensure you are using a supported version of Unreal Engine (5.1+).

### Context Menu Missing
- Some asset types (like Data Tables or custom blueprints) might require extra configuration if they are not part of the standard pre-configured classes. Check the **[Project Settings](/project-settings/)** for more details.
