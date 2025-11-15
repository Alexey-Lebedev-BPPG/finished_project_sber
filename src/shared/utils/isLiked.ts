import { Like } from '../types/global';

export const isLiked = (likes: Like[], userId: string | undefined) =>
	likes?.some((favorite) => favorite.userId === userId);
