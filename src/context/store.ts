import { db } from '@/lib/db';
import { create } from 'zustand';
import { auth } from '@clerk/nextjs';
import { uuid } from 'uuidv4';

export interface LinkStore {
  links: {
    id: string;

    platform: string;
    url: string;
  }[];

  setLinks: () => void;
  removeLink: (id: string) => void;
  updateLink: (id: string, platform: string, url: string) => void;
}

export interface ProfileStore {
  profileInfo: {
    firstName: string;
    lastName: string;
    email: string;
  };

  setProfileInfo: (firstName: string, lastName: string, email: string) => void;
}

export const useLinkStore = create<LinkStore>(set => ({
  links: [],
  // Add more links and increase the id and title number
  setLinks: () =>
    set(state => ({
      links: [
        ...state.links,
        {
          id: uuid(),
          platform: '',
          url: '',
        },
      ],
    })),

  updateLink: (id: string, platform: string, url: string) =>
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

  removeLink: (id: string) =>
    set(state => ({
      links: state.links.filter(link => link.id !== id),
    })),
}));

export const useProfileStore = create<ProfileStore>(set => ({
  profileInfo: {
    firstName: '',
    lastName: '',
    email: '',
  },

  setProfileInfo: (firstName: string, lastName: string, email: string) => {
    set(state => ({
      profileInfo: {
        ...state.profileInfo,
        firstName,
        lastName,
        email,
      },
    }));
  },
}));
