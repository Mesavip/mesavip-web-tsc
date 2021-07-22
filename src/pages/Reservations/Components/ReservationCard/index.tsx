import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import {
  Container,
  MainWrapper,
  Date,
  InfoWrapper,
  NameAndRate,
  Rate,
  Time,
  Address,
  Separator,
  Button,
} from './styles';
import { api } from '../../../../services/api';

interface Props {
  reservation: {
    id: string;
    restaurant: string;
    day: string;
    month: string;
    time: string;
    avg_rating: string;
    city?: string;
    address?: string;
  };
  // Specify if it's a past reservation
  past?: boolean;
}

export default function ReservationCard({ reservation, past }: Props) {
  const handleClick = async (reservation_id: string) => {
    await api.delete(`reservations/cancel/${reservation_id}`);
    document.location.reload();
  };

  return (
    <>
      <Container>
        <MainWrapper>
          <Date>
            <h2>{reservation.day}</h2>
            <span>{reservation.month}</span>
          </Date>

          <InfoWrapper>
            <NameAndRate>
              <span>{reservation.restaurant}</span>
              <Rate>
                <FaStar />
                <span>{reservation.avg_rating}</span>
              </Rate>
            </NameAndRate>

            <Time>
              <span>{reservation.time}</span>
            </Time>

            {reservation.address ? (
              <Address>
                <span>{reservation.city}</span>
                <span>{reservation.address}</span>
              </Address>
            ) : null}
          </InfoWrapper>
        </MainWrapper>

        <Separator />

        {past ? (
          <Button> Rate reservation </Button>
        ) : (
          <Button onClick={() => handleClick(reservation.id)}>Cancel</Button>
        )}
      </Container>
    </>
  );
}
