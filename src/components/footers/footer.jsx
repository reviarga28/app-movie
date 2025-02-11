export default function Footer() {
  return (
    <div className="grid items-center pt-5 w-full bg-gray-900 text-white">
      <div className="flex h-56 gap-44 px-10">
        <div className="flex h-44">
          <p className="flex items-center text-sm text-slate-400 w-80">
            Platform streaming film terbaik di Indonesia menawarkan beragam
            konten berkualitas, mulai dari film lokal hingga internasional.
            Beberapa pilihan populer termasuk Netflix, Disney+ Hotstar, Vidio,
            dan Prime Video, dengan fitur seperti kualitas HD, download offline,
            dan rekomendasi personal.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-lg mb-2 font-semibold">Menu</h1>
          <p className="text-slate-400 text-sm">Beranda</p>
          <p className="text-slate-400 text-sm">Film</p>
          <p className="text-slate-400 text-sm">Serial Tv</p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-lg mb-2 font-semibold">Bantuan</h1>
          <p className="text-slate-400 text-sm">FAQ</p>
          <p className="text-slate-400 text-sm">Kontak</p>
          <p className="text-slate-400 text-sm">Syarat dan Ketentuan</p>
          <p className="text-slate-400 text-sm">Kebijakan Privasi</p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-lg mb-2 font-semibold">Ikuti Kami</h1>
          <p>Instagram</p>
          <p>Twitter</p>
          <p>Facebook</p>
        </div>
      </div>
      <div className="flex justify-center items-center h-16 border-t-2 border-gray-600">
        <h1 className="text-sm text-slate-400">&copy; 2024 Movie App. Hak Cipta Dilindungi.</h1>
      </div>
    </div>
  );
}
