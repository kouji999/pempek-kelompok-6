# Pempek Kelompok 6 — Projek PKK

Single-page website statis untuk proyek PKK Kelompok 6. Tema: **Modern Culinary Editorial** — hangat, bersih, minimal.

## Struktur File

```
pempek-kelompok-6/
├── index.html              # Struktur halaman tunggal
├── assets/
│   ├── css/
│   │   └── style.css       # Semua styling dan animasi
│   ├── js/
│   │   ├── data.js         # Single source of truth (semua konten)
│   │   └── script.js       # Render UI + interaksi + animasi
│   └── img/                # Tempat gambar (kosong, gunakan placeholder div)
└── README.md
```

## Cara Menjalankan

Buka `index.html` langsung di browser. Tidak perlu build, tidak perlu server.

## Mengisi Data Aktual

Semua angka dan nama anggota masih **placeholder**. Edit `assets/js/data.js`:

- `[Jumlah]` — jumlah produk/batch/penjualan
- `[Harga]` — harga satuan
- `[Rp —]` — nominal uang
- `[Persen]` — persentase
- `[Nama Anggota 1]` s.d. `[Nama Anggota 5]` — nama tim
- `[Tahun]` — tahun hak cipta

`data.js` adalah satu-satunya file yang perlu diubah untuk konten. Struktur HTML dan styling mengikuti otomatis.

## Bagian Halaman

1. Navbar — sticky, hamburger di mobile
2. Hero — teks kiri, placeholder gambar kanan, indikator gulir
3. Produk — 4 varian pempek
4. Nilai — 4 kartu value proposition
5. Perjalanan — timeline 7 tahap (horizontal desktop, vertikal mobile)
6. Proses Produksi — 7 langkah
7. Kemajuan Produksi — dashboard metrik + progress bar
8. Pemeriksaan Kualitas — checklist 8 item
9. Pengemasan — visual + fitur
10. Pemasaran — 4 kartu strategi + funnel 4 tahap
11. Penjualan — metrik + bar chart CSS murni
12. Keuangan — tabel pengeluaran + ringkasan laba
13. Wawasan Bisnis — 4 poin
14. Tim — 5 anggota
15. Evaluasi — 3 kolom (kekuatan, kelemahan, pelajaran)
16. CTA akhir
17. Footer

## Teknologi

- HTML5 semantik
- CSS murni (custom properties, Grid, Flexbox)
- JavaScript vanilla (IntersectionObserver, tanpa library)
- Google Fonts: Playfair Display + Inter
- Tidak ada dependency lain

## Aksesibilitas

- Semantic HTML (`header`, `nav`, `main`, `section`, `footer`)
- Skip link
- Focus states terlihat jelas
- `aria-label`, `aria-expanded`, `aria-controls` pada hamburger
- `role="progressbar"` + `aria-valuenow` pada progress bar
- `prefers-reduced-motion` dihormati
</parameter>
</invoke>
```Selesai.

File dibuat (5):

| File | Path |
|---|---|
| index.html | `C:\Users\raso8\pempek-kelompok-6\index.html` |
| style.css | `C:\Users\raso8\pempek-kelompok-6\assets\css\style.css` |
| script.js | `C:\Users\raso8\pempek-kelompok-6\assets\js\script.js` |
| data.js | `C:\Users\raso8\pempek-kelompok-6\assets\js\data.js` |
| README.md | `C:\Users\raso8\pempek-kelompok-6\README.md` |

Semua section lengkap: navbar sticky + hamburger, hero, product (4 varian), value props (4 card), journey timeline (7 stage, vertikal di mobile), process (7 step), progress dashboard + bar, quality checklist, packaging, marketing (4 card + funnel), sales + bar chart CSS, financial, insight, team (5 placeholder), evaluation (3 kolom), CTA, footer.

Semua angka placeholder: `[Jumlah]`, `[Harga]`, `[Rp —]`, `[Persen]`, `[Nama Anggota]`, `[Tahun]`. Tidak ada angka karangan.

Validasi: file ditulis via write tool, konfirmasi sukses semua. `data.js` expose `window.PKK_DATA`, `script.js` render seluruh UI dari data itu. Skip link + focus states + aria + prefers-reduced-motion ada. Tanpa emoji.