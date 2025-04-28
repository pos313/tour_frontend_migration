# Tour Frontend Migration Guide

This repository demonstrates how to migrate a Next.js project from using both `/cities/[slug]` and `/cities/[city]` directory structures to only using the `/cities/[city]` directory structure for dynamic routes.

## Problem Statement

The current project has two parallel route structures:
- `/cities/[slug]` - Possibly an older implementation
- `/cities/[city]` - The target implementation

Having multiple route patterns for the same concept creates confusion and maintenance issues. This guide shows how to consolidate everything to only use the `/cities/[city]` route pattern.

## Migration Process

The migration involves:

1. Moving components from `/cities/[slug]` to `/cities/[city]`
2. Creating a new `/chat/[city]` route instead of `/chat/[slug]`
3. Updating all links and references to use the new route pattern
4. Removing the old routes

## Directory Structure

### Before Migration

```
app/
├── cities/
│   ├── CitiesPageClient.jsx
│   ├── page.jsx
│   ├── [city]/
│   │   └── page.jsx (incomplete implementation)
│   └── [slug]/
│       ├── CityDetailClient.jsx
│       ├── page.jsx
│       └── placeholder.jsx
└── chat/
    └── [slug]/
        └── page.jsx
components/
└── chat/
    └── MessageChatContent.jsx
```

### After Migration

```
app/
├── cities/
│   ├── CitiesPageClient.jsx
│   ├── page.jsx
│   └── [city]/
│       ├── CityDetailClient.jsx
│       ├── page.jsx
│       └── placeholder.jsx
└── chat/
    └── [city]/
        └── page.jsx
components/
└── chat/
    └── MessageChatContent.jsx
```

## Key Files Modified

- `app/cities/[city]/CityDetailClient.jsx` - Added the component from [slug]
- `app/cities/[city]/page.jsx` - Updated to use the CityDetailClient
- `app/cities/[city]/placeholder.jsx` - Added from [slug]
- `app/chat/[city]/page.jsx` - Created to replace [slug] version
- `components/chat/MessageChatContent.jsx` - Updated links to use city routes

## Detailed Steps

For step-by-step instructions on how to migrate your project, see [MIGRATION_GUIDE.md](MIGRATION_GUIDE.md).

## Implementation Example

This repository contains example code showing both the "before" state with dual structures and the "after" state with the consolidated structure. You can explore the commits to see exactly what changes were made during the migration process.
