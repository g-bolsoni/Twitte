import React from 'react';
import Button from '../Button'

import { Container,
        Topside,
        Logo,
        MenuButton,
        HomeIcon,
        BellIcon,
        EmailIcon,
        FavoriteIcon,
        ProfileIcon,
} from './styles';

const MenuBar: React.FC = () => {
  return (
      <Container>
          <Topside>
              <Logo/>
            {/*Logo da casinha */}
              <MenuButton>
                  <HomeIcon/>
                  <span>Home Page</span>
              </MenuButton>

            {/*Logo de Notificações */}
              <MenuButton>
                  <BellIcon/>
                  <span>Notifications</span>
              </MenuButton>

            {/*Logo de Mensagens */}
              <MenuButton>
                  <EmailIcon/>
                  <span>Message</span>
              </MenuButton>

            {/*Logo da Favoritados */}
              <MenuButton>
                  <FavoriteIcon/>
                  <span>Favorites</span>
              </MenuButton>

            {/*Logo do Perfil */}
            <MenuButton>
                  <ProfileIcon className="active"/>
                  <span>Your Profile</span>
              </MenuButton>

            <Button>
                <span>Tweetar</span>
            </Button>


          </Topside>
      </Container>
  );
}

export default MenuBar;