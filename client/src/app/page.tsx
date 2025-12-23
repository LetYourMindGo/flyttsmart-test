import BookingForm from './components/BookingForm';

export default function HomePage() {
  return (
    <div className="w-full max-w-md rounded bg-white p-6 shadow">
      <h1 className="mb-4 text-xl font-semibold">
        Book Your Move
      </h1>

      <BookingForm />
    </div>
  );
}