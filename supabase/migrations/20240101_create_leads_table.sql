
-- Create leads table
create table public.leads (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  first_name text,
  last_name text,
  email text,
  enquiry_type text,
  message text,
  status text default 'new' -- 'new', 'contacted', 'closed'
);

-- Enable Row Level Security (RLS)
alter table public.leads enable row level security;

-- Create policy to allow anonymous inserts (for public contact form)
create policy "Enable insert for everyone" on public.leads for insert with check (true);

-- Create policy to allow read access only to authenticated users (admins)
-- You might want to refine this if you have specific admin roles
create policy "Enable read access for authenticated users only" on public.leads for select using (auth.role() = 'authenticated');
