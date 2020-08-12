import React from 'react';

import { FiPower, FiClock } from 'react-icons/fi';
import { Container, Header, HeaderContent, Profile, Content, Schedule, Calendar, NextAppointment } from './styles';

import LogoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';


const Dashboard: React.FC = () => {
    const { signOut, user } = useAuth();

    console.log(user);

    return (
        <Container>
        <Header>
            <HeaderContent>
                <img src={LogoImg} alt="Go Barber"/>

                <Profile>
                    <img src={user.avatar_url}
                        alt={user.name}
                    />
                    <div>
                        <span>Bem-vindo,</span>
                        <strong>{ user.name }</strong>
                    </div>
                </Profile>

                <button type="button" onClick={signOut}>
                    <FiPower />
                </button>
            </HeaderContent>
        </Header>
        <Content>
            <Schedule>
                <h1>Horários agendados</h1>
                <p>
                    <span>Hoje</span>
                    <span>Dia 06</span>
                    <span>Segunda-feira</span>
                </p>

                <NextAppointment>
                    <strong>Atendimento a seguir</strong>
                    <div>
                        <img
                            src="https://avatars1.githubusercontent.com/u/49786548?s=460&u=5a10d9fba489739901357dcb71c07b628d42c5d2&v=4"
                            alt="Anderson Fernandes"
                        />

                        <strong>Anderson Fernandes</strong>
                        <span>
                            <FiClock />
                            08:00
                        </span>
                    </div>
                </NextAppointment>
            </Schedule>
            <Calendar></Calendar>
        </Content>
    </Container>
    )
};

export default Dashboard;
