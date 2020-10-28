import React from 'react';
import Feed from '../Feed';

 import { Container ,
            Banner,
            Avatar,
            ProfileData,
            LocationIcon,
            CakeIcon,
            Followage,
            EditButton

        } from './styles';

const ProfilePage: React.FC = () => {
  return (
      <Container>
          <Banner>
            <Avatar/>
          </Banner>

          <ProfileData>
             <EditButton outlined>Editar Perfil</EditButton>
            <h1>Giovane Souza</h1>
            <h2>@giovane-bolsoni</h2>
            <p>
                Developer at 
                {/*eslint-disable-next-line */}
                <a href="https://github.com/g-bolsoni/Copy-Twitter"/>
                    @Github
                {/*eslint-disable-next-line */}
                <a/>
            </p>

            <ul>
                <li>
                    <LocationIcon/>
                    São Paulo, Brasil
                </li>
                <li>
                    <CakeIcon/>
                    Nascido(a) em 04 de Junho de 2001
                </li>
            </ul>

            <Followage>
                <span>
                    Seguindo <strong>100</strong>
                </span>
                <span>
                    <strong>1000 </strong> seguidores
                </span>
            </Followage>
          </ProfileData>
          <Feed/>
      </Container>
  );
}

export default ProfilePage;