import { fetchGallerys, fetchLatestInvoices, fetchCardData } from '../lib/data';
import { auth } from '@/auth';
import { User } from '../lib/definitions';
import bg from '@/public/icon/more.png';
import { list } from '@vercel/blob';
import Link from 'next/link';

export default async function Page() {
  const gallerys = await fetchGallerys();

  const userInfo = (await auth())!.user as User;
  const getBlobList = await list();

  return (
    <main className="p-6">
      <h1
        className="mb-4 pb-4 md:text-2xl"
        style={{ fontWeight: '500', fontSize: '1.5rem' }}
      >
        {userInfo.name}
      </h1>
      <div className="flex min-h-screen">
        {gallerys.map((gallery) => {
          return (
            <Link key={gallery.id} href={`/gallery/space/${gallery.id}`}>
              <div
                key={gallery.id}
                style={{
                  position: 'relative',
                  width: '400px',
                  height: '300px',
                  marginRight: '0.6rem',
                  backgroundColor: 'grey',
                  padding: '1.3rem 1rem',
                  boxShadow: '2px 0px 7px rgba(000,000,000,0.3)',
                }}
              >
                <h2 style={{ color: 'white', fontSize: '1.2rem' }}>
                  {gallery.title}
                </h2>
                <div
                  style={{
                    position: 'absolute',
                    top: '1.3rem',
                    right: '0.7rem',
                    width: '25px',
                    height: '25px',
                    backgroundImage: `url(${bg.src})`,
                    backgroundSize: 'cover', // 이미지를 화면에 꽉 차게 설정
                    backgroundPosition: 'center center', // 이미지를 가운데로 정렬
                  }}
                ></div>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
