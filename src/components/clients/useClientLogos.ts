import { useState, useEffect } from 'react';
import type { ClientLogo } from './types';

export function useClientLogos() {
  const [logos, setLogos] = useState<ClientLogo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const clientLogos: ClientLogo[] = [
      {
        id: '1',
        name: 'Zepto',
        imageUrl: 'https://xxxvwkgzmeadztgulado.supabase.co/storage/v1/object/public/client_images/zeptonow_logo.jpeg?t=2024-12-20T06%3A58%3A00.033Z',
        alt: 'Zepto company logo'
      },
      {
        id: '2',
        name: 'Lovelocal',
        imageUrl: 'https://xxxvwkgzmeadztgulado.supabase.co/storage/v1/object/public/client_images/Lovelocal.png?t=2024-12-20T06%3A58%3A16.503Z',
        alt: 'Lovelocal company logo'
      },
      {
        id: '3',
        name: 'DCB Bank',
        imageUrl: 'https://xxxvwkgzmeadztgulado.supabase.co/storage/v1/object/public/client_images/DCB%20bank.jpeg?t=2024-12-20T06%3A59%3A18.237Z',
        alt: 'DCB Bank logo'
      },
      {
        id: '4',
        name: 'Flipkart',
        imageUrl: 'https://xxxvwkgzmeadztgulado.supabase.co/storage/v1/object/public/client_images/Flipkart.png?t=2024-12-20T06%3A59%3A32.963Z',
        alt: 'Flipkart company logo'
      },
      {
        id: '5',
        name: 'Spencers',
        imageUrl: 'https://xxxvwkgzmeadztgulado.supabase.co/storage/v1/object/public/client_images/Spencers.png?t=2024-12-20T06%3A59%3A46.292Z',
        alt: 'Spencers retail logo'
      },
      {
        id: '6',
        name: 'Tata 1mg',
        imageUrl: 'https://xxxvwkgzmeadztgulado.supabase.co/storage/v1/object/public/client_images/Tata%201mg.png?t=2024-12-20T06%3A59%3A57.161Z',
        alt: 'Tata 1mg logo'
      },
      {
        id: '7',
        name: 'Unity',
        imageUrl: 'https://xxxvwkgzmeadztgulado.supabase.co/storage/v1/object/public/client_images/Unity_Logo.jpg?t=2024-12-20T07%3A00%3A08.920Z',
        alt: 'Unity logo'
      },
      {
        id: '8',
        name: 'VLCC',
        imageUrl: 'https://xxxvwkgzmeadztgulado.supabase.co/storage/v1/object/public/client_images/VLCC.png?t=2024-12-20T07%3A00%3A16.396Z',
        alt: 'VLCC logo'
      }
    ];

    setLogos(clientLogos);
    setIsLoading(false);
  }, []);

  return { logos, isLoading };
}