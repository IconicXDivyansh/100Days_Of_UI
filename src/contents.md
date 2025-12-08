
# Adding a new demo
---
### Step 1 : Create a new folder in src/content/demos/<DemoName>
### Step 2 : Create a new file in src/content/demos/<DemoName>/index.mdx  <-- This file serves a the content for the demo page, whatever text will appear on the demo page, like learning, resources & etc.
### Step 3 : Create a new `demo.tsx` in the same folder like this, `src/content/demos/<DemoName>/demo.tsx` <-- This file serves as astro island and all the react code related to demo goes here...


# Configuring the `.mdx` file

## Step 1: Frontmatter code 
- title & description are mandatory in order to create new route.
- layout is optional, if not provided then it will use the default layout. `DemoLayout` simply adds header which is for convineance for going back to the showcase or homepage.
- containerType is optional, if not provided then it will use the default container type. `contained` is for demo pages where we want to limit the width of the content. `full` is for pages where we want to use full width.
