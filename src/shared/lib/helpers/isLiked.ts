export const isLiked = (likes: Like[], userId?: string) =>
  likes?.some(favorite => favorite.userId === userId);
