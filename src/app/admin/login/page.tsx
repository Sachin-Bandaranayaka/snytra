import { redirect } from 'next/navigation';

export default function AdminLogin() {
    redirect('/handler/signin');
} 