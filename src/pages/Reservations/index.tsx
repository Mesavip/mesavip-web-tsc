import React, { useState, useEffect } from 'react';
import { Container, ReservationsWrapper } from './styles';
import { api } from '../../services/api';
import ReservationCard from './Components/ReservationCard';

interface Reservation {
  id: string;
  restaurant: string;
  day: string;
  month: string;
  time: string;
  avg_rating: string;
  city?: string;
  address?: string;
}

export function Reservations() {
  const [pastReservations, setPastReservations] = useState<Reservation[]>([]);
  const [followingReservations, setFollowingReservations] = useState<
    Reservation[]
  >([]);

  useEffect(() => {
    api.get('reservations/list').then((item) => {
      setPastReservations(item.data.pastReservations);
      setFollowingReservations(item.data.followingReservations);
    });
  }, []);

  return (
    <Container>
      <h1>Following reservations</h1>

      <ReservationsWrapper>
        {followingReservations.map((reservation) => (
          <ReservationCard reservation={reservation} />
        ))}
      </ReservationsWrapper>

      <h1>Past reservations</h1>

      <ReservationsWrapper>
        {pastReservations.map((reservation) => (
          <ReservationCard reservation={reservation} past />
        ))}
      </ReservationsWrapper>
    </Container>
  );
}
