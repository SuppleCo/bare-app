<script>
  import { CldImage } from 'svelte-cloudinary';
</script>

<h1>svelte-cloudinary compiler bundle reproduction</h1>

<p>
  Run <code>pnpm build</code> and inspect the client chunks.
  The entire Svelte compiler (~414KB) gets bundled into client JS.
</p>

<CldImage
  width={300}
  height={200}
  src="sample"
  alt="Sample image"
/>
