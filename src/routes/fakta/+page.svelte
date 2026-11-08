<script lang="ts">
  import news from '$lib/data/news.json';
</script>

<section class="mx-auto max-w-4xl px-4 py-14">
  <p class="font-mono text-sm font-black tracking-widest text-[#f59e0b]">FAKTA</p>
  <h1 class="mt-3 text-5xl font-black leading-none">Kronologi & Berita</h1>
  <p class="mt-4 max-w-2xl font-semibold text-white/80">Semua ringkasan di bawah merujuk ke pemberitaan sumber tepercaya. Klik judul buat baca aslinya — jangan percaya ringkasan siapa pun, termasuk situs ini.</p>

  <div class="mt-10 space-y-4">
    {#each news as n, i}
      <article class="card-shadow rounded-2xl border-2 border-black bg-[#f5f1e8] p-6 text-black">
        <div class="flex flex-wrap items-center gap-3">
          <span class="rounded-full bg-black px-3 py-1 font-mono text-xs font-black text-white">{n.tanggal}</span>
          <span class="font-mono text-xs font-black tracking-widest text-[#e11d48]">{n.sumber.toUpperCase()}</span>
          <span class="font-mono text-xs text-black/50">#{String(i + 1).padStart(2, '0')}</span>
        </div>
        <h2 class="mt-3 text-2xl font-black leading-snug">{n.judul}</h2>
        <p class="mt-2 font-semibold text-black/75">{n.ringkasan}</p>
        <a href={n.url} target="_blank" rel="noreferrer" class="mt-4 inline-block font-mono text-sm font-black text-[#e11d48] underline">Baca sumber asli →</a>
      </article>
    {/each}
  </div>
</section>
