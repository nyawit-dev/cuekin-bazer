<script lang="ts">
  import rules from '$lib/data/rules.json';
  let open = -1;
  let checked = new Set<number>();
  function toggle(i: number) {
    const next = new Set(checked);
    if (next.has(i)) next.delete(i); else next.add(i);
    checked = next;
  }
</script>

<section class="mx-auto max-w-4xl px-4 py-14">
  <p class="font-mono text-sm font-black tracking-widest text-[#22c55e]">PANDUAN</p>
  <h1 class="mt-3 text-5xl font-black leading-none">Boleh / Jangan</h1>
  <p class="mt-4 max-w-2xl font-semibold text-white/80">13 aturan dari unggahan Windah Basudara. Klik buat lihat alasannya, centang yang sudah kamu lakukan — checklist tersimpan di browser ini saja.</p>
  <p class="mt-4 rounded-xl border-2 border-black bg-[#f59e0b] px-4 py-3 font-mono text-sm font-black text-black">Progres: {checked.size} / {rules.length} aturan dipahami</p>

  <div class="mt-8 space-y-3">
    {#each rules as r, i}
      <div class="card-shadow-sm overflow-hidden rounded-2xl border-2 border-black {r.kategori === 'BOLEH' ? 'bg-[#22c55e] text-black' : 'bg-[#e11d48] text-white'}">
        <div class="flex items-center gap-3 p-4">
          <input type="checkbox" checked={checked.has(i)} onchange={() => toggle(i)} class="h-5 w-5 accent-black" aria-label="Sudah dipahami" />
          <button class="flex-1 text-left font-bold" onclick={() => (open = open === i ? -1 : i)} aria-expanded={open === i}>
            <span class="font-mono text-xs font-black tracking-widest">{r.kategori === 'BOLEH' ? '✓ BOLEH' : '✕ JANGAN'}</span><br />{r.teks}
          </button>
          <span class="font-mono font-black">{open === i ? '−' : '+'}</span>
        </div>
        {#if open === i}
          <p class="border-t-2 border-black/30 bg-black/15 px-4 py-3 text-sm font-semibold">Kenapa? {r.alasan}</p>
        {/if}
      </div>
    {/each}
  </div>
</section>
