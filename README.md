# 🧭 Tech Skill Gap & Career Roadmap Generator

Aplikasi web interaktif untuk mengidentifikasi celah skill teknologi dan membuat peta pembelajaran personal berdasarkan jalur karier yang dipilih.

## Deskripsi

Generator ini membantu pengguna memilih jalur karier teknologi (Frontend, Backend, Data Scientist, AI/ML, DevOps, Mobile, UI/UX, Cybersecurity), menandai skill yang sudah dimiliki atau sedang dipelajari, lalu secara otomatis menghasilkan roadmap belajar personal lengkap dengan estimasi waktu. Terdapat juga fitur pencocokan skill dengan teks lowongan kerja nyata.

## Fitur

- **Pilih jalur karier** dari 8 peran teknologi populer
- **Checklist skill tiga level** (Belum / Sedang Belajar / Dikuasai) dengan filter dan seleksi per fase
- **Skor kesiapan** dengan progress bar animasi, label kesiapan, dan estimasi minggu
- **Ringkasan celah skill** dengan chip warna berbeda untuk skill yang belum dan sedang dipelajari
- **Peta pembelajaran personal** berupa tiga fase berurutan dengan prioritas skill in-demand
- **Pencocokan lowongan kerja** — analisis lokal di browser, tanpa kirim data ke server
- **Tambah skill kustom** dari hasil analisis lowongan
- **Export & Import JSON** untuk menyimpan dan memulihkan progres
- **Multi-bahasa** (Bahasa Indonesia / English)
- **Dark mode** dengan persistensi preferensi
- **Animasi confetti** saat mencapai 100%
- **Print / PDF** dengan tampilan yang dioptimalkan

## Struktur File

```
├── index.html    — Struktur HTML halaman
├── style.css     — Semua CSS (variabel tema, layout, komponen, animasi, print)
├── script.js     — Semua logika JavaScript (data ROLES, I18N, render, event)
└── README.md     — Dokumentasi ini
```

## Cara Menjalankan

**Opsi 1 — Buka langsung:**
Klik dua kali pada file `index.html` untuk membukanya di browser.

**Opsi 2 — VS Code Live Server:**
Klik kanan `index.html` → *Open with Live Server*, lalu akses `http://localhost:5500`.

> Tidak ada dependensi eksternal, build tool, atau koneksi internet yang dibutuhkan.
