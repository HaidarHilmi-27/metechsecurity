<script>
  import Header from '$lib/components/Header.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import About from '$lib/components/About.svelte';
  import Services from '$lib/components/Services.svelte';
  import Portfolio from '$lib/components/Portfolio.svelte';
  import Testimonials from '$lib/components/Testimonials.svelte'; // <-- Tambahkan import ini
  import Contact from '$lib/components/Contact.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>METECH Security System | Keamanan Terpercaya</title>
  <meta name="description" content="Solusi teknologi keamanan terbaik untuk bisnis Anda. CCTV, Access Control, dan Fire Alarm System." />
  
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
</svelte:head>

<div class="font-['Inter'] bg-slate-50 text-slate-800 antialiased selection:bg-blue-200 selection:text-blue-900 overflow-x-hidden relative">
  <Header />

  <main>
    <Hero />
    <About />
    <Services />
    <Portfolio />
    <Testimonials /> <Contact />
  </main>

  <Footer />
</div>