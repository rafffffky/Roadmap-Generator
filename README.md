# Tech Skill Gap & Career Roadmap Generator

Pilih peran impianmu di dunia teknologi, ukur seberapa siap dirimu, dan dapatkan peta belajar yang jelas. Semuanya berjalan langsung di browser, tanpa instalasi dan tanpa akun.

---

## Latar Belakang

Banyak pembelajar teknologi dan calon profesional terjebak dalam *tutorial hell*: belajar banyak hal tanpa arah, karena panduan karier yang tersedia umumnya bersifat umum dan tidak menjawab tiga pertanyaan dasar:

- Di mana posisi kompetensiku saat ini?
- Skill apa yang harus dipelajari lebih dulu, berdasarkan prasyarat teknisnya?
- Seberapa relevan skill yang kumiliki dengan lowongan kerja yang sebenarnya?

Aplikasi ini menjembatani kesenjangan itu lewat audit mandiri yang terukur, estimasi waktu belajar yang realistis, dan analisis kecocokan lowongan yang berjalan sepenuhnya di browser pengguna.

---

## Fitur Utama

- **8 jalur karier**: Frontend, Backend, Data Scientist, AI/ML Engineer, DevOps, Mobile, UI/UX, dan Cybersecurity.
- **Audit mandiri 3 tingkat**: tandai tiap skill sebagai Belum dimulai, Sedang belajar, atau Mahir. Setiap level punya bobot berbeda dalam perhitungan skor.
- **Skor kesiapan real-time**: persentase 0-100% dengan indikator progres beranimasi dan ringkasan celah skill yang diperbarui langsung saat level diubah.
- **Roadmap 3 fase berbasis prasyarat**: urutan belajar disusun dari dasar ke lanjutan, lengkap dengan estimasi durasi per fase dan rekomendasi skill berikutnya.
- **Pencocokan lowongan kerja offline**: tempel teks lowongan, lalu aplikasi mendeteksi skill yang paling dicari dan menyorot celah prioritasmu. Tersedia tombol "Coba Teks Contoh" untuk mencoba cepat.
- **Informasi gaji dan prospek kerja**: ringkasan peran, perkiraan rentang gaji, dan tingkat permintaan pasar untuk peran yang dipilih.
- **Dwibahasa dan dua tema**: Indonesia/Inggris serta mode terang/gelap, dengan pilihan yang diingat browser.
- **Data milikmu sendiri**: progres tersimpan otomatis di browser, serta dapat diekspor dan diimpor sebagai JSON.
- **Aksesibel dan siap cetak**: kontras warna sesuai WCAG AA, navigasi keyboard, dan tampilan cetak untuk disimpan sebagai PDF.

---

## Cara Menggunakan

1. Pilih peran target pada dropdown.
2. Tandai level setiap skill (klik, Enter, atau Spasi untuk berganti level).
3. Lihat skor kesiapan, celah skill, dan roadmap yang diperbarui otomatis.
4. Opsional: tempel teks lowongan pada kartu pencocokan, atau klik "Coba Teks Contoh", untuk melihat skill yang paling dicari pasar.
5. Simpan hasilnya dengan ekspor JSON atau cetak ke PDF.

---

## Cara Menjalankan

Tidak perlu instalasi, build, maupun Node.js.

- **Langsung:** unduh repositori ini, lalu buka `index.html` di browser.
- **Server lokal:** buka folder di VS Code dan jalankan ekstensi Live Server.
- **Online:** aktifkan GitHub Pages pada repositori (Settings → Pages) untuk mendapatkan tautan demo.

---

## Teknologi dan Arsitektur

- **HTML5 semantik, CSS3, dan JavaScript Vanilla (ES6+)**, tanpa framework, bundler, atau dependensi.
- **CSS modern:** custom properties untuk sistem desain dan tema, Grid untuk layout responsif, `@media print`, dan dukungan `prefers-reduced-motion`.
- **Web Storage API (`localStorage`)** untuk menyimpan progres dan preferensi di perangkat pengguna.
- **Privasi sejak desain:** teks lowongan dan data progres diproses dan disimpan di browser. Tidak ada data pengguna yang dikirim ke server.
- **Pemisahan tanggung jawab:** struktur di `index.html`, desain dan token tema di `style.css`, logika di `script.js`.

---

## Struktur Berkas

```text
├── index.html   # Struktur semantik antarmuka dan kontainer dashboard
├── style.css    # Sistem desain, variabel tema, layout responsif, gaya cetak
├── script.js    # Data peran (ROLES), logika skor, parsing lowongan, interaksi
└── README.md    # Dokumentasi proyek
```

---

## Proses Pengembangan

Proyek ini dibuat dalam rangkaian AI for Programming Workshop dan dikembangkan secara bertahap dengan bantuan AI:

- **IBM Bob:** pembuatan awal dengan metode *3-layer prompting* (Role & Context, Task & Requirements, Constraints & Output), disusul beberapa iterasi perbaikan fungsi dan aksesibilitas, penyegaran tampilan, serta penambahan fitur lanjutan (bahasa, tema gelap, level skill, dan pencocokan lowongan).
- **Refactoring manual terarah:** pemisahan kode menjadi `index.html`, `style.css`, dan `script.js` agar struktur mengikuti praktik pengembangan web yang umum.
- **Antigravity:** penyempurnaan desain dan layout dengan skill desain untuk menghindari tampilan generik.

Setiap iterasi dirancang sebagai perbaikan terhadap file yang ada (*refinement*), bukan penulisan ulang, dan hasilnya diperiksa langsung di browser.

---

## Keterbatasan

- Pencocokan lowongan berbasis **kata kunci dan alias**, sehingga tidak memahami konteks kalimat atau istilah di luar daftar yang tersedia.
- Informasi gaji dan prospek kerja adalah **perkiraan kasar dari data lokal**, bukan data real-time, dan bervariasi menurut kota, perusahaan, serta pengalaman.
- Progres tersimpan **per browser dan perangkat**. Gunakan ekspor JSON untuk memindahkannya.
- Daftar skill per peran adalah kurasi umum dan tidak mewakili kebutuhan setiap perusahaan.

---

## Rencana Pengembangan

- Roadmap yang dipersonalisasi dengan AI berdasarkan CV atau deskripsi lowongan.
- Sinkronisasi data lowongan secara otomatis melalui API.
- Akun pengguna dan sinkronisasi progres lintas perangkat.
- Integrasi dengan platform belajar dan pengingat jadwal belajar.
- Penambahan peran karier lain.

---

© 2026 Rafky Permana. Developed as part of personal portfolio based on IBM SkillsBuild AI for Programming Workshop.
