import { supabase } from './supabase';

export type UserRole = 
  | 'guest' 
  | 'user' 
  | 'sales_manager' 
  | 'content_admin' 
  | 'admin' 
  | 'super_admin' 
  | 'doctor' 
  | 'patient' 
  | 'customer';

export type ContextType = 'store' | 'hospital' | 'global';

export interface ContextMembership {
  role: UserRole;
  context_type: ContextType;
  context_id: string;
}

/**
 * Fetches all roles/memberships for the current authenticated user.
 */
export async function getUserMemberships() {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return [];

  const { data, error } = await supabase
    .from('context_memberships')
    .select('role, context_type, context_id')
    .eq('user_id', user.id);

  if (error) {
    console.error('Error fetching memberships:', error);
    return [];
  }

  return data as ContextMembership[];
}

/**
 * Checks if the current user has a specific role in a specific context.
 */
export async function hasRole(role: UserRole, context: ContextType, contextId: string = 'all'): Promise<boolean> {
  const memberships = await getUserMemberships();
  return memberships.some(
    m => m.role === role && 
         m.context_type === context && 
         (m.context_id === contextId || m.context_id === 'all')
  );
}

/**
 * Fetches the user's base profile.
 */
export async function getUserProfile() {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  if (error) {
    console.error('Error fetching profile:', error);
    return null;
  }

  return data;
}
