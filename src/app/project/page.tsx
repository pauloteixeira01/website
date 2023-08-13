'use client'

import React, { useEffect, useState } from 'react'

import { Container, Content, Ul, Li, TitleProject, Url, Created_at } from './styles'

interface ItemsApiProps {
  id: number;
  name: string;
  url: string;
  created_at: string;
}

export default function Project() {
  const [itemsApi, setItemsApi] = useState<ItemsApiProps[]>([])

  useEffect(() => {
    let abortController = new AbortController(); 

    function getGitHubAPI() {
      fetch('https://api.github.com/users/pauloteixeira01/repos')
      .then(async res => {
        
        if (!res.ok) {
          throw new Error(`Failure with status: ${res.status}`)
        }
        var data = await res.json()
        setItemsApi(data)
      })
      .catch(e => console.log(e))
    }

    getGitHubAPI()

    return () => abortController.abort();  
  }, [])

  return (
    <Container>
     <Content>
       <Ul>
        {itemsApi.map(item => (
          <Li key={item.id}>
            <TitleProject>{item.name.toUpperCase()}</TitleProject>
            <Url>URL: {item.url}</Url>
            <Created_at>Data Criação: { Intl.DateTimeFormat('pt-BR')
              .format(new Date(item.created_at))}
            </Created_at>
          </Li>
        ))}
       </Ul>
     </Content>
   </Container>
  )
}