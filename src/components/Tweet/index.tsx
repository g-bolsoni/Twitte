import React from 'react';

import { Container,
         Retweeted,  
         RocketseatIcon,
         Body,
         Avatar,
         Content,
         Header,
         Dot,
         Description,
         ImageContent,
         Icons,
         Status,
         CommentIcon,
         RetweetIcon,
         LikeIcon
        } from './styles';

const Tweet: React.FC = () => {
  return (
      <Container>
          <Retweeted>
              <RocketseatIcon/>
              You are Retweeted
          </Retweeted>

          <Body>
                <Avatar/>

                <Content>
                    <Header>
                        <strong>GiovaneBolsoni</strong>
                        <span>@giovane_bolsoni</span>
                        <Dot/>
                        <time>04 de junho</time>
                    </Header>

                    <Description>A simple Tweet</Description>
                    
                    <ImageContent/>

                    <Icons>
                        {/*Icone para de conversa(Comentários) */}
                        <Status>
                            <CommentIcon/>
                            18
                        </Status>
                        {/*Icone para de conversa(Comentários) */}
                        <Status>
                            <RetweetIcon/>
                            18
                        </Status>
                        
                        <Status>
                            <LikeIcon/>
                            9999
                        </Status>
                        

                    </Icons>
                </Content>
          </Body>
      </Container>
  );
}

export default Tweet;