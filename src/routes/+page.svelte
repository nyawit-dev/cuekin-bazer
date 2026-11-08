<script lang="ts">
  import { base } from '$app/paths';
  import rules from '$lib/data/rules.json';
  const boleh = rules.filter((r) => r.kategori === 'BOLEH').slice(0, 3);
  const jangan = rules.filter((r) => r.kategori === 'JANGAN').slice(0, 3);
</script>

<!-- MARQUEE -->
<div class="overflow-hidden border-b-4 border-black bg-[#e11d48] py-2 text-white">
  <div class="marquee flex whitespace-nowrap font-mono text-sm font-black tracking-widest">
    <span class="pr-8">JANGAN KOMEN ✕ JANGAN SHARE ✕ JANGAN DEBAT ✕ SCROLL LEWAT ✓ DUkung FAKTA ✓ #CUEKINBUZZER ✕&nbsp;</span>
    <span class="pr-8">JANGAN KOMEN ✕ JANGAN SHARE ✕ JANGAN DEBAT ✕ SCROLL LEWAT ✓ DUkung FAKTA ✓ #CUEKINBUZZER ✕&nbsp;</span>
  </div>
</div>

<!-- HERO -->
<section class="mx-auto max-w-6xl px-4 pt-14 pb-10">
  <p class="inline-block rounded-full border-2 border-black bg-[#f59e0b] px-3 py-1 font-mono text-xs font-black text-black">GERAKAN DIGITAL INDONESIA · SEJAK 5 NOV 2026</p>
  <h1 class="mt-6 text-6xl font-black leading-[0.9] tracking-tight md:text-8xl">
    DIAM BUKAN<br />
    <span class="outline-text">BERARTI</span><br />
    <span class="text-[#e11d48]">BUTA.</span>
  </h1>
  <p class="mt-6 max-w-2xl text-xl font-semibold leading-relaxed text-white/85">
    Cuek bukan berarti setuju. Berhenti memberi engagement ke buzzer, hoaks, dan pengalihan isu —
    alihkan dukunganmu ke konten fakta: karhutla, banjir, harga, dan kebijakan yang berdampak ke rakyat.
  </p>
  <div class="mt-8 flex flex-wrap gap-3">
    <a href="{base}/panduan/" class="card-shadow rounded-full border-2 border-black bg-[#e11d48] px-6 py-3 font-black text-white transition hover:-translate-y-1">Pelajari Panduannya →</a>
    <a href="{base}/salin/" class="card-shadow rounded-full border-2 border-black bg-[#f5f1e8] px-6 py-3 font-black text-black transition hover:-translate-y-1">Salin Teks Siap Share</a>
  </div>

  <!-- STATS -->
  <div class="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
    <div class="card-shadow rounded-2xl border-2 border-black bg-[#f5f1e8] p-5 text-black">
      <p class="font-mono text-4xl font-black">576rb+</p>
      <p class="mt-1 text-sm font-bold">Like dalam &lt;24 jam (unggahan Windah)</p>
    </div>
    <div class="card-shadow rounded-2xl border-2 border-black bg-[#22c55e] p-5 text-black">
      <p class="font-mono text-4xl font-black">171rb</p>
      <p class="mt-1 text-sm font-bold">Repost — tanpa satu pun debat kusir</p>
    </div>
    <div class="card-shadow rounded-2xl border-2 border-black bg-[#e11d48] p-5 text-white">
      <p class="font-mono text-4xl font-black">2</p>
      <p class="mt-1 text-sm font-bold">Prinsip: stop engagement buzzer, dukung fakta</p>
    </div>
    <div class="card-shadow rounded-2xl border-2 border-black bg-[#f59e0b] p-5 text-black">
      <p class="font-mono text-4xl font-black">0</p>
      <p class="mt-1 text-sm font-bold">Komentar yang perlu dibalas. Scroll lewat saja.</p>
    </div>
  </div>
</section>

