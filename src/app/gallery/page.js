import React from 'react';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import styles from './page.module.css';

const GalleryPage = () => {
  const images = [
    'IMG_0291.JPG',
    'IMG_0292.JPG',
    'IMG_0309.JPG',
    'IMG_0574.JPG',
    'IMG_0577.JPG',
    'IMG_4540.JPG',
    'IMG_5732.JPG',
    'IMG_5733.JPG',
    'IMG_5734.JPG',
    'IMG_5735.JPG',
    '2d919283-f8f9-4057-9493-bcfc2d68a8e1.JPG',
    '344d11f9-2dc1-435e-809b-32d98e5f3d20.jpg',
    '3b01de55-58e6-47ff-b1e3-7b94c507e783.JPG',
    '45bb704a-72e9-4831-b6dc-fdb92ed8a756.JPG',
    '47194E33-1F95-42F5-A7C9-1A4712978F85.JPG',
    '4b0ac16e-c635-4780-b37e-b7fbe88e781b.JPG',
    '55ad0eab-70ac-4470-9bf2-83f7b0c54d95.jpg',
    '5a2cc79b-1039-4305-bbbc-b6ea51979924.JPG',
    '65379947-bedd-4abe-b635-f931cd4b7549.jpg',
    '77f45da9-f48d-4e7b-a12e-ea85917193ef.jpg',
    '7994282c-1112-4188-b829-47810525dcef.jpg',
    '929afb70-0109-4a1e-a62d-2afb230da6ed.jpg',
    '9c4f0588-2903-4991-bf49-e42772a47fa5.jpg',
    '9ecd3680-e01d-487e-9ad4-2165c7cdf7fa.jpg',
    'a12ecc29-ce71-4f37-8a80-5f19eea1a532.JPG',
    'a98e54ef-412b-49bb-b529-8ebd938d1a15.jpg',
    'c61331ac-d9d6-41a8-84ec-449551062c69.JPG',
    'cfe4f758-8e58-4286-89b7-8e2a67beb564.JPG',
    'fa8c5d04-2002-4959-b772-fdba3983ea9a.JPG',
  ];

  return (
    <div className={styles.container}>
      <PageHeader title="Gallery" subtitle="Have a look at our companies Gallery." />
      <main className={styles.main}>
        <div className={styles.gallery}>
          {images.map((image, index) => (
            <div key={index} className={styles.galleryItem}>
              <Image
                src={`/images/gallery/${image}`}
                alt={`Gallery image ${index + 1}`}
                width={500}
                height={300}
                className={styles.galleryImage}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default GalleryPage; 