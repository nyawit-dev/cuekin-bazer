<script lang="ts">
  import CopyButton from '$lib/components/CopyButton.svelte';
  import templates from '$lib/data/templates.json';
</script>

<section class="mx-auto max-w-4xl px-4 py-14">
  <p class="font-mono text-sm font-black tracking-widest text-[#22c55e]">SALIN & SEBAR</p>
  <h1 class="mt-3 text-5xl font-black leading-none">Teks Siap Share</h1>
  <p class="mt-4 max-w-2xl font-semibold text-white/80">Salin, tempel, sebar ke grup dan media sosialmu. Satu share ke grup yang tepat lebih berarti dari seribu debat di kolom buzzer.</p>

  <div class="mt-10 space-y-5">
    {#each templates as t}
      <article class="card-shadow rounded-2xl border-2 border-black bg-[#f5f1e8] p-6 text-black">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div>
            <span class="rounded-full bg-black px-3 py-1 font-mono text-xs font-black text-white">{t.platform}</span>
            <h2 class="mt-2 text-xl font-black">{t.judul}</h2>
          </div>
          <CopyButton text={t.teks} />
        </div>
        <pre class="mt-4 whitespace-pre-wrap rounded-xl border-2 border-black bg-white p-4 font-mono text-sm font-semibold">{t.teks}</pre>
      </article>
    {/each}
  </div>
</section>
