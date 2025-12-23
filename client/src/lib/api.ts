const API_URL = 'http://localhost:3001';

type BookingPayload = {
  name: string;
  email: string;
  moveDate: string;
};

export async function createBooking(data: BookingPayload) {
  const response = await fetch(`${API_URL}/bookings`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to create booking');
  }

  return response.json();
}
