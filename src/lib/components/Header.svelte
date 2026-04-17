<script>
  import { slide } from 'svelte/transition';

  let isMobileMenuOpen = false;

  function toggleMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }

  function closeMenu() {
    isMobileMenuOpen = false;
  }
</script>

<header class="fixed top-0 w-full z-[100] transition-all duration-300 backdrop-blur-md bg-white/80 border-b border-slate-200/50 shadow-sm pointer-events-auto">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-20">
      
      <a href="/" class="flex items-center gap-3 group relative z-[110]">
        <img src="/assets/img/logoremove.png" alt="Metech Logo" class="h-12 w-auto transition-transform group-hover:scale-105" />
        <span class="font-bold text-xl tracking-tight text-slate-900">METECH</span>
      </a>

      <nav class="hidden md:flex space-x-8">
        <a href="#hero" class="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Beranda</a>
        <a href="#services" class="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Layanan</a>
        <a href="#about" class="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Tentang</a>
        <a href="#portfolio" class="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Dokumentasi</a>
      </nav>

      <div class="hidden md:flex">
        <a href="#contact" class="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 transition-all duration-300">
          Hubungi Kami
        </a>
      </div>

      <button 
        type="button"
        class="md:hidden relative z-[110] p-2 rounded-md text-slate-900 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-100"
        on:click={toggleMenu}
        aria-label="Toggle Menu"
      >
        {#if isMobileMenuOpen}
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        {:else}
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        {/if}
      </button>

    </div>
  </div>

  {#if isMobileMenuOpen}
    <div transition:slide={{ duration: 300 }} class="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 shadow-2xl z-[90]">
      <nav class="flex flex-col px-6 py-6 space-y-4">
        <a href="#hero" on:click={closeMenu} class="text-base font-medium text-slate-700 hover:text-blue-600">Beranda</a>
        <a href="#services" on:click={closeMenu} class="text-base font-medium text-slate-700 hover:text-blue-600">Layanan</a>
        <a href="#about" on:click={closeMenu} class="text-base font-medium text-slate-700 hover:text-blue-600">Tentang</a>
        <a href="#portfolio" on:click={closeMenu} class="text-base font-medium text-slate-700 hover:text-blue-600">Dokumentasi</a>
        <div class="pt-4 mt-2 border-t border-slate-100">
          <a href="#contact" on:click={closeMenu} class="block w-full text-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            Hubungi Kami
          </a>
        </div>
      </nav>
    </div>
  {/if}
</header>