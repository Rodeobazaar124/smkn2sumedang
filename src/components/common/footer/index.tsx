import Container from '../layouts/Container'
import Image from 'next/image'
import Link from 'next/link'
import { menu, jurusan, jelajah } from '@/data/menu'

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'

const social = [
  {
    icon: <FaFacebookF />,
    link: 'https://www.facebook.com/officialsmkn2sumedang.sch.id'
  },
  {
    icon: <FaTwitter />,
    link: 'https://x.com/gridazofficial'
  },
  {
    icon: <FaInstagram />,
    link: 'https://www.instagram.com/smkn2sumedang.official/'
  },
  // {
  //   icon: <FaLinkedin />,
  //   link: ''
  // },
  {
    icon: <FaYoutube />,
    link: 'https://www.youtube.com/channel/UCvwVhIQrFLJmf2_kWZi1c7Q'
  }
]

export const Footer = () => {
  return (
    <footer className="w-full bg-stoke py-10">
      <Container className="border-b border-dark pb-6 flex flex-wrap-reverse lg:flex-nowrap mb-6">
        <div className="w-full lg:w-3/5 mr-10 space-y-6">
          <div className="flex items-center space-x-4">
            <Image src={'/icons/logo-smea.svg'} alt={'smkn2sumedang'} height={56} width={44}></Image>
            <span className="text-xl text-white font-bold">SMKN 2 Sumedang</span>
          </div>
          <p className="text-white text-sm">
            SMKN 2 Sumedang merupakan salah satu SMK yang ada di Kab. Sumedang. Terdapat 4 kompetensi keahlian, yakni
            Akuntasi dan Keuangan Lembaga, Otomatisasi dan Tata Kelola Perkantoran, Bisnis Daring dan Pemasaran, serta
            Rekayasa Perangkat Lunak
          </p>
          <div className="flex space-x-4">
            {social.map((item, index) => (
              <span key={index} className="text-white text-lg bg-secondary p-2 rounded-full">
                <Link href={item.link}>{item.icon}</Link>
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 space-x-1 mb-10 lg:mb-0">
          <div className="text-white">
            <h1 className="text-lg capitalize mb-4 font-semibold">jelajah</h1>
            <ul className="text-sm space-y-2">
              {jelajah.map((item, index) => (
                <li key={index}>
                  <Link href={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-white">
            <h1 className="text-lg capitalize mb-4 font-semibold">halaman umum</h1>
            <ul className="text-sm space-y-2">
              {menu.map((item, index) => (
                <li key={index}>
                  <Link href={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-white">
            <h1 className="text-lg capitalize mb-4 font-semibold">kompetensi keahlian</h1>
            <ul className="text-sm space-y-2">
              {jurusan.map((item, index) => (
                <li key={index}>
                  <Link href={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
      <Container>
        <span className="text-white text-sm">© SMKN 2 Sumedang | All Rights Reserved</span>
      </Container>
    </footer>
  )
}
