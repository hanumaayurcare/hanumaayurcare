# Troubleshooting Supabase Login

The error `Invalid access token format` suggests that your local Supabase CLI authentication token is invalid or expired.

To fix this:

1. Run `npx supabase logout` to clear existing credentials.
2. Run `npx supabase login` and follow the browser prompt to generate a new token.
3. Once logged in, try running `npx supabase db push` again.
