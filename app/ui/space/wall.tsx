'use client';

import type { PutBlobResult } from '@vercel/blob';
import Image from 'next/image';
import { useState, useRef } from 'react';
import bg from '@/public/space/paper-texture.jpg';
import WallHeader from './wall-header';

export default function Wall() {
  const [isOpenFirstWall, setIsOpenFirstWall] = useState(false);
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  const [imagePreview, setImagePreview] = useState('');

  const handleOpenWall = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    isOpen: boolean,
  ) => {
    e.stopPropagation();
    setIsOpenFirstWall(isOpen);
  };

  const addPreviewImage = (file: any) => {
    if (file) {
      const reader = new FileReader() as any;
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImagePreview(reader.result);
      };
    }
  };

  const handleSelectImage = () => {
    inputFileRef.current!.click();
  };

  const handleFileUpload = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!inputFileRef.current?.files) {
      throw new Error('No file selected');
    }

    const file = inputFileRef.current.files[0];

    const response = await fetch(`/api/art/upload?filename=${file.name}`, {
      method: 'POST',
      body: file,
    });

    const newBlob = (await response.json()) as PutBlobResult;

    setBlob(newBlob);
  };

  return (
    <div
      onClick={(e) => handleOpenWall(e, true)}
      style={{
        left: 0,
        backgroundColor: '#f8f8f8',
        backgroundImage: `url(${bg.src})`,
        backgroundSize: 'cover', // 이미지를 화면에 꽉 차게 설정
        backgroundPosition: 'center center', // 이미지를 가운데로 정렬
        transformOrigin: '0 0',
        boxShadow: '5px 50px 30px rgba(0, 0, 0, 0.1)',
        transition: 'all 1s',
        zIndex: 1,

        ...(isOpenFirstWall
          ? {
              position: 'fixed',
              width: '100%',
              height: '100vh',
              top: 0,
              right: 0,
              transform: 'none',
            }
          : {
              position: 'absolute',
              width: '35%',
              height: '75vh',
              top: '10%',
              right: 0,
              transform: 'rotateY(45deg) translateZ(-40px)',
            }),
      }}
    >
      <form
        onChange={(e) => addPreviewImage(e.target.files[0])}
        onSubmit={handleFileUpload}
      >
        <input
          name="file"
          ref={inputFileRef}
          style={{ visibility: 'hidden' }}
          type="file"
          required
        />
        {isOpenFirstWall && (
          <button
            onClick={handleSelectImage}
            type="button"
            style={{
              position: 'absolute',
              bottom: '20px',
              right: '20px',
              backgroundColor: 'rgba(000,000,000,.7)',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              src="/icon/add-art-icon.png"
              alt="My Icon"
              style={{ width: '30px' }}
              width={30}
              height={30}
            />
          </button>
        )}
        {/* 이미지 header영역 */}
        {isOpenFirstWall && (
          <WallHeader
            imagePreview={imagePreview}
            handleOpenWall={handleOpenWall}
            blob={blob}
          />
        )}
      </form>
      {imagePreview && (
        <div
          style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            priority
            src={imagePreview}
            alt="프로필 이미지 미리보기"
            width="500"
            height="200"
          />
        </div>
      )}
    </div>
  );
}
