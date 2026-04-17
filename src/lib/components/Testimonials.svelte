<script>
  // Menggunakan array data agar kode HTML lebih bersih dan mudah ditambah/diedit
  const reviews = [
    {
      name: "Budi Santoso",
      role: "Pemilik Gudang Logistik",
      text: "Pemasangan CCTV dan Fire Alarm sangat rapi. Teknisi sangat profesional dan sabar menjelaskan cara penggunaan aplikasinya. Sangat direkomendasikan!",
      initial: "B"
    },
    {
      name: "Siti Rahmawati",
      role: "Manager HRD Perkantoran",
      text: "Sistem Access Control dari Metech membuat manajemen absensi dan akses pintu kantor menjadi jauh lebih mudah dan aman. Respons tim support juga luar biasa cepat.",
      initial: "S"
    },
    {
      name: "Andi Wijaya",
      role: "Ketua RT Perumahan",
      text: "Kami mempercayakan keamanan gerbang perumahan kepada Metech. Kualitas kamera luar ruangannya sangat jernih meski di malam hari, warga jadi merasa lebih aman.",
      initial: "A"
    }
  ];
</script>

<section id="testimonials" class="py-24 bg-slate-50 border-y border-slate-200/60">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-3xl mx-auto mb-16">
      <h2 class="text-blue-600 font-semibold tracking-wide uppercase text-sm">Testimoni</h2>
      <p class="mt-2 text-3xl md:text-4xl font-bold text-slate-900">Apa Kata Klien Kami</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each reviews as review}
        <div class="group p-8 rounded-3xl bg-white border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-500 hover:-translate-y-2">
          
          <div class="flex text-amber-400 mb-6 gap-1">
            {#each Array(5) as _}
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            {/each}
          </div>

          <p class="text-slate-600 leading-relaxed mb-8 italic">"{review.text}"</p>
          
          <div class="flex items-center gap-4 mt-auto">
            <div class="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-bold flex items-center justify-center text-lg">
              {review.initial}
            </div>
            <div>
              <h4 class="font-bold text-slate-900">{review.name}</h4>
              <p class="text-sm text-slate-500">{review.role}</p>
            </div>
          </div>

        </div>
      {/each}
    </div>
  </div>
</section>