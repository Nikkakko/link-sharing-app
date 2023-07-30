import { create } from 'zustand';

export interface LinkStore {
  links: {
    id: number;
    title: string;
    platform: string;
    url: string;
  }[];

  setLinks: () => void;
  removeLink: (id: number) => void;
  updateLink: (id: number, platform: string, url: string) => void;
}

export interface ProfileStore {
  user: {
    firstName: string;
    lastName: string;
    email: string;
    image: string | ArrayBuffer | null;
  };

  setUser: (
    firstName: string,
    lastName: string,
    email: string,
    image: string
  ) => void;
}

export const useLinkStore = create<LinkStore>(set => ({
  links: [],
  // Add more links and increase the id and title number
  setLinks: () =>
    set(state => ({
      links: [
        ...state.links,
        {
          id: state.links.length + 1,
          title: `Link #${state.links.length + 1}`,
          platform: '',
          url: '',
        },
      ],
    })),

  updateLink: (id: number, platform: string, url: string) =>
    set(state => ({
      //find the link with the id
      links: state.links.map(link => {
        if (link.id === id) {
          return { ...link, platform, url };
        } else {
          return link;
        }
      }),
    })),

  removeLink: (id: number) =>
    set(state => ({
      links: state.links.filter(link => link.id !== id),
    })),
}));

export const useProfileStore = create<ProfileStore>(set => ({
  user: {
    firstName: '',
    lastName: '',
    email: '',
    image: '',
  },

  setUser: (
    firstName: string,
    lastName: string,
    email: string,
    image: string
  ) => {
    set(state => ({
      user: {
        ...state.user,
        firstName,
        lastName,
        email,
        image,
      },
    }));
  },
}));
