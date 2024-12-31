import { useState, useEffect } from 'react';
import { PostgrestError } from '@supabase/supabase-js';
import { supabase } from '../config/supabase';
import { handleSupabaseError } from '../utils/supabase-helpers';

interface UseSupabaseQueryResult<T> {
  data: T | null;
  error: string | null;
  isLoading: boolean;
}

export function useSupabaseQuery<T>(
  tableName: string,
  query: string,
  options: Record<string, unknown> = {}
): UseSupabaseQueryResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data: result, error: queryError } = await supabase
          .from(tableName)
          .select(query)
          .throwOnError();

        if (queryError) {
          throw queryError;
        }

        setData(result as T);
        setError(null);
      } catch (err) {
        const errorMessage = await handleSupabaseError(err);
        setError(errorMessage);
        setData(null);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [tableName, query]);

  return { data, error, isLoading };
}