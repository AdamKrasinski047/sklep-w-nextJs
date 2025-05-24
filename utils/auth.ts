import { currentUser } from '@clerk/nextjs/server';

export const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) {
    throw new Error('Musisz być zalogowany');
  }
  return user;
};
