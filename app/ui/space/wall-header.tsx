import { PutBlobResult } from '@vercel/blob';
import Image from 'next/image';

type WallHeader = {
  imagePreview: string;
  handleOpenWall: (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    isOpen: boolean,
  ) => void;
  blob: PutBlobResult | null;
};
export default function WallHeader({
  imagePreview,
  handleOpenWall,
  blob,
}: WallHeader) {
  return (
    <div
      style={{
        backgroundColor: 'rgba(999,999,999,.5)',
        position: 'absolute',
        height: '50px',
        top: '0',
        left: '0',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <button
        type="button"
        style={{ margin: '0 30px' }}
        onClick={(e) => handleOpenWall(e, false)}
      >
        <Image
          src="/icon/back-button.png"
          alt="My Icon"
          width="25"
          height="25"
        />
      </button>
      {imagePreview && (
        <>
          <p>{blob?.pathname}</p>
          <button type="submit" style={{ margin: '0 30px' }}>
            save
          </button>
        </>
      )}
    </div>
  );
}
