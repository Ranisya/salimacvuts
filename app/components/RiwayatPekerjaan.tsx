function RowPekerjaan(props:any) {
    return (
      <div className="border-2 border-indigo-500/75 rounded-lg bg-gray-800 p-2 my-5 text-white">
            <div className="container mx-auto">
              <div className="grid grid-cols-12 gap-1">
                <div className="col-span-12 md:col-span-4">{props.sebagai}</div>
                <div className="col-span-12 md:col-span-4">{props.instansi}</div>
                <div className="col-span-12 md:col-span-4">{props.tahun}</div>
              </div>
            </div>
          </div>
    );
}

export default function RiwayatPekerjaan() {
    return (
        <div className="container mx-auto p-2 text-center pt-20"> 
        <h2 className="text-2x1">Riwayat Pekerjaan</h2>

        <RowPekerjaan sebagai="Sekretaris" instansi="Japanese Club" tahun="2019 - 2020"/>
        <RowPekerjaan sebagai="DKM" instansi="Remaja Islam Masjid Al-Fath" tahun="2019 - 2020"/>
        <RowPekerjaan sebagai="Input Data" instansi="Puskesmas Rancaekek" tahun="2021 - 2022"/>
        <RowPekerjaan sebagai="Sekretaris" instansi="KEMENDAGRI BEM MU" tahun="2023 - 2024"/>
        <RowPekerjaan sebagai="Anggota KPPS" instansi="PEMILU 2024" tahun="2024"/>
        <RowPekerjaan sebagai="Sekretaris" instansi="Yayasan Saung Kasunda Berkarya" tahun="2024 - 2025"/>
      </div>
    );
}