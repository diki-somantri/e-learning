const bcrypt = require("bcryptjs");
const NOW = Date.now();

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  return knex("progres")
    .del()
    .then(() => knex("materi").del())
    .then(() => knex("sub_bab").del())
    .then(() => knex("bab").del())
    .then(() => knex("mata_pelajaran").del())
    .then(() => knex("mode_pembelajaran").del())
    .then(() => knex("kelas").del())
    .then(() => knex("user").del())
    .then(() => {
      return knex("user").insert([
        {
          nama_user: "Andi",
          email: "andi@example.com",
          password: bcrypt.hashSync("password1", 10),
          created_at: new Date(NOW),
          updated_at: new Date(NOW),
        },
        {
          nama_user: "Budi",
          email: "budi@example.com",
          password: bcrypt.hashSync("password2", 10),
          created_at: new Date(NOW),
          updated_at: new Date(NOW),
        },
        {
          nama_user: "Citra",
          email: "citra@example.com",
          password: bcrypt.hashSync("password3", 10),
          created_at: new Date(NOW),
          updated_at: new Date(NOW),
        },
        {
          nama_user: "Dewi",
          email: "dewi@example.com",
          password: bcrypt.hashSync("password4", 10),
          created_at: new Date(NOW),
          updated_at: new Date(NOW),
        },
        {
          nama_user: "Eko",
          email: "eko@example.com",
          password: bcrypt.hashSync("password5", 10),
          created_at: new Date(NOW),
          updated_at: new Date(NOW),
        },
      ]);
    })
    .then(() => {
      return knex("kelas").insert([
        {
          nama_kelas: "Kelas 1",
          created_at: new Date(NOW),
          updated_at: new Date(NOW),
        },
        {
          nama_kelas: "Kelas 2",
          created_at: new Date(NOW),
          updated_at: new Date(NOW),
        },
        {
          nama_kelas: "Kelas 3",
          created_at: new Date(NOW),
          updated_at: new Date(NOW),
        },
        {
          nama_kelas: "Kelas 4",
          created_at: new Date(NOW),
          updated_at: new Date(NOW),
        },
        {
          nama_kelas: "Kelas 5",
          created_at: new Date(NOW),
          updated_at: new Date(NOW),
        },
        {
          nama_kelas: "Kelas 6",
          created_at: new Date(NOW),
          updated_at: new Date(NOW),
        },
        {
          nama_kelas: "Kelas 7",
          created_at: new Date(NOW),
          updated_at: new Date(NOW),
        },
        {
          nama_kelas: "Kelas 8",
          created_at: new Date(NOW),
          updated_at: new Date(NOW),
        },
        {
          nama_kelas: "Kelas 9",
          created_at: new Date(NOW),
          updated_at: new Date(NOW),
        },
        {
          nama_kelas: "Kelas 10",
          created_at: new Date(NOW),
          updated_at: new Date(NOW),
        },
        {
          nama_kelas: "Kelas 11",
          created_at: new Date(NOW),
          updated_at: new Date(NOW),
        },
        {
          nama_kelas: "Kelas 12",
          created_at: new Date(NOW),
          updated_at: new Date(NOW),
        },
        {
          nama_kelas: "Kelas 10 SMK",
          created_at: new Date(NOW),
          updated_at: new Date(NOW),
        },
        {
          nama_kelas: "Kelas 11 SMK",
          created_at: new Date(NOW),
          updated_at: new Date(NOW),
        },
        {
          nama_kelas: "Kelas 12 SMK",
          created_at: new Date(NOW),
          updated_at: new Date(NOW),
        },
        {
          nama_kelas: "UTBK & Ujian Mandiri",
          created_at: new Date(NOW),
          updated_at: new Date(NOW),
        },
        {
          nama_kelas: "Pelatihan Guru",
          created_at: new Date(NOW),
          updated_at: new Date(NOW),
        },
      ]);
    })
    .then(() => {
      return knex("mode_pembelajaran").insert([
        {
          nama_mode_pembelajaran: "Pembelajaran Tematik",
          deskripsi_mode_pembelajaran: "Deskripsi Pembelajaran Tematik",
          id_kelas: 1,
          created_at: new Date(NOW),
          updated_at: new Date(NOW),
        },
        {
          nama_mode_pembelajaran: "Pembelajaran Menurut Topik",
          deskripsi_mode_pembelajaran: "Deskripsi Pembelajaran Menurut Topik",
          id_kelas: 1,
          created_at: new Date(NOW),
          updated_at: new Date(NOW),
        },
        {
          nama_mode_pembelajaran: "Kurikulum Merdeka",
          deskripsi_mode_pembelajaran: "Deskripsi Kurikulum Merdeka",
          id_kelas: 1,
          created_at: new Date(NOW),
          updated_at: new Date(NOW),
        },
      ]);
    })
    .then(() => {
      return knex("mata_pelajaran").insert([
        {
          nama_mata_pelajaran: "Matematika",
          thumbnail_mata_pelajaran: "thumbnail1.png",
          id_mode_pembelajaran: 1,
          created_at: new Date(NOW),
          updated_at: new Date(NOW),
        },
        {
          nama_mata_pelajaran: "Bahasa Indonesia",
          thumbnail_mata_pelajaran: "thumbnail2.png",
          id_mode_pembelajaran: 1,
          created_at: new Date(NOW),
          updated_at: new Date(NOW),
        },
        {
          nama_mata_pelajaran: "IPA Terpadu",
          thumbnail_mata_pelajaran: "thumbnail3.png",
          id_mode_pembelajaran: 1,
          created_at: new Date(NOW),
          updated_at: new Date(NOW),
        },
        {
          nama_mata_pelajaran: "Pendidikan Karakter",
          thumbnail_mata_pelajaran: "thumbnail4.png",
          id_mode_pembelajaran: 1,
          created_at: new Date(NOW),
          updated_at: new Date(NOW),
        },
        {
          nama_mata_pelajaran: "Ruang Ngaji",
          thumbnail_mata_pelajaran: "thumbnail5.png",
          id_mode_pembelajaran: 1,
        },
      ]);
    })
    .then(() => {
      return knex("bab").insert([
        {
          nama_bab: "Bilangan 0-10",
          thumbnail_bab: "thumbnail1.png",
          id_mata_pelajaran: 1,
          created_at: new Date(NOW),
          updated_at: new Date(NOW),
        },
        {
          nama_bab: "Aplikasi Bilangan 0-10",
          thumbnail_bab: "thumbnail2.png",
          id_mata_pelajaran: 1,
          created_at: new Date(NOW),
          updated_at: new Date(NOW),
        },
        {
          nama_bab: "Geometri dan Pola",
          thumbnail_bab: "thumbnail3.png",
          id_mata_pelajaran: 1,
        },
        {
          nama_bab: "Bilangan 11-20",
          thumbnail_bab: "thumbnail4.png",
          id_mata_pelajaran: 1,
          created_at: new Date(NOW),
          updated_at: new Date(NOW),
        },
        {
          nama_bab: "Geometri dan Pola 2",
          thumbnail_bab: "thumbnail5.png",
          id_mata_pelajaran: 1,
          created_at: new Date(NOW),
          updated_at: new Date(NOW),
        },
        {
          nama_bab: "Pengukuran (1)",
          thumbnail_bab: "thumbnail6.png",
          id_mata_pelajaran: 1,
          created_at: new Date(NOW),
          updated_at: new Date(NOW),
        },
        {
          nama_bab: "Bilangan 21-40",
          thumbnail_bab: "thumbnail7.png",
          id_mata_pelajaran: 1,
          created_at: new Date(NOW),
          updated_at: new Date(NOW),
        },
        {
          nama_bab: "Aplikasi Bilangan 21-40",
          thumbnail_bab: "thumbnail8.png",
          id_mata_pelajaran: 1,
          created_at: new Date(NOW),
          updated_at: new Date(NOW),
        },
        {
          nama_bab: "Pengukuran (1)",
          thumbnail_bab: "thumbnail9.png",
          id_mata_pelajaran: 1,
          created_at: new Date(NOW),
          updated_at: new Date(NOW),
        },
        {
          nama_bab: "Pengukuran (2)",
          thumbnail_bab: "thumbnail10.png",
          id_mata_pelajaran: 1,
          created_at: new Date(NOW),
          updated_at: new Date(NOW),
        },
      ]);
    })
    .then(() => {
      return knex("sub_bab").insert([
        {
          nama_sub_bab: "Mengenal Bilangan 1-10 (1)",
          thumbnail_sub_bab: "thumbnail1.png",
          is_free: true,
          id_bab: 1,
          created_at: new Date(NOW),
          updated_at: new Date(NOW),
        },
        {
          nama_sub_bab: "Mengenal Bilangan 1-10 (2)",
          thumbnail_sub_bab: "thumbnail2.png",
          is_free: false,
          id_bab: 1,
          created_at: new Date(NOW),
          updated_at: new Date(NOW),
        },
        {
          nama_sub_bab: "Lebih Besar? Lebih Kecil? 1-10",
          thumbnail_sub_bab: "thumbnail3.png",
          is_free: false,
          id_bab: 1,
          created_at: new Date(NOW),
          updated_at: new Date(NOW),
        },
        {
          nama_sub_bab: "Bermain dengan Bilangan 1-10",
          thumbnail_sub_bab: "thumbnail4.png",
          is_free: false,
          id_bab: 1,
          created_at: new Date(NOW),
          updated_at: new Date(NOW),
        },
      ]);
    })
    .then(() => {
      return knex("materi").insert([
        {
          nama_materi: "Video 1",
          thumbnail_materi: "thumbnail1.png",
          tipe_materi: "Video",
          id_sub_bab: 1,
          created_at: new Date(NOW),
          updated_at: new Date(NOW),
        },
        {
          nama_materi: "End Quiz 1",
          thumbnail_materi: "thumbnail2.png",
          tipe_materi: "End Quiz",
          id_sub_bab: 1,
          created_at: new Date(NOW),
          updated_at: new Date(NOW),
        },
        {
          nama_materi: "Single Quiz 1",
          thumbnail_materi: "thumbnail3.png",
          tipe_materi: "Single Quiz",
          id_sub_bab: 1,
          created_at: new Date(NOW),
          updated_at: new Date(NOW),
        },
        {
          nama_materi: "Summary 1",
          thumbnail_materi: "thumbnail4.png",
          tipe_materi: "Summary",
          id_sub_bab: 1,
          created_at: new Date(NOW),
          updated_at: new Date(NOW),
        },
      ]);
    })
    .then(() => {
      return knex("progres").insert([
        {
          id_user: 1,
          id_materi: 1,
          status_progres: true,
          xp: 125,
          gold: 10,
          created_at: new Date(NOW),
          updated_at: new Date(NOW),
        },
        {
          id_user: 1,
          id_materi: 2,
          status_progres: false,
          xp: 0,
          gold: 0,
          created_at: new Date(NOW),
          updated_at: new Date(NOW),
        },
        {
          id_user: 1,
          id_materi: 3,
          status_progres: true,
          xp: 50,
          gold: 50,
          created_at: new Date(NOW),
          updated_at: new Date(NOW),
        },
        {
          id_user: 1,
          id_materi: 4,
          status_progres: false,
          xp: 0,
          gold: 0,
          created_at: new Date(NOW),
          updated_at: new Date(NOW),
        },
        {
          id_user: 2,
          id_materi: 1,
          status_progres: true,
          xp: 125,
          gold: 10,
          created_at: new Date(NOW),
          updated_at: new Date(NOW),
        },
        {
          id_user: 2,
          id_materi: 2,
          status_progres: true,
          xp: 0,
          gold: 0,
          created_at: new Date(NOW),
          updated_at: new Date(NOW),
        },
        {
          id_user: 2,
          id_materi: 3,
          status_progres: true,
          xp: 50,
          gold: 50,
          created_at: new Date(NOW),
          updated_at: new Date(NOW),
        },
        {
          id_user: 2,
          id_materi: 4,
          status_progres: true,
          xp: 0,
          gold: 0,
          created_at: new Date(NOW),
          updated_at: new Date(NOW),
        },
      ]);
    });
};
