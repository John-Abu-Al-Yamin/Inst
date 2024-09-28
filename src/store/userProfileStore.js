
import { create } from "zustand";

const userProfileStore = create((set) => ({
  userProfile: null,
  setUserProfile: (userProfile) => set({ userProfile }),
  // this is for adding post
  addPost: (post) =>
		set((state) => ({
			userProfile: { ...state.userProfile, posts: [post.id, ...state.userProfile.posts] },
		})),

    deletePost: (postId) =>
      set((state) => ({
        userProfile: {
          ...state.userProfile,
          posts: state.userProfile.posts.filter((id) => id !== postId),
        },
      })),
  

}));

export default userProfileStore;
