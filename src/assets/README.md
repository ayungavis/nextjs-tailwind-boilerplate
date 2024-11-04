Assets folder can contain all the static files such as images, fonts, etc.

### Structure

```
images
├── ...
└── logo.png
icons
├── ...
├── chevron.svg
└── home.svg
fonts
├── ...
└── inter.woff2
videos
├── ...
└── demo.webm
```

### FAQs

**Why do we not use the public folder for static files?**

According to the [docs](https://nextjs.org/docs/app/building-your-application/optimizing/images), if we want to use local images and utilize the optimization from `next/image` automatically, we should import the image from the file directly instead of using `src="/path/to/image.jpg"`.

For example:

```jsx
import Image from 'next/image';
import img from '@/assets/image.jpg';

export default function Home() {
  return <Image src={img} alt="image" />;
}
```

If we use the example above, Next.js will automatically determine the intrinsic `width` and `height` of the image based on the imported file. It also automatically provides the `blurDataUrl` and `placeholder="blur"` for the image.
