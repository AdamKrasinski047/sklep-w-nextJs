'use client';

import { LuUser } from 'react-icons/lu';
import Image from 'next/image';
import { useUser } from '@clerk/nextjs';

function UserIcon() {
  const { user } = useUser();
  const profileImage = user?.imageUrl;

  if (profileImage) {
    return (
      <Image
        src={profileImage}
        alt="Zdjęcie użytkownika"
        width={24}
        height={24}
        className="w-6 h-6 rounded-full object-cover"
      />
    );
  }

  return <LuUser className="w-6 h-6 bg-primary rounded-full text-white" />;
}

export default UserIcon;