<!-- MANIFESTO -->
<section class="border-y-4 border-black bg-[#f5f1e8] text-black">
  <div class="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-2">
    <div>
      <h2 class="text-4xl font-black leading-tight">Kalau kebijakan bagus,<br />ngapain butuh ribuan akun<br />buat tepuk tangan?</h2>
      <p class="mt-4 font-semibold leading-relaxed text-black/75">Buzzer hidup dari engagement kita. Setiap balasan, share, dan debat adalah donasi untuk mesin provokasi. Gerakan ini memutus donasinya — dan memindahkannya ke hal yang benar-benar penting.</p>
    </div>
    <div class="space-y-4">
      <div class="card-shadow rounded-2xl border-2 border-black bg-white p-5">
        <p class="font-mono text-xs font-black tracking-widest text-[#e11d48]">PRINSIP 01 — STOP</p>
        <p class="mt-2 font-bold">Jangan beri like, komentar, share, repost, quote, atau debat ke konten buzzer. Bahkan screenshot untuk dibalas pun dilarang.</p>
      </div>
      <div class="card-shadow rounded-2xl border-2 border-black bg-[#22c55e] p-5 text-black">
        <p class="font-mono text-xs font-black tracking-widest">PRINSIP 02 — ALIHKAN</p>
        <p class="mt-2 font-bold">Like, simpan, tonton penuh, dan share konten berbasis fakta soal karhutla, banjir, harga, dan dampak kebijakan.</p>
      </div>
    </div>
  </div>
</section>

<!-- PREVIEW RULES -->
<section class="mx-auto max-w-6xl px-4 py-14">
  <div class="flex flex-wrap items-end justify-between gap-4">
    <h2 class="text-4xl font-black">Panduan 60 detik</h2>
    <a href="{base}/panduan/" class="font-mono text-sm font-black text-[#22c55e] underline">Lihat semua 13 aturan →</a>
  </div>
  <div class="mt-8 grid gap-6 md:grid-cols-2">
    <div class="card-shadow rounded-2xl border-2 border-black bg-[#22c55e] p-6 text-black">
      <p class="font-mono text-sm font-black tracking-widest">✓ BOLEH</p>
      <ul class="mt-4 space-y-3 font-bold">
        {#each boleh as r}<li>• {r.teks}</li>{/each}
      </ul>
    </div>
    <div class="card-shadow rounded-2xl border-2 border-black bg-[#e11d48] p-6 text-white">
      <p class="font-mono text-sm font-black tracking-widest">✕ JANGAN</p>
      <ul class="mt-4 space-y-3 font-bold">
        {#each jangan as r}<li>• {r.teks}</li>{/each}
      </ul>
    </div>
  </div>
</section>

<!-- SATIRE TEASER -->
<section class="mx-auto max-w-6xl px-4 pb-14">
  <div class="card-shadow rounded-3xl border-2 border-black bg-[#f59e0b] p-8 text-black md:p-12">
    <p class="font-mono text-xs font-black tracking-widest">SATIR · OPINI</p>
    <h2 class="mt-3 text-3xl font-black leading-tight md:text-5xl">Karhutla tidak padam dengan tagar.<br />Banjir tidak surut dengan narasi.</h2>
    <p class="mt-4 max-w-2xl font-semibold">Fakta di lapangan tidak bisa di-scroll lewat. Baca satir lengkapnya — tegas, tapi bukan fitnah.</p>
    <a href="{base}/satir/" class="card-shadow-sm mt-6 inline-block rounded-full border-2 border-black bg-black px-6 py-3 font-black text-white transition hover:-translate-y-0.5">Buka Halaman Satir →</a>
  </div>
</section>

<!-- CTA -->
<section class="mx-auto max-w-6xl px-4 pb-16 text-center">
  <p class="floaty inline-block rounded-2xl border-2 border-black bg-white px-6 py-4 font-mono text-lg font-black text-black card-shadow">#CuekinBuzzer</p>
  <p class="mx-auto mt-6 max-w-xl font-semibold text-white/80">Bagikan situs ini ke grup WhatsApp-mu. Satu share ke grup yang tepat lebih berarti dari seribu debat di kolom buzzer.</p>
</section>
