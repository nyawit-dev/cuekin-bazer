<script lang="ts">
  import news from '$lib/data/news.json';
</script>

<section class="mx-auto max-w-4xl px-4 py-14">
  <p class="font-mono text-sm font-black tracking-widest text-[#f59e0b]">SUMBER</p>
  <h1 class="mt-3 text-5xl font-black leading-none">Sumber Berita</h1>
  <p class="mt-4 max-w-2xl font-semibold text-white/80">Jangan percaya ringkasan. Baca sumber aslinya. Kalau ada yang keliru di situs ini, buka Issue di GitHub.</p>

  <div class="mt-10 space-y-3">
    {#each news as n}
      <a href={n.url} target="_blank" rel="noreferrer" class="card-shadow-sm flex flex-wrap items-center justify-between gap-3 rounded-2xl border-2 border-black bg-[#f5f1e8] p-5 text-black transition hover:-translate-y-0.5">
        <div>
          <p class="font-mono text-xs font-black tracking-widest text-[#e11d48]">{n.sumber.toUpperCase()} · {n.tanggal}</p>
          <p class="mt-1 font-black">{n.judul}</p>
        </div>
        <span class="font-mono text-sm font-black">↗</span>
      </a>
    {/each}
  </div>

  <p class="mt-8 rounded-xl border-2 border-black bg-black px-4 py-3 font-mono text-sm text-white/80">Konteks tambahan: BBC News Indonesia — kasus Bintang Emon & cara mengenali buzzer. Lihat halaman Fakta untuk pranala lengkap.</p>
</section>
