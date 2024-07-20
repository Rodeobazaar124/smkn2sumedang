import Container from '../../layouts/Container'
import Button from '@/components/ui/button'

export const LandingPendaftaran = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      <div className="bg-primary py-16">
        <Container className="space-y-6">
          <h1 className="text-3xl lg:text-4xl text-white font-semibold">Pendaftaran Peserta Didik Baru (PPDB)</h1>
          <p className="text-white">Semua informasi mengenai pendaftaran peserta didik baru di SMK Negeri 2 Sumedang</p>
          <Button text="Cek Hasil" variant="primary" rounded="full" url="https://ppdb.jabarprov.go.id/wilayah-ppdb/cadisdik/SUMEDANG/info-pendaftar/20208394" className="shadow-md shadow-[#1358A0]" />
        </Container>
      </div>
      <div className="bg-secondary py-16">
        <Container className="space-y-6">
          <h1 className="text-3xl lg:text-4xl text-black font-semibold">Pemilihan Ketua OSIS dan MPK</h1>
          <p className="text-black">Kunjungi laman untuk mengikuti e-voting pemilihan Ketua OSIS dan MPK 2024</p>
          <Button text="Info lebih lanjut" variant="dark" rounded="full" url="https://sipentaskumis.smkn2sumedang.sch.id" />
        </Container>
      </div>
    </section>
  )
}
