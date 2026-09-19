import { useEffect, useMemo, useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { rooms } from "@/data/site";
import { loadInquiries, saveInquiry, type Inquiry } from "@/lib/inquiries";

function todayIso() {
  const d = new Date();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${month}-${day}`;
}

function addDays(iso: string, days: number) {
  const d = new Date(`${iso}T12:00:00`);
  d.setDate(d.getDate() + days);
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${month}-${day}`;
}

function formatLong(iso: string) {
  const d = new Date(`${iso}T12:00:00`);
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function InquireForm({ initialRoom }: { initialRoom?: string }) {
  const minArrival = todayIso();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [arrival, setArrival] = useState(minArrival);
  const [departure, setDeparture] = useState(addDays(minArrival, 3));
  const [room, setRoom] = useState(initialRoom ?? rooms[0]?.slug ?? "caldera");
  const [guests, setGuests] = useState(2);
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState<Inquiry | null>(null);
  const [previous, setPrevious] = useState<Inquiry[]>([]);

  useEffect(() => {
    setPrevious(loadInquiries());
  }, []);

  useEffect(() => {
    if (initialRoom) setRoom(initialRoom);
  }, [initialRoom]);

  const nights = useMemo(() => {
    const a = new Date(`${arrival}T12:00:00`);
    const b = new Date(`${departure}T12:00:00`);
    return Math.max(0, Math.round((b.getTime() - a.getTime()) / 86400000));
  }, [arrival, departure]);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    setError(null);

    if (name.trim().length < 2) {
      setError("Please give us a name we can write back to.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("We need a working email to hold the room.");
      return;
    }
    if (nights < 1) {
      setError("Departure should fall after arrival.");
      return;
    }

    const inquiry: Inquiry = {
      id: crypto.randomUUID(),
      name: name.trim(),
      email: email.trim(),
      arrival,
      departure,
      room,
      guests,
      message: message.trim(),
      createdAt: new Date().toISOString(),
    };
    saveInquiry(inquiry);
    setPrevious(loadInquiries());
    setSent(inquiry);
  }

  if (sent) {
    const chosen = rooms.find((r) => r.slug === sent.room);
    return (
      <div className="rounded-2xl bg-paper-deep p-6 md:p-8">
        <p className="kicker">Request received</p>
        <h2 className="mt-3 font-serif text-title font-medium tracking-tight">
          We have your dates, {sent.name.split(" ")[0]}.
        </h2>
        <p className="mt-4 max-w-lg text-ink-soft">
          The house will write to {sent.email} within a day. You asked for{" "}
          {chosen?.name ?? "a room"} from {formatLong(sent.arrival)} to{" "}
          {formatLong(sent.departure)}, for {sent.guests}{" "}
          {sent.guests === 1 ? "guest" : "guests"}.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button type="button" variant="outline" onClick={() => setSent(null)}>
            Send another
          </Button>
          <Button asChild variant="solid">
            <Link to="/stay">Look at the rooms</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={onSubmit} className="space-y-5" noValidate>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="arrival">Arrival</Label>
            <Input
              id="arrival"
              name="arrival"
              type="date"
              min={minArrival}
              value={arrival}
              onChange={(e) => {
                const next = e.target.value;
                setArrival(next);
                if (next >= departure) setDeparture(addDays(next, 2));
              }}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="departure">Departure</Label>
            <Input
              id="departure"
              name="departure"
              type="date"
              min={addDays(arrival, 1)}
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="room">Room</Label>
            <select
              id="room"
              name="room"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
              className="flex h-11 w-full rounded-md border border-ink/15 bg-paper px-3 font-sans text-sm text-ink outline-none focus-visible:border-sage focus-visible:ring-2 focus-visible:ring-sage/20"
            >
              {rooms.map((item) => (
                <option key={item.slug} value={item.slug}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="guests">Guests</Label>
            <Input
              id="guests"
              name="guests"
              type="number"
              min={1}
              max={4}
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">A note, if you like</Label>
          <Textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Anniversaries, a late arrival, no fish, a request for the chapel walk…"
          />
        </div>

        <p className="text-sm text-muted tabular-nums">
          {nights} {nights === 1 ? "night" : "nights"} in the house.
        </p>

        {error ? (
          <p className="text-sm text-ink" role="alert">
            {error}
          </p>
        ) : null}

        <Button type="submit" size="lg">
          Request the stay
        </Button>
      </form>

      {previous.length > 0 ? (
        <div className="mt-12 border-t border-ink/10 pt-8">
          <p className="kicker">On this device</p>
          <ul className="mt-4 space-y-3">
            {previous.slice(0, 4).map((item) => {
              const chosen = rooms.find((r) => r.slug === item.room);
              return (
                <li key={item.id} className="text-sm text-ink-soft">
                  <span className="text-ink">{chosen?.name ?? "Room"}</span>
                  {" · "}
                  {formatLong(item.arrival)} – {formatLong(item.departure)}
                  {" · "}
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
