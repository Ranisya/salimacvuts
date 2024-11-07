function RowKepanitiaan(props:any) {
    return (
      <div className="border-2 border-indigo-500/75 rounded-lg bg-gray-800 p-2 my-5 text-white">
            <div className="container mx-auto">
              <div className="grid grid-cols-12 gap-1">
                <div className="col-span-12 md:col-span-4">{props.panitiaan}</div>
                <div className="col-span-12 md:col-span-4">{props.divisi}</div>
                <div className="col-span-12 md:col-span-4">{props.waktu}</div>
              </div>
            </div>
          </div>
    );
}

export default function RiwayatKepanitiaan() {
    return (
        <div className="container mx-auto p-2 text-center pt-20"> 
        <h2 className="text-2x1">Riwayat Kepanitiaan</h2>

        <RowKepanitiaan panitiaan="PIALA REKTOR 2024" divisi="Divisi P3K" waktu="Okt 2024 - Nov 2024"/>
        <RowKepanitiaan panitiaan="LATIHAN DASAR KEPEMIMPINAN MAHASISWA 2024" divisi="Divisi P3K" waktu="Okt 2024 - Nov 2024"/>
        <RowKepanitiaan panitiaan="SKRINING KESEHATAN" divisi="Divisi Keamanan" waktu="10 Oktober 2024"/>
        <RowKepanitiaan panitiaan="PEKAN OLAHRAGA DAN SENI KAMPUS 2023" divisi="Divisi Data" waktu="Okt 2023 - Des 2023"/>
        <RowKepanitiaan panitiaan="LATIHAN DASAR KEPEMIMPINAN MAHASISWA 2023" divisi="Sekretaris I" waktu="Sept 2023 - Nov 2023"/>
        <RowKepanitiaan panitiaan="KONVERGENSI PERILAKU MODEL AL-MA’SOEM" divisi="Divisi Data" waktu="Juli 2023 - Sept 2023"/>
        <RowKepanitiaan panitiaan="MA’SOEM UNIVERSITY CUP" divisi="Divisi Acara" waktu="Apr 2023 - Juni 2023"/>
        <RowKepanitiaan panitiaan="PEKAN OLAHRAGA DAN SENI KAMPUS 2022" divisi="Divisi Acara" waktu="Nov 2022 - Des 2022"/>
      </div>
    );
}