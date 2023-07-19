import { create } from 'zustand';

interface LinkStore {
  links: {
    id: number;
    title: string;
    platform: string;
    url: string;
  }[];
  setLinks: () => void;
}

export const useLinkStore = create<LinkStore>(set => ({
  links: [],
  // TODO: Add more links and increase the id and title number
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

  removeLink: (id: number) =>
    set(state => ({
      links: state.links.filter(link => link.id !== id),
    })),
}));
