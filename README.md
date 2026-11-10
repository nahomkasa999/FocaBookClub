# FocaBookClub

A blog for the Foca Book Club — latest posts on the homepage, with a rich-text editor for writing them.

## Stack

Next.js · React · TypeScript · Prisma · PostgreSQL · Kinde auth · Tiptap rich-text editor · Tailwind CSS

## How it works

- Posts are stored in Prisma (`blogPost`, newest first) and listed on the homepage in a grid, with loading skeletons.
- The editor is Tiptap, with tables, images, links, code blocks, and task lists.
- Auth is Kinde.

## Run it

```bash
npm run dev    # next dev --turbopack — http://localhost:3000
npm run build  # next build
npm run start  # next start
```

`postinstall` runs `prisma generate` automatically.
