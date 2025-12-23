'use client';

import { useState } from 'react';
import { createBooking } from '../../lib/api';

export default function BookingForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);

    try {
      await createBooking({
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        moveDate: formData.get('moveDate') as string,
      });

      setSuccess(true);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <p className="text-green-600">
        Thank you! Your booking has been sent.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        required
        placeholder="Namn"
        className="w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        name="email"
        type="email"
        required
        placeholder="E-post"
        className="w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        name="moveDate"
        type="date"
        required
        className="w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {error && <p className="text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        {loading ? 'Sending...' : 'Send Booking'}
      </button>
    </form>
  );
}
