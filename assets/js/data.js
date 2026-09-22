// data.js — Single source of truth untuk semua konten website PKK Kelompok 6
// Semua angka menggunakan placeholder [Jumlah], [Harga], [Nominal], [Rp —].
// Jangan mengarang angka nyata.

const PKK_DATA = {
  brand: {
    name: "Pempek Kelompok 6",
    shortName: "Kelompok 6",
    tagline: "Pempek buatan kelompok, rasa warisan Palembang",
    description:
      "Produk olahan ikan tenggiri khas Palembang, dikerjakan kelompok dengan standar kebersihan dan cita rasa yang terjaga.",
    theme: "Modern Culinary Editorial",
  },

  nav: [
    { label: "Beranda", href: "#beranda" },
    { label: "Produk", href: "#produk" },
    { label: "Perjalanan", href: "#perjalanan" },
    { label: "Proses", href: "#proses" },
    { label: "Produksi", href: "#produksi" },
    { label: "Penjualan", href: "#penjualan" },
    { label: "Keuangan", href: "#keuangan" },
    { label: "Tim", href: "#tim" },
  ],

  hero: {
    eyebrow: "PKK • KELOMPOK 6",
    title: "From Production to Plate.",
    subtitle:
      "Our journey of building a pempek business — from preparation and production to marketing and sales.",
    ctaPrimary: { label: "Explore Our Journey", href: "#perjalanan" },
    ctaSecondary: { label: "View Product", href: "#produk" },
    scrollLabel: "Gulir",
  },

  product: {
    eyebrow: "Produk Kami",
    heading: "Product Overview",
    subheading: "Sajian khas Palembang yang kami produksi secara berkelompok.",
    description:
      "Pempek dibuat dari ikan tenggiri pilihan, dicampur tepung sagu, dibentuk, dan direbus hingga teksturnya kenyal. Disajikan dengan cuko khas yang pedas-manis.",
    item: {
      name: "Pempek",
      category: "Culinary",
      targetMarket: "Students & General Consumers",
      positioning: "Affordable & Delicious",
      type: "[Tipe Pempek]",
      price: "[Harga]",
      quantity: "[Jumlah]",
    },
  },

  valuePropositions: [
    {
      judul: "Authentic Taste",
      deskripsi: "Rasa khas yang menjadi daya tarik utama produk.",
      ikon: "taste",
    },
    {
      judul: "Affordable",
      deskripsi: "Harga disesuaikan dengan target pasar.",
      ikon: "affordable",
    },
    {
      judul: "Practical",
      deskripsi: "Mudah dikemas dan dibawa.",
      ikon: "practical",
    },
    {
      judul: "Quality",
      deskripsi: "Memperhatikan kebersihan dan kualitas selama produksi.",
      ikon: "quality",
    },
  ],

  journey: {
    eyebrow: "Perjalanan Kelompok",
    heading: "Our Journey",
    subheading: "Tahapan yang kami lalui dari ide hingga produk siap dipasarkan.",
    stages: [
      { tahap: "Tahap 1", judul: "IDEA", deskripsi: "Ide awal dan perencanaan bisnis." },
      { tahap: "Tahap 2", judul: "PREPARATION", deskripsi: "Persiapan bahan dan alat." },
      { tahap: "Tahap 3", judul: "PRODUCTION", deskripsi: "Proses produksi pempek." },
      { tahap: "Tahap 4", judul: "PACKAGING", deskripsi: "Pengemasan produk." },
      { tahap: "Tahap 5", judul: "MARKETING", deskripsi: "Pemasaran dan promosi." },
      { tahap: "Tahap 6", judul: "SALES", deskripsi: "Penjualan dan distribusi." },
      { tahap: "Tahap 7", judul: "EVALUATION", deskripsi: "Evaluasi hasil dan perbaikan." },
    ],
  },

  process: {
    eyebrow: "Proses Produksi",
    heading: "Production Process",
    subheading: "Langkah demi langkah, dari ikan segar hingga pempek siap saji.",
    steps: [
      { nomor: "01", judul: "Ingredient Preparation", deskripsi: "Memilih dan menyiapkan bahan baku segar." },
      { nomor: "02", judul: "Dough Preparation", deskripsi: "Mencampur daging ikan dengan sagu dan bumbu." },
      { nomor: "03", judul: "Shaping", deskripsi: "Membentuk adonan sesuai varian pempek." },
      { nomor: "04", judul: "Cooking", deskripsi: "Merebus pempek hingga matang." },
      { nomor: "05", judul: "Cooling", deskripsi: "Mendinginkan pempek sebelum tahap selanjutnya." },
      { nomor: "06", judul: "Quality Check", deskripsi: "Memeriksa tekstur, rasa, dan tampilan." },
      { nomor: "07", judul: "Packaging", deskripsi: "Mengemas pempek dengan rapi dan higienis." },
    ],
  },

  progress: {
    eyebrow: "Kemajuan Produksi",
    heading: "Production Progress",
    subheading: "Pantauan target dan realisasi produksi kelompok.",
    metrics: [
      { label: "Production Target", nilai: "[Jumlah]", satuan: "buah" },
      { label: "Produced", nilai: "[Jumlah]", satuan: "buah" },
      { label: "Quality Passed", nilai: "[Jumlah]", satuan: "buah" },
      { label: "Ready to Sell", nilai: "[Jumlah]", satuan: "buah" },
    ],
    progressBar: {
      label: "Persentase Produksi",
      value: "[Persen]",
      max: 100,
    },
    catatan: "Angka aktual akan diisi setelah seluruh batch produksi selesai dihitung.",
  },

  quality: {
    eyebrow: "Pemeriksaan Kualitas",
    heading: "Quality Control",
    subheading: "Daftar periksa yang kami gunakan sebelum produk dinyatakan layak jual.",
    checklist: [
      { item: "Appearance", standar: "Warna dan bentuk menarik" },
      { item: "Size consistency", standar: "Ukuran seragam" },
      { item: "Texture", standar: "Kenyal dan tidak lembek" },
      { item: "Taste", standar: "Rasa gurih dan seimbang" },
      { item: "Packaging", standar: "Rapi, tertutup, dan higienis" },
      { item: "Hygiene", standar: "Bebas kontaminasi" },
    ],
  },

  packaging: {
    eyebrow: "Pengemasan",
    heading: "Packaging",
    subheading: "Menjaga kesegaran dan tampilan produk agar menarik.",
    description:
      "Pempek dikemas dalam wadah bersih dan diberi label berisi nama produk, tanggal produksi, dan informasi kelompok. Kemasan dirancang agar pempek tetap terjaga kualitasnya dan mudah dibawa.",
    features: [
      { label: "Wadah", isi: "Kemasan bersih dan food-grade" },
      { label: "Label", isi: "Nama produk, tanggal produksi, nama kelompok" },
      { label: "Segel", isi: "Tertutup rapat agar kedap udara" },
      { label: "Informasi", isi: "Cara penyimpanan dan penyajian" },
    ],
  },

  marketing: {
    eyebrow: "Strategi Pemasaran",
    heading: "Marketing",
    subheading: "Cara kami memperkenalkan pempek kepada calon pembeli.",
    strategies: [
      { judul: "Direct Selling", deskripsi: "Menawarkan produk secara langsung ke konsumen." },
      { judul: "Pre-Order", deskripsi: "Mengumpulkan pesanan terlebih dahulu agar produksi tepat sasaran." },
      { judul: "Social Media", deskripsi: "Mempromosikan produk melalui media sosial." },
      { judul: "Word of Mouth", deskripsi: "Memanfaatkan rekomendasi dari pembeli." },
    ],
    funnel: {
      heading: "Alur Penjualan",
      stages: [
        { tahap: "Awareness", deskripsi: "Calon pembeli mengenal produk." },
        { tahap: "Interest", deskripsi: "Calon pembeli tertarik dan bertanya." },
        { tahap: "Order", deskripsi: "Pembeli melakukan pemesanan." },
        { tahap: "Purchase", deskripsi: "Pembayaran dan serah terima produk." },
        { tahap: "Feedback", deskripsi: "Pembeli memberikan umpan balik." },
      ],
    },
  },

  sales: {
    eyebrow: "Kinerja Penjualan",
    heading: "Sales Performance",
    subheading: "Rekap penjualan per periode pemasaran.",
    metrics: [
      { label: "Total Production", nilai: "[Jumlah]", satuan: "buah" },
      { label: "Total Sold", nilai: "[Jumlah]", satuan: "buah" },
      { label: "Remaining", nilai: "[Jumlah]", satuan: "buah" },
      { label: "Sell-through Rate", nilai: "[Persen]%", satuan: "" },
      { label: "Revenue", nilai: "[Rp —]", satuan: "" },
    ],
    barChart: {
      heading: "Penjualan per Periode",
      unit: "Satuan: buah",
      data: [
        { periode: "Minggu 1", nilai: "[Jumlah]" },
        { periode: "Minggu 2", nilai: "[Jumlah]" },
        { periode: "Minggu 3", nilai: "[Jumlah]" },
        { periode: "Minggu 4", nilai: "[Jumlah]" },
      ],
    },
    catatan: "Nilai aktual diisi setelah seluruh periode penjualan selesai.",
  },

  financial: {
    eyebrow: "Rincian Keuangan",
    heading: "Financial Overview",
    subheading: "Ringkasan biaya, pendapatan, dan laba proyek.",
    categories: [
      { label: "Raw Materials", nilai: "[Rp —]", tipe: "pengeluaran" },
      { label: "Packaging", nilai: "[Rp —]", tipe: "pengeluaran" },
      { label: "Operational", nilai: "[Rp —]", tipe: "pengeluaran" },
      { label: "Other", nilai: "[Rp —]", tipe: "pengeluaran" },
    ],
    ringkasan: [
      { label: "Total Cost", nilai: "[Rp —]" },
      { label: "Revenue", nilai: "[Rp —]" },
      { label: "Profit", nilai: "[Rp —]" },
      { label: "Profit Margin", nilai: "[Persen]%" },
    ],
    formula: "Profit = Revenue − Total Cost · Margin = (Profit ÷ Revenue) × 100%",
  },

  insight: {
    eyebrow: "Wawasan Bisnis",
    heading: "Business Insight",
    subheading: "Hal yang kami pelajari dari proyek ini.",
    poin: [
      { judul: "Perencanaan adalah kunci", deskripsi: "Perencanaan yang matang membantu menghindari pemborosan." },
      { judul: "Kualitas tidak bisa dikompromikan", deskripsi: "Produk berkualitas menjadi dasar kepercayaan pembeli." },
      { judul: "Kerja tim menentukan hasil", deskripsi: "Kolaborasi yang baik mempercepat proses dan meningkatkan hasil." },
      { judul: "Umpan balik pembeli berharga", deskripsi: "Masukan dari pembeli membantu perbaikan berkelanjutan." },
    ],
  },

  team: {
    eyebrow: "Tim Kami",
    heading: "Our Team",
    subheading: "Lima anggota yang mengerjakan proyek ini bersama-sama.",
    members: [
      { nama: "[Nama Anggota 1]", peran: "Production", deskripsi: "Bertanggung jawab atas proses produksi." },
      { nama: "[Nama Anggota 2]", peran: "Finance", deskripsi: "Mengelola keuangan dan anggaran." },
      { nama: "[Nama Anggota 3]", peran: "Marketing", deskripsi: "Merancang strategi pemasaran." },
      { nama: "[Nama Anggota 4]", peran: "Packaging", deskripsi: "Memastikan kemasan yang baik." },
      { nama: "[Nama Anggota 5]", peran: "Documentation", deskripsi: "Mendokumentasikan proses dan hasil." },
    ],
  },

  evaluation: {
    eyebrow: "Evaluasi Proyek",
    heading: "Evaluation",
    subheading: "Apa yang berjalan baik, apa yang perlu diperbaiki, dan pelajaran untuk ke depan.",
    columns: [
      {
        judul: "What Worked",
        deskripsi: "Aspek yang berhasil dan perlu dipertahankan.",
        items: ["Product production completed", "Team collaboration", "Product successfully marketed"],
      },
      {
        judul: "Challenges",
        deskripsi: "Hambatan yang dihadapi selama proyek.",
        items: ["Production time", "Product consistency", "Limited marketing reach", "Cost management"],
      },
      {
        judul: "Next Improvement",
        deskripsi: "Perbaikan untuk proyek ke depan.",
        items: [
          "Better production planning",
          "Better packaging",
          "Stronger promotion",
          "Better cost control",
          "Improved quality consistency",
        ],
      },
    ],
  },

  cta: {
    heading: "Every Product Has A Process. Every Process Builds A Business.",
    subheading: "Kelompok 6 — PKK",
    button: { label: "Explore Our Journey", href: "#perjalanan" },
  },

  footer: {
    nama: "PEMPEK — K6",
    deskripsi: "PKK Project Kelompok 6",
    credits: "Dibuat oleh Kelompok 6 untuk Projek PKK.",
    hak: "© 2026 Kelompok 6. PKK Project.",
  },
};

// Ekspos ke global agar script.js dapat mengakses
window.PKK_DATA = PKK_DATA;