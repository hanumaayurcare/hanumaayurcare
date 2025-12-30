# Supabase Schema Migration Instructions

This directory contains the SQL migration scripts to set up the Hanuman Ayurcare multi-schema architecture.

## Migration Order

Please execute these scripts in the **Supabase SQL Editor** in the following order:

1.  **`001_initialize_public_schema.sql`**: Sets up the core identity layer, custom roles, and auth-to-profile sync trigger.
2.  **`002_initialize_store_schema.sql`**: Sets up the Online Pharmacy domain (Store schema, products, orders).
3.  **`003_initialize_hospital_schema.sql`**: Sets up the Ayurvedic Hospital domain (Clinical records, appointments, and RLS helper functions).

## Key Features

- **Contextual RBAC**: Users can have different roles in different subdomains (e.g., Doctor in hospital vs Customer in store).
- **Row-Level Security (RLS)**: Fine-grained access control using the `public.check_membership()` helper function.
- **Unified Identity**: All subdomains reference a single `auth.users` identity.

## Post-Setup

- After running the scripts, your existing users will not have entries in `public.profiles` or `public.context_memberships` unless they sign up again or you manually migrate them.
- To assign a role manually:
  ```sql
  INSERT INTO public.context_memberships (user_id, role, context_type)
  VALUES ('user-uuid-here', 'super_admin', 'global');
  ```
