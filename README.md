# Tour Frontend Migration Guide

This repository demonstrates how to migrate a Next.js project from using `/cities/[slug]` to `/cities/[city]` directory structure for dynamic routes.

## Directory Structure
The current structure has both:
- `/app/cities/[slug]` 
- `/app/cities/[city]`

We'll consolidate everything to only use `/cities/[city]`.
