<script>
  let sliderContainer;

  function slideLeft() {
    if (sliderContainer) {
      sliderContainer.scrollBy({ left: -sliderContainer.offsetWidth / 3, behavior: 'smooth' });
    }
  }

  function slideRight() {
    if (sliderContainer) {
      sliderContainer.scrollBy({ left: sliderContainer.offsetWidth / 3, behavior: 'smooth' });
    }
  }

  const portfolios = [
    { src: '/assets/img/cctv1.jpeg', title: 'CCTV Indoor 1', desc: 'Area Perkantoran' },
    { src: '/assets/img/alarm1.jpeg', title: 'Fire Alarm Panel', desc: 'Sistem Pusat' },
    { src: '/assets/img/cctv2.jpeg', title: 'CCTV Outdoor', desc: 'Area Parkir' },
    { src: '/assets/img/alarm2.jpeg', title: 'Smoke Detector', desc: 'Lorong Apartemen' },
    { src: '/assets/img/cctv3.jpeg', title: 'Control Room', desc: 'Pusat Pemantauan' },
    { src: '/assets/img/cctv4.jpeg', title: 'Dome Camera', desc: 'Lobby Perusahaan' },
    { src: '/assets/img/cctv5.jpeg', title: 'Bullet Camera HD', desc: 'Gerbang Utama' }
  ];
</script>

<section id="portfolio" class="py-24 bg-white relative">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-end mb-12">
      <div>
        <h2 class="text-blue-600 font-semibold tracking-wide uppercase text-sm">Portofolio</h2>
        <p class="mt-2 text-3xl md:text-4xl font-bold text-slate-900">Dokumentasi Kami</p>
      </div>
      
      <div class="hidden md:flex gap-3">
        <button on:click={slideLeft} class="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all" aria-label="Geser Kiri">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>
        <button on:click={slideRight} class="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all" aria-label="Geser Kanan">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
      </div>
    </div>

    <div class="relative -mx-4 px-4 sm:mx-0 sm:px-0">
      <div 
        bind:this={sliderContainer} 
        class="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scroll-smooth hide-scrollbar"
      >
        {#each portfolios as item}
          <div class="snap-start shrink-0 w-[85vw] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-slate-100 aspect-[4/3] cursor-pointer">
            <img src={item.src} alt={item.title} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h4 class="text-white font-bold text-xl mb-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h4>
              <p class="text-blue-300 text-sm translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">{item.desc}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .hide-scrollbar {
    -ms-overflow-style: none;  
    scrollbar-width: none;  
  }
  .hide-scrollbar::-webkit-scrollbar {
    display: none; 
  }
</style>